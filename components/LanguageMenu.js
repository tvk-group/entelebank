'use client';
import { locales } from '../lib/i18n';

export default function LanguageMenu({ current='en', path='' }) {
  function changeLanguage(event){ window.location.assign(`/${event.target.value}${path}`); }
  return <label className="languageMenu"><span className="srOnly">Language</span><select aria-label="Language" value={current} onChange={changeLanguage}>
    {locales.map(([code,name]) => <option key={code} value={code}>{name}</option>)}
  </select></label>;
}
