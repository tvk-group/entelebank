import {notFound} from 'next/navigation';
import {isLocale,rtlLocales} from '../../lib/i18n';
import {getFullLocale} from '../../lib/fullLocaleRegistry';
import LanguageMenu from '../../components/LanguageMenu';
export default async function LocalisedHome({params}){const {locale}=await params;if(!isLocale(locale))notFound();const all=getFullLocale(locale);const t=all?.['/'];if(!t)notFound();return <main className="localeHome" dir={rtlLocales.has(locale)?'rtl':'ltr'}><div className="localeTools"><LanguageMenu current={locale}/></div><section className="hero"><p className="eyebrow">EnteleBANK</p><h1>{t.title}</h1><p className="lead">{t.lead}</p><a className="button" href={`/${locale}/regulatory`}>{t.regulatoryCta||'Regulatory status'}</a><div className="notice"><b>{t.noticeHeading||'Important regulatory notice'}</b><p>{t.notice}</p></div></section></main>}
