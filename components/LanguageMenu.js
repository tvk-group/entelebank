'use client';
import {usePathname,useRouter} from 'next/navigation';
import {locales,localeCodes} from '../lib/i18n';
export default function LanguageMenu({current='en'}){const pathname=usePathname()||'/';const router=useRouter();function changeLanguage(event){const target=event.target.value;const parts=pathname.split('/').filter(Boolean);const rest=localeCodes.includes(parts[0])?parts.slice(1):parts;const suffix=rest.length?`/${rest.join('/')}`:'';router.push(target==='en'?(suffix||'/'):`/${target}${suffix}`)}return <label className="languageMenu"><span className="srOnly">Language</span><select aria-label="Language" value={current} onChange={changeLanguage}>{locales.map(([code,name])=><option key={code} value={code}>{name}</option>)}</select></label>}
