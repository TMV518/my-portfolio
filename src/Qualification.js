import classes from "./Qualification.module.css";
import { Link } from "react-router-dom";

const Qualification = (props) => {
  return (
    <div>
      <Link to="/home">
        <button className={classes["back-button"]}>{"<<"}</button>
      </Link>
      <div className={classes["qualification__wrapper"]}>
        <h1>{props.header}</h1>
        <div className={classes["qualification__main"]}>{props.children}</div>
      </div>
    </div>
  );
};

export default Qualification;
