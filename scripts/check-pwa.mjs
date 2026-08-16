import {existsSync,readFileSync} from 'node:fs';

const fail=(message)=>{console.error(`PWA check failed: ${message}`);process.exitCode=1};
const required=['app/manifest.js','app/offline/page.js','app/pwa.css','components/PWAInstall.js','public/sw.js','public/icons/entelebank-192.png','public/icons/entelebank-maskable.svg','public/icons/apple-touch-icon.png'];
for(const file of required)if(!existsSync(file))fail(`missing ${file}`);

const manifest=readFileSync('app/manifest.js','utf8');
for(const token of ["display:'standalone'","scope:'/'","/icons/entelebank-192.png","/icons/entelebank-maskable.svg","purpose:'any maskable'"])if(!manifest.includes(token))fail(`manifest is missing ${token}`);

const sw=readFileSync('public/sw.js','utf8');
for(const token of ['SKIP_WAITING','/offline','SENSITIVE_PATH','no-store','private','api|auth|account'])if(!sw.includes(token))fail(`service worker is missing ${token}`);

const installer=readFileSync('components/PWAInstall.js','utf8');
for(const token of ['beforeinstallprompt','appinstalled','controllerchange','Add EnteleBANK to Home Screen'])if(!installer.includes(token))fail(`installer is missing ${token}`);

const layout=readFileSync('app/layout.js','utf8');
for(const token of ["import './pwa.css'",'<PWAInstall/>',"manifest:'/manifest.webmanifest'",'appleWebApp'])if(!layout.includes(token))fail(`layout is missing ${token}`);

function checkPng(path,width,height){
  const data=readFileSync(path);
  if(data.subarray(0,8).toString('hex')!=='89504e470d0a1a0a')return fail(`${path} is not a PNG`);
  const actualWidth=data.readUInt32BE(16);
  const actualHeight=data.readUInt32BE(20);
  if(actualWidth!==width||actualHeight!==height)fail(`${path} is ${actualWidth}x${actualHeight}, expected ${width}x${height}`);
}
checkPng('public/icons/entelebank-192.png',192,192);
checkPng('public/icons/apple-touch-icon.png',180,180);

const maskable=readFileSync('public/icons/entelebank-maskable.svg','utf8');
if(!maskable.includes('viewBox="0 0 512 512"')||!maskable.includes('#102747'))fail('maskable SVG contract is invalid');

if(!process.exitCode)console.log('EnteleBANK PWA contract verified.');
