
// import React, { useState, useContext } from "react";
// import { docxtalk } from "../assets";
// import { navigation } from "../constant";
// import { useLocation } from "react-router-dom";
// import Menu from "../assets/svg/MenuSvg";
// import { HamburgerMenu } from "./design/Header";
// import Button from "./Button";
// import { disablePageScroll, enablePageScroll } from "scroll-lock";
// import ThemeToggler from "./Header/ThemeToggler";
// import { ThemeContext } from "../contexts/ThemeContext"; // Import du contexte

// export default function Header() {
//   const { theme } = useContext(ThemeContext); // Récupération du thème du contexte
//   const pathname = useLocation();
//   const [openNavigation, setOpenNavigation] = useState(false);
//   const toggleNavigation = () => {
//     if (openNavigation) {
//       setOpenNavigation(false);
//       enablePageScroll();
//     } else {
//       setOpenNavigation(true);
//       disablePageScroll();
//     }
//   };

//   const handleClick = () => {
//     if (!openNavigation) return;

//     enablePageScroll();
//     setOpenNavigation(false);
//   };

//   // Déterminer la classe de fond de la barre de navigation
//   const navbarBgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-transparent';
  
//   // Déterminer la couleur des liens de navigation en fonction du thème
//   const linkColorClass = theme === 'dark' 
//     ? 'text-white hover:text-sky-400' // Couleur des liens en mode sombre
//     : 'text-black hover:text-sky-600'; // Couleur des liens en mode clair

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full z-50 ${navbarBgClass} lg:bg-transparent lg:backdrop-blur-sm ${
//         openNavigation ? "bg-gray-400" : ""
//       }`}
//     >
//       <div className="flex items-center px-5 bg-opacity-40 lg:px-7.5 xl:px-10 max-lg:py-4">
//         <a href="/app/" className="block w-[12rem] xl:mr-8">
//           <img src={docxtalk} alt="logo" width={150} height={20} />
//         </a>
//         <nav
//           className={`${
//             openNavigation ? "flex" : "hidden"
//           } fixed top-[5rem] left-0 right-0 bottom-0 ${navbarBgClass} lg:static lg:flex lg:mx-auto lg:bg-transparent`}
//         >
//           <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
//             {navigation.map((item) => (
//               <a
//                 key={item.id}
//                 href={item.url}
//                 onClick={handleClick}
//                 className={`block relative text-2xl ${linkColorClass} uppercase transition-colors ${
//                   item.onlyMobile ? "lg:hidden" : ""
//                 } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-medium ${
//                   item.url === pathname.hash
//                     ? "z-2 lg:text-black"
//                     : "lg:text-yellow"
//                 } lg:brown lg:hover:green xl:px-12`}
//               >
//                 {item.title}
//               </a>
//             ))}
//           </div>
//           <HamburgerMenu />
//         </nav>

//         <a
//   href="/app/auth/signup"
//   className="ease-in-up shadow-btn hover:shadow-btn-hover hidden lg:block rounded-sm bg-sky-400 px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
// >
//   Sign In
// </a>

//         <Button onClick={toggleNavigation} className={"ml-auto px-3 lg:hidden"}>
//           <Menu openNavigation={openNavigation} />
//         </Button>
//         <div>
//           <ThemeToggler />
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useContext } from "react";
import { docxtalk } from "../assets";
import { navigation } from "../constant";
import { useLocation } from "react-router-dom";
import Menu from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import Button from "./Button";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import ThemeToggler from "./Header/ThemeToggler";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Header() {
  const { theme } = useContext(ThemeContext); // Récupération du thème du contexte
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  // Classes conditionnelles pour le thème
  const navbarBgClass = theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black";
  const linkColorClass = theme === "dark" ? "text-white hover:text-sky-400" : "text-black hover:text-sky-600";

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        openNavigation ? "bg-transparent" : navbarBgClass
      } lg:bg-transparent lg:backdrop-blur-sm`}
    >
      <div className="flex items-center px-5 bg-opacity-40 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="/app/" className="block w-[12rem] xl:mr-8">
          <img src={docxtalk} alt="logo" width={150} height={20} />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 z-40 ${navbarBgClass} lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative text-2xl uppercase transition-colors ${linkColorClass} ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-medium ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-black"
                    : "lg:text-yellow"
                } lg:hover:text-green xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        {/* <a
          href="/app/auth/signup"
          className="ease-in-up shadow-btn hover:shadow-btn-hover hidden lg:block rounded-sm bg-sky-400 px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
        >
          Sign In
        </a> */}

        <a
          href="/app/auth/signup"
          className="ease-in-up shadow-btn hover:shadow-btn-hover hidden lg:block rounded-sm bg-sky-400 px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 lg:px-6 xl:px-9"
        >
          Sign In
        </a>


        <Button onClick={toggleNavigation} className={"ml-auto px-3 lg:hidden"}>
          <Menu openNavigation={openNavigation} />
        </Button>
        <div>
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
}
