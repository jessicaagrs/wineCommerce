import { Wine } from '@/types/wineModel';
import Image from 'next/image';
import styles from '@/style/components/products/productItem.module.css';
import { formatCurrency } from '@/utils/formatter';

type ProductItemProps = {
  readonly wine: Wine;
};

export default function ProductItem({ wine }: ProductItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <div>
          <Image
            src={wine.image}
            alt={wine.wine}
            width={200}
            height={300}
            className={styles.image}
          />
        </div>
        <div>
          <p className={styles.description}>{`${wine.wine}`}</p>
        </div>
        <div className={styles.containerPromotion}>
          <span>{formatCurrency(wine.rating.average)}</span>
          <span>60% OFF</span>
        </div>
        <div className={styles.containerSocio}>
          <span>sócio wine</span>
          <span>
            {formatCurrency((Number(wine.rating.average) - 1).toFixed(2))}
          </span>
        </div>
        <p className={styles.textNaoSocio}>
          não sócio{' '}
          {formatCurrency((Number(wine.rating.average) + 1.5).toFixed(2))}
        </p>
      </div>
      <div className={styles.containerBtn}>
        <button className={styles.btnAddCart}>adicionar</button>
      </div>
    </div>
  );
}
