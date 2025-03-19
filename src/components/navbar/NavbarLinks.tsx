import { Link } from "react-scroll";

// Define the type for each link object
interface NavLink {
  link: string;
  section: string;
}

// Define the links array with explicit typing
const links: NavLink[] = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

// Component with React.FC (you can switch to explicit JSX.Element if preferred)
const NavbarLinks: React.FC = () => {
  return (
    <ul
      className="
        flex 
        lg:flex-row sm:flex-col 
        gap-6 
        text-white 
        font-body 
        lg:relative sm:absolute 
        sm:top-[120%] 
        text-center 
        left-[50%] 
        -translate-x-[50%] 
        lg:text-md sm:text-xl 
        sm:bg-cyan/30 
        backdrop-blur-lg 
        lg:bg-black 
        sm:w-full 
        py-4"
    >
      {links.map((link) => (
        <li key={link.section} className="group">
          <Link
            to={link.section}
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
          >
            {link.link}
          </Link>
          <div className="mx-auto h-[1px] bg-cyan w-0 group-hover:w-full transition-all duration-500" />
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;