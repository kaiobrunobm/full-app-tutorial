import Link from "next/link";

const NavLink = ({ children }) => {
  return (
    <Link href="/" className="p-4 border-b border-grayBorder md:border-none">
      {children}
    </Link>
  );
};

export default NavLink;
