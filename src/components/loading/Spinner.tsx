import styles from '@/style/components/loading/spinner.module.css';

export const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  );
};
