import HeaderContact from "./HeaderContact";
import HeaderContent from "./HeaderContent";
import HeaderNavbar from "./HeaderNavbar";

const Header = () => {
  return (
    <>
      <div className=" lg:mx-[10rem] mx-[2rem]  bg-white">
        <HeaderContact />
      </div>
      <header className="sticky top-0 z-50">
        <HeaderContent />
        {/* <Navbar /> */}
        <HeaderNavbar />
      </header>
    </>
  );
};

export default Header;
