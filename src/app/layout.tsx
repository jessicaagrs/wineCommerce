import DefaultProvider from '@/contexts/DefaultProvider';
import '@/style/globals.css';
import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';

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

//TODO : Retirar o DefaultProvider
//TODO : Criar teste do campo pesquisa
//TODO : Criar teste do carrinho
//TODO : Criar teste do filtro
//TODO : Criar teste exibição dos produtos
//TODO : Criar teste da paginação
//TODO : Ajustar responsividade
//TODO : Arrumar erros deploy
//TODO : Fazer rodar testes deploy


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
