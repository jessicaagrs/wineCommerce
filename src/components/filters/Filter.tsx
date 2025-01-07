import { RadioButton } from "./RadioButton";
import styles from '../../style/components/filters/filter.module.css'

export default function Filter() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Refine sua busca</h1>
          <h2>Por Preço</h2>
        </div>
        <div className={styles.containerRadios}>
          <RadioButton label="Até R$40" id="filter40" />
          <RadioButton label="R$40 A R$60" id="filter60" />
          <RadioButton label="R$100 A R$200" id="filter200" />
          <RadioButton label="R$R$200 A R$500" id="filter500" />
          <RadioButton label="Acima de R$500" id="filter501" />
        </div>
      </div>
    );
};