import { useState } from "react";
import Dropdown from "./DropDown" ;
import LinkNav from "./LinkNav";
import {
  Logo,
  NavbarContainer,
  ButtonDropdown,
  LinkContainerDesktop,
} from "/src/components/NavBar/NavBar.style";
import { List, X } from "react-bootstrap-icons";

export const routes = [
  { title: "Home", href: "home" },
  { title: "Movies", href: "movies" },
  { title: "Add", href: "add" },
  { title: "Edit/Delete", href: "edit-delete" },
  { title: "Recomand", href: "recomand" },
];

function NavBar() {
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const handleClick = (titlu) => {
    console.log("Esti pe titlu-> ", titlu);
  };

  const handleDisplayDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  return (
    <NavbarContainer>
      <Logo src="src\assets\logo_app.png"></Logo>
      <LinkContainerDesktop>
        {routes.map((el, index) => (
          <LinkNav
            key={name + index}
            title={el.title}
            href={el.href}
            subtitle="Subtitlu"
            functieDeApelat={handleClick}
          />
        ))}
      </LinkContainerDesktop>
      <ButtonDropdown onClick={() => handleDisplayDropdown()}>
        {!displayDropdown ? <List size={40} /> : <X size={40} />}
      </ButtonDropdown>
      {displayDropdown && (
        <Dropdown
          onFocus={() => handleDisplayDropdown()}
          functieDeApelatinDropdown={handleClick}
        />
      )}
    </NavbarContainer>
  );
}

export default NavBar;
