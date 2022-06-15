import { PropTypes } from "prop-types";

const Button = (props) => {
  const { color, text, onClick } = props;

  /**
  const onClick = () => {
    console.log(`button clicked`);
  };
  */

  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: "steelblue",
  text: "Click me",
  onClick: () => {
    console.log("button clicked - default");
  },
};

export default Button;
