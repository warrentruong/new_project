import { NavLink } from "react-router-dom";
import classes from "./Mainheader.module.css";
const Mainheader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <a href="">
          <NavLink activeClassName={classes.active} to="/info">
            Info
          </NavLink>
        </a>
        <a href="">
          <NavLink activeClassName={classes.active} to="/input">
            Add data
          </NavLink>
        </a>
        <a href="">
          <NavLink activeClassName={classes.active} to="/show">
            Show data
          </NavLink>
        </a>
      </nav>
    </header>
  );
};

export default Mainheader;
