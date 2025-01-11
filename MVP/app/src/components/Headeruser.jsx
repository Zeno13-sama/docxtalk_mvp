import React, { useState } from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome, HiMail, HiMenu } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { MdHeadset, MdSubscriptions } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from '../axios';

const HeaderUser = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const toggleMenu = () => {                                                                         
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavigation = (path) => {
    setIsMenuOpen(false); // Ferme le menu après navigation
    navigate(path);
  };

  const handleLogout = async () => {
    setLoading(true); // Activer l'état de chargement au début de la requête
    try {
      const resp = await axios.post('/logout');
      if (resp.status === 200) {
        localStorage.removeItem('user');
        window.location.href = '/app/';
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Désactiver l'état de chargement une fois la requête terminée
    }
  };

  return (
    <div className="h-fit bg-gradient-to-b from-sky-800 p-6">
      {/* Conteneur principal - Visible uniquement sur mobile */}
      <div className="md:hidden w-full flex justify-between items-center">
        {/* Logo */}
        <div
          className="p-1.5 flex items-center justify-center hover:opacity-75 transition cursor-pointer"
          onClick={toggleMenu}
        >
          <img
            src="../images/logo/UntitledDocxtalk__1_-removebg-preview-removebg-preview (1).png"
            width={100}
            height={15}
            alt="logo"
          />
        </div>

        {/* Éléments à droite */}
        <div className="flex items-center gap-x-4">
          {/* Bouton Generate */}
          <div
            className="bg-sky-600 px-4 py-2 text-sm text-white font-medium cursor-pointer hover:bg-opacity-90 transition duration-300"
            onClick={() => navigate("/app/generate")}
          >
            Generate
          </div>

          {/* Icône Home */}
          <div
            className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition cursor-pointer"
            onClick={toggleMenu}
          >
            <HiMenu className="text-black" size={18} />
          </div>
        </div>
      </div>

      {/* Conteneur principal pour tablette et grands écrans */}
      <div className="hidden md:flex w-full mb-4 justify-between items-center">
        {/* Navigation avec flèches */}
        <div className="flex gap-x-2 items-center">
          <div className="rounded-full bg-black flex justify-center items-center hover:opacity-75 transition cursor-pointer">
            <RxCaretLeft className="text-white" size={35} />
          </div>
          <div className="rounded-full bg-black flex justify-center items-center hover:opacity-75 transition cursor-pointer">
            <RxCaretRight className="text-white" size={35} />
          </div>
        </div>

        {/* Bouton Generate (grande version) */}
        <div
          className="ease-in-up shadow-btn hover:shadow-btn-hover bg-sky-700 px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 rounded-md cursor-pointer"
          onClick={() => navigate("/app/generate")}
        >
          Generate Your Documents
        </div>
      </div>

      {/* Menu déroulant pour petits écrans */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-y-4 px-4 py-2 bg-white rounded-md shadow-lg mt-4">
          {/* Menu */}
          <div
            className="flex items-center gap-2 text-neutral-600 cursor-pointer rounded-md p-2 transition-colors hover:bg-sky-700 hover:text-white"
            onClick={() => handleNavigation("/app/profile/home")}
          >
            <HiHome size={20} />
            <p className="font-medium text-sm">Home</p>
          </div>

          {/* Search */}
          <div
            className="flex items-center gap-2 text-neutral-600 cursor-pointer rounded-md p-2 transition-colors hover:bg-sky-700 hover:text-white"
            onClick={() => handleNavigation("/app/profile/search")}
          >
            <BiSearch size={20} />
            <p className="font-medium text-sm">Search</p>
          </div>

          {/* Mails */}
          <div
            className="flex items-center gap-2 text-neutral-600 cursor-pointer rounded-md p-2 transition-colors hover:bg-sky-700 hover:text-white"
            onClick={() => handleNavigation("/app/profile/mails")}
          >
            <HiMail size={20} />
            <p className="font-medium text-sm">Email tracking</p>
          </div>

          {/* Customer Services */}
          <div
            className="flex items-center gap-2 text-neutral-600 cursor-pointer rounded-md p-2 transition-colors hover:bg-sky-700 hover:text-white"
            onClick={() => handleNavigation("/app/profile/customer-service")}
          >
            <MdHeadset size={20} />
            <p className="font-medium text-sm">Customer services</p>
          </div>

          {/* Subscriptions */}
          <div
            className="flex items-center gap-2 text-neutral-600 cursor-pointer rounded-md p-2 transition-colors hover:bg-sky-700 hover:text-white"
            onClick={() => handleNavigation("/app/profile/subscriptions")}
          >
            <MdSubscriptions size={20} />
            <p className="font-medium text-sm">Subscriptions</p>
          </div>

          <div className="flex items-center justify-between py-4 gap-2 cursor-pointer">
            <div 
              onClick={handleLogout}
              className="flex items-center gap-2 text-neutral-600 cursor-pointer rounded-md p-2 transition-colors hover:bg-sky-700 hover:text-white"
            >
              <FiUser  size={20}  />
              <p className="font-medium text-sm">Logout</p>
            </div>
            <div className="flex items-center">
              {/* Affiche un spinner si loading est true, sinon l'icône de flèche */}
              {loading ? (
                <div className="loader border-4 border-t-4 border-gray-300 rounded-full w-5 h-5 animate-spin"></div>
              ) : (
                <AiOutlineArrowRight
                  className="text-neutral-400 cursor-pointer hover:text-white transition"
                  size={20}
                />
              )}
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default HeaderUser;
