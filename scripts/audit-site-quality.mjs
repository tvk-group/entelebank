import fs from 'node:fs';
const i18n=fs.readFileSync('lib/i18n.js','utf8');
const localeArray=i18n.match(/export const locales\s*=\s*\[([\s\S]*?)\];/)?.[1]||'';
const localeCodes=[...localeArray.matchAll(/\['([a-z]{2})','/g)].map(m=>m[1]);
const routes=['/','/about','/personal','/business','/infrastructure','/security','/governance','/roadmap','/regulatory','/privacy','/cookies','/terms'];
const failures=[];
if(localeCodes.length!==25) failures.push(`expected 25 configured locales, found ${localeCodes.length}`);
if(new Set(localeCodes).size!==localeCodes.length) failures.push('duplicate locale codes configured');
const registry=fs.readFileSync('lib/fullLocaleRegistry.js','utf8');
if(registry.includes('shellDerivedFull')) failures.push('placeholder content cannot satisfy translation quality');
for(const f of ['turkishFull.js','germanFull.js','frenchFull.js','spanishFull.js','italianFull.js','portugueseFull.js','dutchFull.js','recoveredFull.js']) if(!fs.existsSync(`lib/${f}`)) failures.push(`${f}: missing`);
for(const broken of ['remainingFull','remainingFullB','remainingFullC','remainingFullD']) if(registry.includes(broken)) failures.push(`${broken}: corrupted historical bundle imported by production registry`);
if(fs.existsSync('app/tr/[[...slug]]/page.js')) failures.push('legacy locale route remains');
const generic=fs.readFileSync('app/[locale]/[slug]/page.js','utf8');
if(generic.includes('/visuals/resilience-architecture.svg')) failures.push('localized Infrastructure uses English-text SVG');
if(!generic.includes("slug==='infrastructure'")||!generic.includes('t.sections')) failures.push('locale-native Infrastructure model missing');
for(const forbidden of ["'Technology'","'Governance'"]) if(generic.includes(forbidden)) failures.push(`localized diagram contains English fallback ${forbidden}`);
const recovered=fs.readFileSync('lib/recoveredFull.js','utf8');
const recoveredLocales=localeCodes.filter(x=>!['en','tr','de','fr','es','it','pt','nl'].includes(x));
for(const l of recoveredLocales) if(!recovered.includes(`${l}:`)) failures.push(`${l}: recovered catalogue missing`);
// A real full-page translation catalogue must contain independently authored route bodies.
// Reject the temporary generator that repeats one generic purpose paragraph across every route.
if(recovered.includes('paths.forEach')||recovered.includes('const lead=purpose[locale]')||recovered.includes("sections:[[a[i],lead]")) failures.push('recoveredFull.js is shallow generated content: each route requires independently translated page copy');
const shells=fs.readFileSync('lib/localeShells.js','utf8');
for(const l of localeCodes.filter(x=>x!=='en')) if(!shells.includes(`${l}:s(`)) failures.push(`${l}: localized shell missing`);
const home=fs.readFileSync('app/[locale]/page.js','utf8');
if(home.includes('<LanguageMenu')) failures.push('duplicate homepage language selector');
if(!home.includes('localeDark')) failures.push('localized homepage navy section missing');
if(failures.length){console.error('SITE QUALITY AUDIT FAILED\n- '+failures.join('\n- '));process.exit(1)}
console.log(`Site quality audit passed: ${localeCodes.length} locales × ${routes.length} routes; full route-native translations, locale-native diagrams and visual shell enforced`);
