import { PropTypes } from "prop-types";

import Button from "./Button";

const Header = (props) => {
  const { title, onAddTask, showAddTask } = props;

  /**
  const onClick = () => {
    console.info("Hello from Header");
  };
  */

  return (
    <header className="header">
      {/* inline styles */}
      {/* <h1 style={{ color: "black", fontSize: "2rem" }}>
        {props.title}
      </h1> */}

      {/* internal styles */}
      {/* <h1 style={headingStyle}>
        {props.title}
      </h1> */}

      <h1>{title}</h1>

      {/* {showAddTask ? (
        <Button
          color="red"
          text="Cancel"
          onClick={() => onAddTask(!showAddTask)}
        />
      ) : (
        <Button
          color="green"
          text="Add Task"
          onClick={() => onAddTask(!showAddTask)}
        />
      )} */}

      <Button
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "Cancel" : "Add Task"}
        onClick={() => onAddTask(!showAddTask)}
      />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: "Tasks Tracker",
};

/**
const headingStyle = {
  color: "black",
  fontSize: "2rem",
};
*/

export default Header;
