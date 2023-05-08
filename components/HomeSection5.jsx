import React from "react";
import sectionStyles from "../styles/HomeSection5.module.css";
import Image from "next/image";

const HomeSection5 = () => {
  return (
    <div className="section">
      <div className={`container ${sectionStyles.container}`}>
        <div className={sectionStyles.image}>
          <Image
            src="/assets/kids-profile.png"
            width={500}
            height={100}
            alt="kids-profile picture"
          />
        </div>

        <div className={sectionStyles["text-content"]}>
          <h2 className="base-heading">
            Create profiles for <br /> kids
          </h2>
          <p className="base-text">
            Send kids on adventures with their favorite <br /> characters in a
            space made just for them— <br /> free with your membership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection5;
