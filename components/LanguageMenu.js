import { locales } from '../lib/i18n';

export default function LanguageMenu({ current='en', path='' }) {
  return <label className="languageMenu"><span className="srOnly">Language</span><select aria-label="Language" defaultValue={current} onChange={undefined}>
    {locales.map(([code,name]) => <option key={code} value={code}>{name}</option>)}
  </select><noscript><span>Language routes: {locales.map(([code,name],i)=><span key={code}> {i?'· ':''}<a href={`/${code}${path}`}>{name}</a></span>)}</span></noscript></label>;
}
