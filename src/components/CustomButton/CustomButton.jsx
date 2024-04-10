const CustomButton = ({ type, buttonStyle, text, onClick }) => {
  const classNames = {
    orange: "btn",
    teal: "btn-teal",
  };
  const className = classNames[type] || classNames.btn;
  const ButtonComponent = onClick ? "button" : "a";
  return (
    <ButtonComponent
      to="#" // This will be ignored if ButtonComponent is 'button'
      className={`${className} ${buttonStyle}`}
      onClick={onClick} // This will be ignored if ButtonComponent is 'a'
    >
      {text}
    </ButtonComponent>
  );
};
// return onClick ? (
//   <button className={`${className} ${buttonStyle}`}>{text}</button>
// ) : (
//   <a href="#" className={`${className} ${buttonStyle}`}>
//     {text}
//   </a>
// );
// };

export default CustomButton;
