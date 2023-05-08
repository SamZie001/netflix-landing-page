import React from "react";
import sectionStyles from "../styles/HomeSection4.module.css";

const HomeSection4 = () => {
  return (
    <div className={sectionStyles.section}>
      <div className={sectionStyles.container}>
        <h2 className="base-heading">
          Watch <br /> everywhere
        </h2>
        <p className="base-text">
          Stream unlimited movies and TV <br /> shows on your phone, tablet,
          laptop, <br />
          and TV.
        </p>
      </div>
    </div>
  );
};

export default HomeSection4;
