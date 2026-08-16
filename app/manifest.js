export default function manifest(){
  return {
    id:'/',
    name:'EnteleBANK',
    short_name:'EnteleBANK',
    description:'Proposed UK digital banking institution under development.',
    start_url:'/?source=pwa',
    scope:'/',
    display:'standalone',
    display_override:['window-controls-overlay','standalone','minimal-ui'],
    background_color:'#fbfbfa',
    theme_color:'#102747',
    lang:'en-GB',
    dir:'ltr',
    categories:['finance','business','productivity'],
    icons:[
      {src:'/icons/entelebank-192.png',sizes:'192x192',type:'image/png',purpose:'any'},
      {src:'/icons/entelebank-maskable.svg',sizes:'any',type:'image/svg+xml',purpose:'any maskable'}
    ],
    shortcuts:[
      {name:'About EnteleBANK',short_name:'About',url:'/about?source=pwa',icons:[{src:'/icons/entelebank-192.png',sizes:'192x192',type:'image/png'}]},
      {name:'Regulatory information',short_name:'Regulatory',url:'/regulatory?source=pwa',icons:[{src:'/icons/entelebank-192.png',sizes:'192x192',type:'image/png'}]}
    ]
  };
}
