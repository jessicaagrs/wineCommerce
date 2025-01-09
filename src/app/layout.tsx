import type { Metadata } from 'next';
import { Roboto, Poppins } from 'next/font/google';
import '@/style/globals.css';
import DefaultProvider from '@/contexts/DefaultProvider';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Wine Ecommerce',
  description: 'Loja virtual de vinhos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} ${poppins.className} body`}>
        <DefaultProvider>{children}</DefaultProvider>
      </body>
    </html>
  );
}
