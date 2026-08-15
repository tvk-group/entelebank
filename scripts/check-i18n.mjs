import fs from 'node:fs';
const manifest=JSON.parse(fs.readFileSync('lib/translation-manifest.json','utf8'));
const i18n=fs.readFileSync('lib/i18n.js','utf8');
const configured=[...i18n.matchAll(/\['([a-z]{2})','/g)].map(m=>m[1]);
const required=manifest.requiredRoutes;
const failures=[];
if(configured.length!==25) failures.push(`configured locale count is ${configured.length}, expected 25`);
for(const locale of configured){
  if(locale==='en') continue;
  const data=manifest.locales?.[locale];
  if(!data){failures.push(`${locale}: missing manifest entry`);continue;}
  if(data.status!=='complete') failures.push(`${locale}: status is not complete`);
  if(data.shellComplete!==true) failures.push(`${locale}: shellComplete must be true`);
  if(data.regulatoryReview!==true) failures.push(`${locale}: regulatoryReview must be true`);
  for(const route of required) if(data.routes?.[route]!==true) failures.push(`${locale}: missing complete route ${route}`);
}
const localeLayout=fs.readFileSync('app/[locale]/layout.js','utf8');
for(const locale of configured.filter(x=>x!=='en')) if(!localeLayout.includes(`${locale}:`)) failures.push(`${locale}: missing locale shell`);
for(const rtl of ['ar','fa','he']) if(!i18n.includes(`'${rtl}'`)) failures.push(`${rtl}: RTL locale missing from i18n registry`);
if(failures.length){console.error('25-language completeness gate failed:\n- '+failures.join('\n- '));process.exit(1)}
console.log('25-language completeness gate passed');
