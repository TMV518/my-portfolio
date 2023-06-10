import classes from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={classes["main-content"]}>
      <ul className={classes["qualifications__list"]}>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
