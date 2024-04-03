import Logo from "../Logo/logo";
import styles from "./SecondaryNavbar.module.css";
import search_icon from "../../assets/search_icon.svg";
import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";
import question_icon from "../../assets/question_icon.svg";

const SecondaryNavbar = () => {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    setSearch("");
    console.log("submit");
  }
  return (
    <div className={styles["navbar-two"]}>
      {/* <div className={styles["logo-container"]}> */}
      <Logo />
      {/* </div> */}

      <form onSubmit={handleSearch}>
        <div className={styles.input}>
          <label htmlFor="search"></label>
          <input
            type="search"
            placeholder="Search Brands, Products and Categories"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <img
            src={search_icon}
            alt="search icon"
            className={styles["search-icon"]}
          />
        </div>
        <CustomButton
          buttonStyle={styles["search-btn"]}
          type="orange"
          text="Search"
        />
      </form>

      <div className={styles.help}>
        <h3>Help</h3>
        <img src={question_icon} alt="question icon" />
      </div>
    </div>
  );
};

export default SecondaryNavbar;
