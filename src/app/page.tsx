import Filter from '@/components/filters/Filter';
import { Header } from '@/components/header/Header';
import ListProducts from '@/components/products/ListProducts';
import { PaginationContextProvider } from '@/contexts/PaginationProvider';
import styles from '@/style/index/page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      <PaginationContextProvider>
        <div className={styles.grid}>
          <Filter />
          <ListProducts />
        </div>
      </PaginationContextProvider>
    </main>
  );
}
