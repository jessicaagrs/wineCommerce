import styles from '../../style/components/header/linkmenu.module.css';

export const LinkMenu = () => {
  return (
    <ul className={styles.containerList}>
      <li>
        <a href="#Home" className={styles.itemList}>
          Clube
        </a>
      </li>
      <li>
        <a href="#Loja" className={styles.itemList}>
          Loja
        </a>
      </li>
      <li>
        <a href="#Produtores" className={styles.itemList}>
          Produtores
        </a>
      </li>
      <li>
        <a href="#Ofertas" className={styles.itemList}>
          Ofertas
        </a>
      </li>
      <li>
        <a href="#Eventos" className={styles.itemList}>
          Eventos
        </a>
      </li>
    </ul>
  );
};
