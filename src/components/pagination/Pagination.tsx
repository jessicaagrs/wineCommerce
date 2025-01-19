import usePaginationContext from '@/hooks/usePaginationContext';
import styles from '@/style/components/pagination/pagination.module.css';

export default function Pagination() {
  //TODO : Usar flex 1 para aumentar o segundo botão
  const { currentPage, setCurrentPage, totalPages } = usePaginationContext();

  const generatePageNumbers = () => {
    const startPage = currentPage;
    const endPage = Math.min(currentPage + 2, totalPages);
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className={styles.container}>
      <div>
        {currentPage != 1 && currentPage <= totalPages && (
          <button
            className={styles.btnText}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            {'<<'} Anterior
          </button>
        )}
      </div>
      <div className={styles.containerBtnNumber}>
        {generatePageNumbers().map((page) => (
          <button
            key={page}
            className={`${styles.btnNumber} ${currentPage === page ? styles.btnFocus : ''}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      {currentPage < totalPages && totalPages > 1 && (
        <>
          <div>
            <p className={styles.caractere}>...</p>
          </div>
          <div>
            <button
              className={styles.btnText}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Próximo {'>>'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
