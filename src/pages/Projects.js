import Qualification from "../Qualification";
import classes from "./Projects.module.css";
const Projects = () => {
  return (
    <Qualification header={"Projects"}>
      <div className={classes["projects-section"]}>
        <h2>Pizza Stop</h2>
        <h3>
          Food ordering app using a Firebase backend
          <br />
          <a href="https://tmv518.github.io/pizza-stop/">(Link)</a>
        </h3>
        <h2>Notes App</h2>
        <h3>
          To-do list app created using React.js
          <br />
          <a href="https://tmv518.github.io/notes-app-with-context/">(Link)</a>
        </h3>
        <h2>Rolly Ball</h2>
        <h3>
          Mobile Game created using Unity3D
          <br />
          <a href="https://play.google.com/store/apps/details?id=com.PieFunStudio.RollyBall">
            (Link)
          </a>
        </h3>
      </div>
    </Qualification>
  );
};

export default Projects;
