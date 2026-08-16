export const metadata={title:'Offline'};

export default function OfflinePage(){
  return <main className="legalPage" id="main-content">
    <p className="eyebrow">Connection unavailable</p>
    <h1>EnteleBANK is temporarily offline.</h1>
    <p className="legalLead">The secure web application could not reach the network. Reconnect and try again; no banking instruction or transaction has been submitted from this offline screen.</p>
    <p><a className="button" href="/">Try the homepage again</a></p>
  </main>;
}
