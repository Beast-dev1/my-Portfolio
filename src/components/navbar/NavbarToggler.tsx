import { useSelector } from "react-redux";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";

// Define the shape of your Redux state
interface RootState {
  menu: {
    menuOpen: boolean;
  };
}

const Navbar: React.FC = () => {
  const menuOpen = useSelector((state: RootState) => state.menu.menuOpen);

  return (
    <nav
      className="
        max-w-[1300px] 
        mx-auto 
        w-full 
        px-4 
        fixed 
        left-[50%] 
        -translate-x-[50%] 
        z-20 
        flex 
        gap-4 
        mt-2"
    >
      {/* Main Navbar Container */}
      <div
        className="
          flex 
          justify-between 
          w-full 
          max-w-[1200px] 
          mx-auto 
          bg-black 
          items-center 
          p-6 
          rounded-r-full 
          rounded-l-full 
          border
          border-orange 
          border-[0.5px]"
      >
        {/* Navbar Links (Conditionally Rendered on Small Screens) */}
        <div
          className={`${menuOpen ? "block" : "hidden"} lg:block`} // Fixed responsive classes
        >
          <NavbarLinks />
        </div>

        {/* Hire Me Button */}
        <NavbarBtn />
      </div>

      {/* Navbar Toggler (Visible Only on Small Screens) */}
      <div
        className="
          flex 
          lg:hidden 
          sm:block 
          p-6 
          bg-black 
          items-center 
          justify-center 
          rounded-full 
          border 
          border-orange 
          border-[0.5px]"
      >
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default Navbar;