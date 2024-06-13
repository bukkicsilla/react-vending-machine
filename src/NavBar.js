import { NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/diet-coke">
        Diet Coke
      </NavLink>
      <NavLink exact to="/sparkling-water">
        Sparkling Water
      </NavLink>
      <NavLink exact to="/orange-juice">
        Orange Juice
      </NavLink>
      <NavLink exact to="/oreo">
        Oreo
      </NavLink>
    </div>
  );
};
export default NavBar;
