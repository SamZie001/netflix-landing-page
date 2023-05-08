import Header from "./Header";
import GetStarted from "./GetStarted";
import introStyles from "../styles/Intro.module.css";

const Intro = () => {
  return (
    <div className={introStyles.intro}>
      <div className={introStyles["intro-container"]}>
        <Header sign={true} />

        <div className={introStyles.content}>
          <h2 className="base-heading">
            Unlimited movies, TV shows, and more.
          </h2>
          <p className="base-text">Watch anywhere. Cancel anytime.</p>
          <GetStarted />
        </div>
      </div>
    </div>
  );
};

export default Intro;
