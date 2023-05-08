import headerStyles from "../styles/Header.module.css";

const Header = ({ sign }) => {
  return (
    <header className={headerStyles.header}>
      <h1>Netflix</h1>
      {sign && <button>Sign in</button>}
    </header>
  );
};

export default Header;
