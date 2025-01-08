import Image from 'next/image';
import styles from '../../style/components/header/cart.module.css';

export const Cart = () => {
  return (
    <div className={styles.container}>
      <Image src="/winebox.png" alt="Cart" width={45} height={45} />
      <div className={styles.countCart}>0</div>
    </div>
  );
};
