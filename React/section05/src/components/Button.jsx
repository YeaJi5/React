const Button = ({children, text, color="blue"}) => {
  // 이벤트 객체
  const onCilckButton = (e) => {
    console.log(e)
    console.log(text);
  }

  return (
    <button 
      onClick={onCilckButton}
      // onMouseEnter = {onCilckButton}
    style={{color: color}}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button