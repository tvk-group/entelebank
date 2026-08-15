import { notFound } from 'next/navigation';
import { isLocale } from '../../lib/i18n';
import { translations } from '../../lib/translations';
import LanguageMenu from '../../components/LanguageMenu';

export function generateStaticParams(){return Object.keys(translations).map(locale=>({locale}));}

export default async function LocalisedHome({params}){
  const {locale}=await params;
  if(!isLocale(locale)) notFound();
  const t=translations[locale];
  if(!t) return <main className="legalPage"><p className="eyebrow">EnteleBANK</p><h1>Translation under controlled review.</h1><p>This language is part of the EnteleBANK 25-language programme but has not yet been approved for publication. Regulatory and legal content will not be machine-translated or published before review.</p><p><a href="/en">Continue in English →</a></p></main>;
  return <main className="localeHome" dir="ltr"><div className="localeTools"><LanguageMenu current={locale}/></div><section className="hero"><p className="eyebrow">{t.hero.eyebrow}</p><h1>{t.hero.title}</h1><p className="lead">{t.hero.lead}</p><a className="button" href={`/${locale}/regulatory`}>{t.hero.cta}</a><div className="notice"><b>Important regulatory notice</b><p>{t.regulatoryNotice}</p></div></section></main>;
}
