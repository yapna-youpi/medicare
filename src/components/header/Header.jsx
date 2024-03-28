import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import {BiMenu} from "react-icons/bi"

// import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const handleStickyHeader = ()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scroolTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add("stick_header")
      } else{
        headerRef.current.classList.remove("stick_header")
      }
    })
  }

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu")

  useEffect(()=>{
    handleStickyHeader()

    return () => window.removeEventListener("scrool", handleStickyHeader)
  },[])

  const navLinks = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/projects",
      display: "projects",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/skill",
      display: "Skill",
    },
    {
      path: "/education",
      display: "Education",
    },
    {
      path: "/contact",
      display: "Contact",
    },
  ];

  return (
    <header className="header flex items-center justify-around z-50" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="text-white text-[1.5rem] cursor-pointer font-extrabold hover:scale-110 transition-all  ">
            <Link to="/">
              {/* <img src={logo} alt="logo medicare" /> */}
              Will-Turner
            </Link>
          </div>

          {/* menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[20px] md:text-[16px] leading-7 font-[600] "
                        : "text-white text-[20px] md:text-[16px] leading-7 font-[500] hover:text-primaryColor hover:underline"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* nav right */}
          <div className="flex items-centerv gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img
                    src={userImg}
                    className="w-full rounded-full"
                    alt="profil utilisateur"
                  />
                </figure>
              </Link>
            </div>

            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] ">
                Connexion
              </button>
            </Link>

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" /> 
            </span>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
