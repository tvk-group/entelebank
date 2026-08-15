import {turkishFull} from './turkishFull';
import {germanFull} from './germanFull';
import {frenchFull} from './frenchFull';
import {spanishFull} from './spanishFull';
import {italianFull} from './italianFull';

const full={tr:turkishFull,de:germanFull,fr:frenchFull,es:spanishFull,it:italianFull};
export const getFullLocale=(locale)=>full[locale]||null;
export const registeredFullLocales=Object.keys(full);
