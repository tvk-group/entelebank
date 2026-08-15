import {notFound} from 'next/navigation';
import {isLocale,rtlLocales} from '../../../lib/i18n';
import {getFullLocale} from '../../../lib/fullLocaleRegistry';
import LanguageMenu from '../../../components/LanguageMenu';
export default async function LocalisedRegulatory({params}){const {locale}=await params;if(!isLocale(locale))notFound();const t=getFullLocale(locale)?.['/regulatory'];if(!t)notFound();return <main className="legalPage institutionalPage" dir={rtlLocales.has(locale)?'rtl':'ltr'}><div className="localeTools"><LanguageMenu current={locale} path="/regulatory"/></div><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p className="legalLead">{t.lead}</p>{t.sections?.map(([h,p])=><section key={h}><h2>{h}</h2>{p.includes('@')?<p><a href={`mailto:${p}`}>{p}</a></p>:<p>{p}</p>}</section>)}</main>}
