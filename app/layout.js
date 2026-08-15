import './globals.css';

export const metadata = {
  title: 'EnteleBANK | A TVK Group Company',
  description: 'EnteleBANK is a proposed UK digital banking institution under development.',
  metadataBase: new URL('https://www.entelebank.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
