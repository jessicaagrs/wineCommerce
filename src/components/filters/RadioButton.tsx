import styles from "@/style/components/filters/radioButton.module.css"

type RadioButtonProps = {
  label: string;
  id: string;
};

export const RadioButton = ({ label, id }: RadioButtonProps) => {
  return (
    <div className={styles.container}>
      <input type="radio" name={id} id={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
