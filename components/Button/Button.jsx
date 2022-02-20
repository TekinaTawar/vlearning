import * as S from "./Button.styles";

const Button = ({ children, onClick, loading, btnStyle, stretch }) => {
  return (
    <S.Button
      onClick={onClick}
      className={loading && "loading"}
      btnStyle={btnStyle}
      stretch={stretch}
    >
      <p>{children}</p>
    </S.Button>
  );
};

Button.defaultProps = {
  loading: false,
  btnStyle: "black",
  stretch: false,
};
export default Button;
