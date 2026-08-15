import fs from 'node:fs';
const manifest=JSON.parse(fs.readFileSync('lib/translation-manifest.json','utf8'));
const required=['/','/about','/personal','/business','/infrastructure','/security','/governance','/roadmap','/regulatory','/privacy','/cookies','/terms'];
const failures=[];
for(const [locale,data] of Object.entries(manifest.locales)){
  if(data.status!=='complete') continue;
  if(!data.shellComplete) failures.push(`${locale}: shellComplete must be true`);
  for(const route of required){if(data.routes?.[route]!==true) failures.push(`${locale}: missing complete route ${route}`)}
  if(data.regulatoryReview!==true) failures.push(`${locale}: regulatoryReview must be true`);
}
const localeLayout=fs.existsSync('app/[locale]/layout.js')?fs.readFileSync('app/[locale]/layout.js','utf8'):'';
for(const [locale,data] of Object.entries(manifest.locales)) if(data.status==='complete'&&!localeLayout.includes(`${locale}:`)) failures.push(`${locale}: complete locale missing from locale shell`);
if(failures.length){console.error('i18n completeness gate failed:\n- '+failures.join('\n- '));process.exit(1)}
console.log('i18n completeness gate passed');
