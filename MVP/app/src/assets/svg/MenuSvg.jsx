// const MenuSvg = ({ openNavigation }) => {
//   return (
//     <svg
//       className="overflow-visible"
//       width="20"
//       height="12"
//       viewBox="0 0 20 12"
//     >
//       <rect
//         className="transition-all origin-center"
//         y={openNavigation ? "5" : "0"}
//         width="20"
//         height="2"
//         rx="1"
//         fill="white"
//         transform={`rotate(${openNavigation ? "45" : "0"})`}
//       />
//       <rect
//         className="transition-all origin-center"
//         y={openNavigation ? "5" : "10"}
//         width="20"
//         height="2"
//         rx="1"
//         fill="white"
//         transform={`rotate(${openNavigation ? "-45" : "0"})`}
//       />
//     </svg>
//   );
// };

// export default MenuSvg;


import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const MenuSvg = ({ openNavigation }) => {
  const { theme } = useContext(ThemeContext); // Récupération du thème

  // Couleurs dynamiques en fonction du thème
  const fillColorTop = theme === "dark" ? "white" : "black";
  const fillColorBottom = theme === "dark" ? "white" : "black";

  return (
    <svg
      className="overflow-visible"
      width="20"
      height="12"
      viewBox="0 0 20 12"
    >
      {/* Rectangle supérieur */}
      <rect
        className="transition-all origin-center"
        y={openNavigation ? "5" : "0"}
        width="20"
        height="2"
        rx="1"
        fill={fillColorTop} // Couleur basée sur le thème
        transform={`rotate(${openNavigation ? "45" : "0"})`}
      />
      {/* Rectangle inférieur */}
      <rect
        className="transition-all origin-center"
        y={openNavigation ? "5" : "10"}
        width="20"
        height="2"
        rx="1"
        fill={fillColorBottom} // Couleur basée sur le thème
        transform={`rotate(${openNavigation ? "-45" : "0"})`}
      />
    </svg>
  );
};

export default MenuSvg;
