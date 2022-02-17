import * as S from "./input.styles";

const Input = ({ name, value, setValue }) => {
  const camelCase = (str) => {
    return str.replace(/\W+(.)/g, function (_, chr) {
      return chr.toUpperCase();
    });
  };

  return (
    <S.Input>
      <input
        type="text"
        id={camelCase(name)}
        placeholder={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label htmlFor={camelCase(name)}>{name}</label>
    </S.Input>
  );
};

export default Input;
