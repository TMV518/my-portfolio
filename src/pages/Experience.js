import Qualification from "../Qualification";
import classes from "./Experience.module.css";

const Experience = () => {
  return (
    <Qualification header={"Experience"}>
      <div className={classes["experience-images"]}>
        <img
          style={{ width: "120px" }}
          src={require("../assets/Staples_logo.png")}
          alt="Staples logo"
        />
        <img
          style={{ width: "80px" }}
          src={require("../assets/Stewarts_logo.png")}
          alt="Stewart's logo"
        />
      </div>
      <div className={classes["experience-list"]}>
        <h2>Staples Inc.</h2>
        <h3>Location: Colonie, NY</h3>
        <h3>Job Title: Sales Associate</h3>
        <h3>Time Worked: Sep. 2019 - Feb. 2020</h3>
        <ul>
          <li>
            Multitasked, collaborating with other employees to meet the goals of
            the store
          </li>
          <li>
            Managed needs of in-person customers with online and over-the-phone
            customers
          </li>
          <li>
            Maintained a fast pace throughout shifts due to the holiday rush
          </li>
          <li>
            Provided customers with accurate information on products and current
            sales
          </li>
        </ul>
        <h2>Stewart's Shops</h2>
        <h3>Location: Guilderland, NY</h3>
        <h3>Job Title: Partner</h3>
        <h3>Time Worked: Jan. 2018 - Aug. 2018</h3>
        <ul>
          <li>
            Stocked shelves for entire shop, including dry goods, frozen
            products, and beverages
          </li>
          <li>
            Anticipated future needs for the store, preparing food to be
            displayed and sold
          </li>
          <li>
            Logged food temperatures through shift, ensuring store was compliant
            with regulations
          </li>
        </ul>
      </div>
    </Qualification>
  );
};

export default Experience;
