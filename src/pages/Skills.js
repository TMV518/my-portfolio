import Qualification from "../Qualification";
import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <Qualification header={"Skills"}>
      <div className={classes["skills-images"]}>
        <img
          style={{ width: "60px" }}
          src={require("../assets/HTML5_logo.png")}
          alt="HTML5 logo"
        />
        <img
          style={{ width: "45px" }}
          src={require("../assets/CSS_logo.png")}
          alt="CSS logo"
        />
        <img style={{ width: "60px" }} src={require("../assets/logo512.png")} />
        <img
          style={{ width: "60px" }}
          src={require("../assets/Unity_logo.png")}
          alt="Unity logo"
        />
      </div>
      <h2>Front end development using React.js</h2>
      <div className={classes["skills-list"]}>
        <ul>
          <li>Using hooks to manage state and interact with a front end app</li>
          <li>Designing interactive UIs to help users perform tasks</li>
          <li>
            Creating web forms with input validation to interact with the front
            and back end
          </li>
          <li>Utilizing public REST APIs to work with apps that fetch data</li>
          <li>Creating CRUD apps</li>
        </ul>
        <h2>Mobile Game Design with Unity and C#</h2>
        <ul>
          <li>Released two apps on the Google Play Store</li>
          <li>Implemented ads using Unity Ads SDK</li>
        </ul>
      </div>
    </Qualification>
  );
};

export default Skills;
