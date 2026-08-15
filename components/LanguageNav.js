'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, localeCodes } from '../lib/i18n';

export default function LanguageNav() {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const parts = pathname.split('/').filter(Boolean);
  const current = localeCodes.includes(parts[0]) ? parts[0] : 'en';
  const rest = localeCodes.includes(parts[0]) ? parts.slice(1) : parts;

  function changeLanguage(event) {
    const locale = event.target.value;
    const suffix = rest.length ? `/${rest.join('/')}` : '';
    router.push(`/${locale}${suffix}`);
  }

  return <div className="languageNav">
    <span aria-hidden="true">🌐</span>
    <label className="srOnly" htmlFor="language-selector">Language</label>
    <select id="language-selector" value={current} onChange={changeLanguage} aria-label="Select language">
      {locales.map(([code,name]) => <option key={code} value={code}>{name}</option>)}
    </select>
  </div>;
}
