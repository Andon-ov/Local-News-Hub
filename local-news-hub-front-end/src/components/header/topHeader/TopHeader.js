import "./TopHeader.css";
import { FcSearch } from "react-icons/fc";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

import { Nav } from "react-bootstrap";
import WeatherInfo from "./weatherInfo/WeatherInfo";

function TopHeader() {
  const { user } = useContext(AuthContext);

  const anonymous = (
    <div className="userButtons">
      <Nav.Link className="searchIcon" as={Link} to="/search">
        <FcSearch size={40} />
      </Nav.Link>
      <Nav.Link className="login" as={Link} to="/login">
        Login
      </Nav.Link>
      <Nav.Link className="register" as={Link} to="/register">
        Register
      </Nav.Link>
    </div>
  );

  const loggedUser = (
    <div className="userButtons">
      <Nav.Link as={Link} to="/search">
        <FcSearch size={40} />
      </Nav.Link>

      <p className="nav__user">Welcome {user.username}!</p>
      <Nav.Link as={Link} to="/logout">
        Logout
      </Nav.Link>
    </div>
  );

  return (
    <section className="topHeader">
      <WeatherInfo />

      <div>{user.email !== "" ? loggedUser : anonymous}</div>
    </section>
  );
}

export default TopHeader;
