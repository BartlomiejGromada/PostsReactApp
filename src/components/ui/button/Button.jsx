import styles from "@components/ui/Button/Button.module.css";

const Button = ({ children, type, className, onClick, disabled }) => {
  return (
    <button
      className={`${styles.button} ${className ? className : ""}`}
      type={type ? type : "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
