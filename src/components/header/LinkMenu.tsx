import Link from 'next/link';
import styles from '@/style/components/header/linkmenu.module.css';

export const LinkMenu = () => {
  return (
    <ul className={styles.containerList}>
      <li className={styles.item}>
        <Link href="/" className={styles.itemList}>
          Clube
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/" className={styles.itemList}>
          Loja
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/" className={styles.itemList}>
          Produtores
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/" className={styles.itemList}>
          Ofertas
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/" className={styles.itemList}>
          Eventos
        </Link>
      </li>
    </ul>
  );
};
