'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type DefaultProviderProps = {
  children: React.ReactNode;
};

export default function DefaultProvider(props: Readonly<DefaultProviderProps>) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>{props.children}</QueryClientProvider>
  );
}
