import Image from 'next/image';
import styles from '@/style/components/header/searchHeader.module.css';

export const SearchHeader = () => {
  return (
    <div className={styles.searchBox}>
      <button className={styles.btnSearch} title="search">
        <Image src="/busca.svg" alt="search" width={40} height={40} />
      </button>
      <input
        type="text"
        className={styles.inputSearch}
        placeholder="Procurar..."
      />
    </div>
  );
};
