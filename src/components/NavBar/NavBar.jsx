import { useState } from "react";
import Dropdown from "./DropDown";
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
  { title: "All packages", href: "all-packages" },
  { title: "Add new package", href: "add-new-package" },
  { title: "Edit or delete a package", href: "edit-or-delete" },
  { title: "Reserved packages", href: "reserved-packages" },
];

function NavBar() {
  const [displayDropdown, setDisplayDropdown] = useState(false);

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
          />
        ))}
      </LinkContainerDesktop>
      <ButtonDropdown onClick={() => handleDisplayDropdown()}>
        {!displayDropdown ? <List size={40} /> : <X size={40} />}
      </ButtonDropdown>
      {displayDropdown && <Dropdown onFocus={() => handleDisplayDropdown()} />}
    </NavbarContainer>
  );
}

export default NavBar;
