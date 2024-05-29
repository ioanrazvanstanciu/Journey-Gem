import { LinkNavStyle } from "./NavBar.style";
// import { Link } from "react-router-dom";

function LinkNav({ title, href }) {
  return (
    <>
      <LinkNavStyle to={href}>
        {title ? title : "Link"}
        {/* <Link to={"/home"}> vezi ca mergi </Link> */}
        {/* exemplu de link simplu de la reat router dom */}
      </LinkNavStyle>
    </>
  );
}

export default LinkNav;
