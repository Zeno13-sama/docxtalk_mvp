
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from '../../contexts/ThemeContext';
import { Link } from 'react-scroll';
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header2 = () => {
  // Navbar toggle
  const { theme } = useContext(ThemeContext);
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  }, []);

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };


  return (
    <>
      {/* bg-transparent est ce qui creer la couleur au scroll en light navbar */}
      <header className={`navbar left-0 top-0 h-24 z-40 flex w-full items-center ${theme === 'dark' ? 'bg-gray-900 text-white text-base' : 'bg-light-900 text-base'} ${sticky ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-gray-400 !bg-opacity-10 shadow-sticky backdrop-blur-sm transition" : "absolute bg-transparent"}`}>
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className=" w-60 max-w-full px-4 xl:mr-12">
              <a
                href="/app/"
                className={`header-logo flex block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <img
                  src="../images/logo/UntitledDocxtalk-removebg-preview.png"
                  alt="logo"
                  className="w-100 dark:hidden"
                />
                <img
                  src="../images/logo/UntitledDocxtalk__1_-removebg-preview-removebg-preview (1).png"
                  alt="logo"
                  className="hidden w-100 dark:block"
                />
              </a>
            </div>
           

            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              window.location.pathname === menuItem.path
                                ? "text-primary dark:text-black"
                                : "text-dark hover:text-sky-700 dark:text-white/70 dark:hover:text-black"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-sky-700 dark:text-sky-700/70 dark:group-hover:text-sky-700 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 text-gray-800 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map(
                                (submenuItem, subIndex) => (
                                  <a
                                    href={submenuItem.path}
                                    key={subIndex}
                                    className="block rounded py-2.5 text-sm text-dark hover:text-sky-700 dark:text-white/70 dark:hover:text-white lg:px-3"
                                  >
                                    {submenuItem.title}
                                  </a>
                                )
                              )}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <a
                  href="/app/auth/signup"
                  className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-sky-400 px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Sign In
                </a>
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header2;

