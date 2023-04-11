import NavLink from "./Link";

const Nav = () => {
  return (
    <nav className="hidden md:flex">
      <NavLink>Home</NavLink>
      <NavLink>Company</NavLink>
      <NavLink>Resources</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Contact</NavLink>
    </nav>
  );
};

export default Nav;
