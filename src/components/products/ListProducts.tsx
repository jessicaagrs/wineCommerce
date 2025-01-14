'use client';

import useWineList from '@/hooks/useWineList';
import styles from '@/style/components/products/listProducts.module.css';
import ProductItem from './ProductItem';
import Pagination from '../pagination/Pagination';
import { Spinner } from '../loading/Spinner';

export default function ListProducts() {
  const { data, error, isError, isPending } = useWineList(1);

  if (isPending) return <Spinner />;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <span className={styles.titleQuantity}>{data?.length}</span>produtos
        encontrados
      </h3>
      <div className={styles.containerList}>
        {data?.map((wine) => <ProductItem key={wine.id} wine={wine} />)}
      </div>
      <Pagination />
    </div>
  );
}
