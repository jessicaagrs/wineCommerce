import usePaginationContext from '@/hooks/usePaginationContext';
import styles from '@/style/components/pagination/pagination.module.css';

export default function Pagination() {
  const { currentPage, setCurrentPage, totalPages } = usePaginationContext();

  return (
    <div className={styles.container}>
      <div>
        {currentPage != 1 && (
          <button className={styles.btnText}>{'<<'} Anterior</button>
        )}
      </div>
      <div className={styles.containerBtnNumber}>
        <button className={`${styles.btnNumber} ${styles.btnFocus}`}>1</button>
        <button className={styles.btnNumber}>2</button>
        <button className={styles.btnNumber}>3</button>
      </div>
      {((currentPage < totalPages) && (totalPages > 1)) && (
        <>
          <div>
            <p className={styles.caractere}>...</p>
          </div>
          <div>
            <button className={styles.btnText}>Próximo {'>>'}</button>
          </div>
        </>
      )}
    </div>
  );
}
