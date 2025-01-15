import { Header } from '@/components/header/Header';
import styles from '@/style/index/page.module.css';
import Filter from '@/components/filters/Filter';
import ListProducts from '@/components/products/ListProducts';
import { PaginationContextProvider } from '@/contexts/PaginationProvider';

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
