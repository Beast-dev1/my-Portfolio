import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

// Component typed with React.FC
const NavbarBtn: React.FC = () => {
  return (
    <button
      className="
        px-4 
        py-2 
        rounded-full 
        text-xl 
        font-bold 
        font-body 
        text-white 
        border 
        border-cyan 
        flex 
        items-center 
        gap-1 
        bg-gradient-to-r 
        from-darkCyan 
        to-orange 
        transition-all 
        duration-500 
        hover:scale-110 
        hover:border-orange 
        hover:shadow-cyanShadow 
        cursor-pointer"

    >
      <Link
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        className="text-white" // Optional: ensures text color consistency
      >
        Hire Me
      </Link>
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;