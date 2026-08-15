export const publicRoutes=['/','/about','/personal','/business','/infrastructure','/security','/governance','/roadmap','/regulatory','/privacy','/cookies','/terms'];

export const localeStatus={
  en:{status:'authoritative',completeRoutes:publicRoutes},
  de:{status:'partial',completeRoutes:[]},
  tr:{status:'partial',completeRoutes:[]},
  fr:{status:'partial',completeRoutes:[]},
  es:{status:'partial',completeRoutes:[]},
  it:{status:'not-started',completeRoutes:[]},pt:{status:'not-started',completeRoutes:[]},nl:{status:'not-started',completeRoutes:[]},pl:{status:'not-started',completeRoutes:[]},uk:{status:'not-started',completeRoutes:[]},ru:{status:'not-started',completeRoutes:[]},ro:{status:'not-started',completeRoutes:[]},bg:{status:'not-started',completeRoutes:[]},el:{status:'not-started',completeRoutes:[]},cs:{status:'not-started',completeRoutes:[]},sk:{status:'not-started',completeRoutes:[]},hu:{status:'not-started',completeRoutes:[]},ar:{status:'not-started',completeRoutes:[]},fa:{status:'not-started',completeRoutes:[]},he:{status:'not-started',completeRoutes:[]},zh:{status:'not-started',completeRoutes:[]},ja:{status:'not-started',completeRoutes:[]},ko:{status:'not-started',completeRoutes:[]},hi:{status:'not-started',completeRoutes:[]},id:{status:'not-started',completeRoutes:[]}
};

export function isLocaleComplete(locale){const entry=localeStatus[locale];return !!entry&&entry.status==='complete'&&publicRoutes.every(route=>entry.completeRoutes.includes(route));}
