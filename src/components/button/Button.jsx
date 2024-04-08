import css from "./Button.module.scss";

const Button = ({ onClick, children }) => {
  return (
    <div className={css.BtnWrap}>
      <button className={css.button} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
