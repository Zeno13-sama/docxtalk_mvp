
import { useNavigate, useLocation } from 'react-router-dom';
import { HiHome, HiMail } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { MdHeadset, MdSubscriptions } from "react-icons/md";
import { FaCrown } from "react-icons/fa"; // Ajout de l'icône couronne

const Sidebar = () => {
  const navigate = useNavigate(); // Hook pour la navigation
  const location = useLocation(); // Hook pour obtenir l'URL actuelle

  // Fonction pour gérer la navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Fonction pour vérifier si le chemin est actif
  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <div className="flex justify-left mt-4 mb-4">
        <img 
          src="../images/logo/UntitledDocxtalk__1_-removebg-preview-removebg-preview (1).png"
          alt="Logo" 
          className="w-32 h-auto rounded-md"
        />
      </div>
      <div className="flex flex-col gap-y-4 px-5 py-4">
        {/* Home */}
        <div
          className={`flex items-center gap-2 text-neutral-400 cursor-pointer rounded-md p-2 transition-colors ${isActive('/app/profile/home') ? 'bg-sky-700' : 'hover:bg-sky-700'}`}
          onClick={() => handleNavigation('/app/profile/home')}
        >
          <HiHome size={26} />
          <p className="font-medium text-md cursor-pointer">Home</p>
        </div>

        {/* Search */}
        <div
          className={`flex items-center gap-2 text-neutral-400 cursor-pointer rounded-md p-2 transition-colors ${isActive('/app/profile/search') ? 'bg-sky-700' : 'hover:bg-sky-700'}`}
          onClick={() => handleNavigation('/app/profile/search')}
        >
          <BiSearch size={26} />
          <p className="font-medium text-md cursor-pointer">Search</p>
        </div>

        {/* Mails */}
        <div
          className={`flex items-center gap-2 text-neutral-400 cursor-pointer rounded-md p-2 transition-colors ${isActive('/app/profile/mails') ? 'bg-sky-700' : 'hover:bg-sky-700'}`}
          onClick={() => handleNavigation('/app/profile/mails')}
        >
          <HiMail size={26} />
          <p className="font-medium text-md cursor-pointer">Email tracking</p>
        </div>

        {/* Customer Services */}
        <div
          className={`flex items-center gap-2 text-neutral-400 cursor-pointer rounded-md p-2 transition-colors ${isActive('/app/profile/customer-service') ? 'bg-sky-700' : 'hover:bg-sky-700'}`}
          onClick={() => handleNavigation('/app/profile/customer-service')}
        >
          <MdHeadset size={26} />
          <p className="font-medium text-md cursor-pointer">Customer services</p>
        </div>

        {/* Subscriptions */}
        <div
          className={`flex items-center gap-2 text-neutral-400 cursor-pointer rounded-md p-2 transition-colors ${isActive('/app/profile/subscriptions') ? 'bg-sky-700' : 'hover:bg-sky-700'}`}
          onClick={() => handleNavigation('/app/profile/subscriptions')}
        >
          <FaCrown size={26} />
          <p className="font-medium text-md cursor-pointer">Remove watermark</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
