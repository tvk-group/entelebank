'use client';

import {useEffect, useRef, useState} from 'react';

const DISMISS_KEY='entelebank:pwa-install-dismissed';

function isStandalone(){
  return window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;
}

function isIosSafari(){
  const ua=window.navigator.userAgent;
  return /iphone|ipad|ipod/i.test(ua)&&/webkit/i.test(ua)&&!/crios|fxios|edgios|opios/i.test(ua);
}

function wasDismissed(){
  try{return window.sessionStorage.getItem(DISMISS_KEY)==='1'}catch{return false}
}

export default function PWAInstall(){
  const [installPrompt,setInstallPrompt]=useState(null);
  const [mode,setMode]=useState('hidden');
  const [registration,setRegistration]=useState(null);
  const reloading=useRef(false);

  useEffect(()=>{
    if(isStandalone())return undefined;
    let disposed=false;
    let handleControllerChange=null;

    const showUpdate=(reg)=>{
      if(disposed||!reg?.waiting)return;
      setRegistration(reg);
      setMode('update');
    };

    if('serviceWorker'in navigator&&(window.isSecureContext||window.location.hostname==='localhost')){
      const hadController=Boolean(navigator.serviceWorker.controller);

      navigator.serviceWorker.register('/sw.js',{scope:'/',updateViaCache:'none'}).then((reg)=>{
        if(disposed)return;
        setRegistration(reg);
        showUpdate(reg);
        reg.addEventListener('updatefound',()=>{
          const worker=reg.installing;
          worker?.addEventListener('statechange',()=>{
            if(worker.state==='installed'&&navigator.serviceWorker.controller)showUpdate(reg);
          });
        });
        void reg.update();
      }).catch(()=>{});

      handleControllerChange=()=>{
        if(!hadController||reloading.current)return;
        reloading.current=true;
        window.location.reload();
      };
      navigator.serviceWorker.addEventListener('controllerchange',handleControllerChange);
    }

    const beforeInstall=(event)=>{
      event.preventDefault();
      if(wasDismissed())return;
      setInstallPrompt(event);
      setMode('install');
    };
    const installed=()=>{
      setInstallPrompt(null);
      setMode('hidden');
    };
    window.addEventListener('beforeinstallprompt',beforeInstall);
    window.addEventListener('appinstalled',installed);

    if(isIosSafari()&&!wasDismissed())setMode('ios');

    return()=>{
      disposed=true;
      window.removeEventListener('beforeinstallprompt',beforeInstall);
      window.removeEventListener('appinstalled',installed);
      if(handleControllerChange){
        navigator.serviceWorker.removeEventListener('controllerchange',handleControllerChange);
      }
    };
  },[]);

  async function install(){
    if(!installPrompt)return;
    await installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
    setMode('hidden');
  }

  function update(){
    registration?.waiting?.postMessage({type:'SKIP_WAITING'});
  }

  function dismiss(){
    try{window.sessionStorage.setItem(DISMISS_KEY,'1')}catch{}
    setMode('hidden');
  }

  if(mode==='hidden')return null;
  const ios=mode==='ios';
  const updating=mode==='update';
  return <aside className="pwaInstall" role="dialog" aria-modal="false" aria-label={updating?'Update EnteleBANK':ios?'Add EnteleBANK to the Home Screen':'Install EnteleBANK'}>
    <img className="pwaInstall__icon" src="/icons/entelebank-192.png" width="48" height="48" alt=""/>
    <div className="pwaInstall__copy">
      <strong>{updating?'EnteleBANK update ready':ios?'Add EnteleBANK to Home Screen':'Install EnteleBANK'}</strong>
      <span>{updating?'Reload once to use the latest secure version.':ios?'In Safari, tap Share and then “Add to Home Screen”.':'Open EnteleBANK in its own app window on this device.'}</span>
    </div>
    {!ios&&<button className="pwaInstall__action" type="button" onClick={updating?update:install}>{updating?'Update':'Install'}</button>}
    <button className="pwaInstall__close" type="button" onClick={dismiss} aria-label="Dismiss message">×</button>
  </aside>;
}
