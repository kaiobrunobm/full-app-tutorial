import NavLink from "./Link";
import { AiOutlineClose } from "react-icons/ai";
const NavMobile = ({ nav }) => {
  return (
    <div
      className={
        nav
          ? "fixed right-0 top-0 w-[60%] h-full border-l border-grayBorder bg-blackPrimary origin-right duration-300 md:hidden"
          : "fixed right-[-100%] top-0 w-[60%] h-full border-l border-grayBorder bg-blackPrimary origin-right duration-300"
      }
    >
      <nav className="flex flex-col uppercase p-4 mt-24">
        <NavLink>Home</NavLink>
        <NavLink>Company</NavLink>
        <NavLink>Resources</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </nav>
    </div>
  );
};

export default NavMobile;
