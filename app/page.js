const services = [
  ['Personal banking', 'Proposed current and savings accounts with secure digital-first servicing.'],
  ['Business banking', 'Proposed accounts, payments and treasury capabilities for UK businesses.'],
  ['Payments', 'Proposed domestic and international payment services built around resilient infrastructure.'],
];

export default function Home() {
  return <>
    <div className="status">PROPOSED UK BANKING INSTITUTION · PRE-AUTHORISATION</div>
    <header>
      <a className="brand" href="#top" aria-label="EnteleBANK home"><span>Entele</span><strong>BANK</strong><small>A TVK Group Company</small></a>
      <nav aria-label="Primary navigation"><a href="#about">About</a><a href="#services">Proposed services</a><a href="#security">Security</a><a href="#regulatory">Regulatory</a><a href="#contact">Contact</a></nav>
    </header>
    <main id="top">
      <section className="hero">
        <p className="eyebrow">A new institution, being built responsibly.</p>
        <h1>Banking infrastructure for an intelligent financial world.</h1>
        <p className="lead">EnteleBANK is being developed as a digital-first UK banking institution focused on secure personal and business banking, resilient payments and responsible technology.</p>
        <a className="button" href="#regulatory">Our regulatory status</a>
        <div className="notice"><b>Important regulatory notice</b><p>EnteleBANK is a proposed UK banking institution currently under development. It is not currently authorised by the Prudential Regulation Authority (PRA) or Financial Conduct Authority (FCA) to accept deposits or provide regulated banking services. No deposit-taking or regulated banking activity requiring authorisation will commence unless and until the required regulatory authorisations and permissions have been obtained.</p></div>
      </section>

      <section id="about" className="split"><div><p className="eyebrow">About EnteleBANK</p><h2>Built as a bank from first principles.</h2></div><div><p>Our objective is to create a UK banking institution where security, resilience, clear customer outcomes and disciplined governance are designed into the operating model from the beginning.</p><p>EnteleBANK is intended to form part of TVK Group while maintaining the governance, risk management and operational arrangements appropriate to a regulated banking institution.</p></div></section>

      <section id="services"><p className="eyebrow">Proposed services</p><h2>Focused foundations. Responsible expansion.</h2><div className="cards">{services.map(([t,d])=><article key={t}><span>PROPOSED</span><h3>{t}</h3><p>{d}</p></article>)}</div><p className="fine">All services described on this website are prospective only and are subject to applicable regulatory authorisation, permissions, product governance and readiness.</p></section>

      <section id="security" className="dark"><p className="eyebrow">Security & resilience</p><h2>Trust must be engineered.</h2><p>Our proposed architecture is being designed around layered identity controls, financial-crime prevention, transaction monitoring, cybersecurity, auditability, operational resilience and disciplined third-party risk management.</p><div className="principles"><span>Secure by design</span><span>Resilient operations</span><span>Explainable controls</span><span>Human accountability</span></div></section>

      <section id="regulatory" className="split"><div><p className="eyebrow">Regulatory status</p><h2>Clarity before launch.</h2></div><div><p><strong>EnteleBANK is not currently an authorised bank.</strong></p><p>We are developing the proposed institution and its regulatory, governance, capital, risk, compliance and technology foundations. We will not accept deposits or undertake regulated banking activities requiring authorisation unless and until the relevant permissions have been obtained.</p><p>We do not claim that funds are currently protected by the Financial Services Compensation Scheme (FSCS), nor do we claim access to regulatory protections that do not presently apply.</p></div></section>

      <section id="contact" className="contact"><p className="eyebrow">Regulatory contact</p><h2>Institutional and regulatory enquiries.</h2><a href="mailto:regulatory@entelebank.com">regulatory@entelebank.com</a></section>
    </main>
    <footer><div className="brand footerBrand"><span>Entele</span><strong>BANK</strong><small>A TVK Group Company</small></div><p>EnteleBANK is under development and is not currently authorised by the PRA or FCA to accept deposits or provide regulated banking services.</p><p>© 2026 EnteleBANK. All rights reserved.</p></footer>
  </>;
}
