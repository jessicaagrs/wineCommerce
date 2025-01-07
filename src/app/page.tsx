import { Header } from '@/components/header/Header';
import styles from '../style/index/page.module.css';
import Filter from '@/components/filters/Filter';
import ListProducts from '@/components/products/ListProducts';

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.grid}>
        <Filter />
        <ListProducts />
      </div>
    </main>
  );
}
