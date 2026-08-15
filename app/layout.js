import './globals.css';
import LanguageNav from '../components/LanguageNav';

export const metadata = {
  title: { default: 'EnteleBANK | A TVK Group Company', template: '%s | EnteleBANK' },
  description: 'EnteleBANK is a proposed UK digital banking institution under development.',
  metadataBase: new URL('https://www.entelebank.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="status">PROPOSED UK BANKING INSTITUTION · PRE-AUTHORISATION</div>
        <header>
          <a className="brand" href="/" aria-label="EnteleBANK home"><span>Entele</span><strong>BANK</strong><small>A TVK Group Company</small></a>
          <div className="headerActions"><nav aria-label="Primary navigation"><a href="/#about">About</a><a href="/#services">Proposed services</a><a href="/security">Security</a><a href="/regulatory">Regulatory</a><a href="/#contact">Contact</a></nav><LanguageNav /></div>
        </header>
        {children}
        <footer>
          <div className="brand footerBrand"><span>Entele</span><strong>BANK</strong><small>A TVK Group Company</small></div>
          <div><p>EnteleBANK is under development and is not currently authorised by the PRA or FCA to accept deposits or provide regulated banking services.</p><p className="footerLinks"><a href="/regulatory">Regulatory status</a><a href="/security">Security</a><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a></p></div>
          <p>© 2026 EnteleBANK. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
