import Qualification from "../Qualification";
import classes from "./Education.module.css";
const Education = () => {
  return (
    <Qualification header={"Education"}>
      <div className={classes["education-images"]}>
        <img
          style={{ width: "230px" }}
          src={require("../assets/SUNY_Poly_logo.png")}
          alt="SUNY Polytechnic Institute logo"
        />
        <img
          style={{ width: "80px", marginLeft: "20px" }}
          src={require("../assets/HVCC_logo.png")}
          alt="Stewart's logo"
        />
      </div>
      <h2>SUNY Polytechnic Institute (Class of 2023)</h2>
      <h3>Bachelor's of Science in Computer and Information Science</h3>
      <h3>Dates attended: 2021 - 2023</h3>
      <h2>Hudson Valley Community College</h2>
      <h3>Classes in Computer Information Systems</h3>
      <h3>Dates attended: 2019 - 2021</h3>
      <h4>Was placed on the Dean's list in Fall 2020</h4>
    </Qualification>
  );
};

export default Education;
