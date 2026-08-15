export const locales = [
  ['en','English'],['de','Deutsch'],['tr','Türkçe'],['fr','Français'],['es','Español'],
  ['it','Italiano'],['pt','Português'],['nl','Nederlands'],['pl','Polski'],['uk','Українська'],
  ['ru','Русский'],['ro','Română'],['bg','Български'],['el','Ελληνικά'],['cs','Čeština'],
  ['sk','Slovenčina'],['hu','Magyar'],['ar','العربية'],['fa','فارسی'],['he','עברית'],
  ['zh','简体中文'],['ja','日本語'],['ko','한국어'],['hi','हिन्दी'],['id','Bahasa Indonesia']
];

export const localeCodes = locales.map(([code]) => code);
export const defaultLocale = 'en';
export const rtlLocales = new Set(['ar','fa','he']);
export const isLocale = (value) => localeCodes.includes(value);
