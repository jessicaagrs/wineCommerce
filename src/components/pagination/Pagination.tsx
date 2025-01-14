import styles from '@/style/components/pagination/pagination.module.css';

export default function Pagination() {
  return (
    <div className={styles.container}>
      <div>
        <button className={styles.btnText}>{'<<'} Anterior</button>
      </div>
      <div className={styles.containerBtnNumber}>
        <button className={`${styles.btnNumber} ${styles.btnFocus}`}>1</button>
        <button className={`${styles.btnNumber}`}>2</button>
        <button className={styles.btnNumber}>3</button>
      </div>
      <div>
        <p className={styles.caractere}>...</p>
      </div>
      <div>
        <button className={styles.btnText}>Próximo {'>>'}</button>
      </div>
    </div>
  );
}
