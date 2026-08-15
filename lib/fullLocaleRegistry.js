import {turkishFull} from './turkishFull';
import {germanFull} from './germanFull';
import {frenchFull} from './frenchFull';
import {spanishFull} from './spanishFull';
import {italianFull} from './italianFull';
import {portugueseFull} from './portugueseFull';
import {dutchFull} from './dutchFull';
import {remainingFull} from './remainingFull';
import {remainingFullB} from './remainingFullB';
import {remainingFullC} from './remainingFullC';
import {remainingFullD} from './remainingFullD';
import {remainingFullE} from './remainingFullE';

const full={
 tr:turkishFull,de:germanFull,fr:frenchFull,es:spanishFull,it:italianFull,pt:portugueseFull,nl:dutchFull,
 ...remainingFull,...remainingFullB,...remainingFullC,...remainingFullD,...remainingFullE
};
export const getFullLocale=(locale)=>full[locale]||null;
export const registeredFullLocales=Object.keys(full);
