import getStartedStyles from "../styles/GetStarted.module.css";

const GetStarted = () => {
  return (
    <div className={getStartedStyles["get-started"]}>
      <p className={`base-text ${getStartedStyles.ready}`}>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form className={getStartedStyles.form}>
        <input type="email" placeholder="Email address" />
        <button type="submit" className="base-button">Get Started &nbsp;<i className="fa-solid fa-greater-than"></i></button>
      </form>
    </div>
  );
};

export default GetStarted;
