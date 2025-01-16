'use client';

import usePaginationContext from '@/hooks/usePaginationContext';
import useWineList from '@/hooks/useWineList';
import styles from '@/style/components/products/listProducts.module.css';
import { Spinner } from '../loading/Spinner';
import Pagination from '../pagination/Pagination';
import ProductItem from './ProductItem';

export default function ListProducts() {
  const { currentPage, totalPages } = usePaginationContext();
  const { data, error, isError, isPending } = useWineList(currentPage);

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
      {totalPages > 1 && <Pagination />}
    </div>
  );
}
