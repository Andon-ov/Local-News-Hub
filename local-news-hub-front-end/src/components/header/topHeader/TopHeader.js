import "./TopHeader.css";
import { FcSearch } from "react-icons/fc";

import { Link } from "react-router-dom";

import { Nav } from "react-bootstrap";
import WeatherInfo from "./weatherInfo/WeatherInfo";
import DropdownMenu from "../dropdownMenu/DropdownMenu";

function TopHeader() {
  return (
    <section className="topHeader">
      <WeatherInfo />

      <div className="userButtons">
        <Nav.Link as={Link} to="/search">
          <FcSearch className="searchIcon" size={40} />
        </Nav.Link>

        <DropdownMenu />
      </div>
    </section>
  );
}

export default TopHeader;
