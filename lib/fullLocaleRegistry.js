import {turkishFull} from './turkishFull';
import {germanFull} from './germanFull';
import {frenchFull} from './frenchFull';
import {spanishFull} from './spanishFull';
import {italianFull} from './italianFull';
import {portugueseFull} from './portugueseFull';

const full={tr:turkishFull,de:germanFull,fr:frenchFull,es:spanishFull,it:italianFull,pt:portugueseFull};
export const getFullLocale=(locale)=>full[locale]||null;
export const registeredFullLocales=Object.keys(full);
