import fs from 'node:fs';
const i18n=fs.readFileSync('lib/i18n.js','utf8');
const localeCodes=[...i18n.matchAll(/\['([a-z]{2})','/g)].map(m=>m[1]);
const routes=['/','/about','/personal','/business','/infrastructure','/security','/governance','/roadmap','/regulatory','/privacy','/cookies','/terms'];
const failures=[];
if(localeCodes.length!==25) failures.push(`expected 25 configured locales, found ${localeCodes.length}`);
const registry=fs.readFileSync('lib/fullLocaleRegistry.js','utf8');
if(registry.includes('shellDerivedFull')) failures.push('shellDerivedFull is placeholder-derived content and cannot satisfy full-translation quality');
const expectedFiles=['turkishFull.js','germanFull.js','frenchFull.js','spanishFull.js','italianFull.js','portugueseFull.js','dutchFull.js','remainingFullE.js'];
for(const f of expectedFiles) if(!fs.existsSync(`lib/${f}`)) failures.push(`${f}: missing`);
if(fs.existsSync('app/tr/[[...slug]]/page.js')) failures.push('legacy app/tr catch-all duplicates dynamic locale architecture');
const generic=fs.readFileSync('app/[locale]/[slug]/page.js','utf8');
if(generic.includes('/visuals/resilience-architecture.svg')) failures.push('localized Infrastructure uses English-text SVG; diagram must be localized or language-neutral');
if(!generic.includes("slug==='infrastructure'")) failures.push('localized Infrastructure diagram/rendering branch missing');
const shells=fs.readFileSync('lib/localeShells.js','utf8');
for(const l of localeCodes.filter(x=>x!=='en')) if(!shells.includes(`${l}:s(`)) failures.push(`${l}: localized shell missing`);
if(failures.length){console.error('SITE QUALITY AUDIT FAILED\n- '+failures.join('\n- '));process.exit(1)}
console.log(`Site quality structural audit passed: ${localeCodes.length} locales / ${routes.length} routes contract`);
