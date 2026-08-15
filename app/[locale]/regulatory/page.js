import { notFound } from 'next/navigation';
import { isLocale } from '../../../lib/i18n';
import { translations } from '../../../lib/translations';
import LanguageMenu from '../../../components/LanguageMenu';

export default async function LocalisedRegulatory({params}){
 const {locale}=await params;if(!isLocale(locale))notFound();const t=translations[locale];
 if(!t)return <main className="legalPage"><h1>Translation under controlled review.</h1><p>This regulatory translation is not yet approved for publication.</p><p><a href="/en/regulatory">Continue in English →</a></p></main>;
 return <main className="legalPage"><div className="localeTools"><LanguageMenu current={locale} path="/regulatory"/></div><p className="eyebrow">Regulatory status</p><h1>Clear about where we are.</h1><p className="legalLead">{t.regulatoryNotice}</p><h2>Authoritative language</h2><p>{t.authoritative}</p><h2>Regulatory enquiries</h2><p><a href="mailto:regulatory@entelebank.com">regulatory@entelebank.com</a></p></main>;
}
