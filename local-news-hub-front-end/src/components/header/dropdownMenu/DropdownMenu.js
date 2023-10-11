import "./DropdownMenu.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

function DropdownMenu() {
  const { user } = useContext(AuthContext);

  const anonymous = (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <FaUser size={30} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/login">
          Вход
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/register">
          Регистрация
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const loggedUser = (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <FaUser size={30} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/logout">
          Изход
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  return <div>{user.email !== "" ? loggedUser : anonymous}</div>;
}

export default DropdownMenu;
