'use client';

import useWineList from '@/hooks/useWineList';
import ProductItem from './ProductItem';
import styles from '@/style/components/products/listProducts.module.css'

export default function ListProducts() {
  const { data, error, isError, isPending } = useWineList(1);

  console.log(data);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <span className={styles.titleQuantity}>{data?.length}</span>produtos
        encontrados
      </h3>
      <div className={styles.containerList}>
        {data?.map((wine) => <ProductItem key={wine.id} wine={wine} />)}
      </div>
    </div>
  );
}
