import styles from '@/style/components/header/cart.module.css';
import Image from 'next/image';

export const Cart = () => {
  // TODO : Implementar a lógica de contagem de itens no carrinho
  return (
    <div className={styles.container}>
      <Image src="/winebox.png" alt="Cart" width={45} height={45} />
      <div className={styles.countCart}>0</div>
    </div>
  );
};
