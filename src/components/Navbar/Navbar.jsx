import { useTheme } from "../../../context/ThemeContext";
import "./Navbar.css";

const Navbar = ({ setMode, mode }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <h2>RepoRival</h2>

      <div className="nav-actions">
        <button
          className={mode === "home" ? "active" : ""}
          onClick={() => setMode("home")}
        >
          Home
        </button>

        <button
          className={mode === "battle" ? "active" : ""}
          onClick={() => setMode("battle")}
        >
          Battle
        </button>

        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
