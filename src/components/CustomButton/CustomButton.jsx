const CustomButton = ({ type, buttonStyle, text, onClick }) => {
  const classNames = {
    orange: "btn",
    teal: "btn-teal",
  };
  const className = classNames[type] || classNames.btn;

  return onClick ? (
    <button className={`${className} ${buttonStyle}`}>{text}</button>
  ) : (
    <a href="#" className={`${className} ${buttonStyle}`}>
      {text}
    </a>
  );
};

export default CustomButton;
