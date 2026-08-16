const CACHE_PREFIX='entelebank-pwa';
const CACHE_VERSION='v2';
const SHELL_CACHE=`${CACHE_PREFIX}-shell-${CACHE_VERSION}`;
const RUNTIME_CACHE=`${CACHE_PREFIX}-runtime-${CACHE_VERSION}`;
const CORE=['/','/offline','/manifest.webmanifest','/brand/entelebank-mark.svg','/brand/entelebank-wordmark.svg','/icons/entelebank-192.png','/icons/entelebank-maskable.svg'];
const SENSITIVE_PATH=/^\/(?:api|auth|account|dashboard|login|logout|admin|payments?|transfers?|cards?|kyc|checkout|billing|session|webhooks?)(?:\/|$)/i;

function cacheable(response){
  if(!response||!response.ok||response.type==='opaque')return false;
  const control=response.headers.get('cache-control')||'';
  const vary=response.headers.get('vary')||'';
  return !/(?:no-store|private)/i.test(control)&&vary.trim()!=='*'&&!response.headers.has('set-cookie');
}

async function put(cacheName,request,response){
  if(!cacheable(response))return;
  const cache=await caches.open(cacheName);
  await cache.put(request,response.clone());
}

self.addEventListener('install',(event)=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(SHELL_CACHE);
    await Promise.all(CORE.map(async(url)=>{
      try{
        const request=new Request(url,{cache:'reload'});
        const response=await fetch(request);
        if(cacheable(response))await cache.put(request,response);
      }catch{}
    }));
  })());
});

self.addEventListener('activate',(event)=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter((key)=>key.startsWith(CACHE_PREFIX)&&![SHELL_CACHE,RUNTIME_CACHE].includes(key)).map((key)=>caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('message',(event)=>{
  if(event.data?.type==='SKIP_WAITING')self.skipWaiting();
});

self.addEventListener('fetch',(event)=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin||SENSITIVE_PATH.test(url.pathname))return;

  if(request.mode==='navigate'){
    event.respondWith((async()=>{
      try{
        const response=await fetch(request);
        await put(RUNTIME_CACHE,request,response);
        return response;
      }catch{
        return (await caches.match(request))||(await caches.match('/offline'))||(await caches.match('/'));
      }
    })());
    return;
  }

  const staticAsset=url.pathname.startsWith('/_next/static/')||url.pathname.startsWith('/brand/')||url.pathname.startsWith('/icons/')||['style','script','image','font'].includes(request.destination);
  if(!staticAsset)return;

  event.respondWith((async()=>{
    const cached=await caches.match(request);
    const network=fetch(request).then(async(response)=>{
      await put(RUNTIME_CACHE,request,response);
      return response;
    }).catch(()=>cached);
    return cached||network;
  })());
});
