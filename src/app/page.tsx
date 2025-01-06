import { Header } from '@/components/header/Header';
import styles from '../style/index/page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
    </main>
  );
}
