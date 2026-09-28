import '../styles/globals.css';

export const metadata = {
  title: 'MarcarExames.com | Todos os exames, um único sítio.',
  description:
    'A forma mais simples e rápida de pesquisar análises clínicas e imagiologia médica em Portugal.',
  keywords: [
    'marcar exames',
    'exames medicos',
    'ressonancia magnetica',
    'ecografia',
    'analises clinicas',
    'tac',
    'saude portugal',
  ],
  icons: {
    icon: '/images/logo_icon.png',
  },
};

export const viewport = {
  themeColor: '#0b1320',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
