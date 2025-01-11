import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiUser, FiMessageSquare } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";
import { FiArrowLeft, FiMessageCircle } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { ContextApp } from "../utils/Context";
import { Link } from 'react-router-dom';
import Features from "../pages/Features";

function Mobile() {
  const { Mobile, setMobile, handleQuery } = useContext(ContextApp);
  return (
    <div className="absolute left-0 top-0 w-full z-50  bg-black/40 flex justify-between items-start">
      <div
        className={
          Mobile
            ? "h-screen bg-gray-900 w-[300px]  flex items-center justify-between p-2 text-white flex-col translate-x-0"
            : "hidden"
        }
      >
        <div className="flex items-start justify-between w-full">
          <span
            className="border border-gray-600  rounded w-full py-2 text-xs flex gap-1 items-center justify-center cursor-pointer "
            onClick={() => window.location.reload()}
          >
            <AiOutlinePlus fontSize={18} />
            New Chat
          </span>
        </div>
        {/* middle section  */}
        {/* <div className="h-[80%] w-full p-2 flex items-start justify-start flex-col overflow-hidden overflow-y-auto text-sm scroll my-2">
          
        </div> */}
        <div className="h-[80%] w-full p-2 z-30 flex items-center justify-center overflow-hidden overflow-y-auto text-sm scroll my-2">
          <Features />
        </div>
        {/* bottom section  */}
        <div className="w-full border-t border-gray-600 flex flex-col gap-2 items-center justify-center p-2">
          <span className="rounded w-full py-2 px-2 text-xs flex items-center justify-center cursor-pointer border border-gray-400 hover:bg-gray-800 transition-all duration-300">
            <span className="flex gap-2 items-center justify-center text-sm">
              <FiArrowLeft className="text-xl" />
              <Link to="/app/profile/home">Back</Link>
            </span>
          </span>
          
        </div>
      </div>
      {Mobile && (
        <span
          className="border border-gray-600 text-white m-2 rounded px-3 py-[9px] flex items-center justify-center cursor-pointer"
          title="Close sidebar"
          onClick={() => setMobile(!Mobile)}
        >
          <MdClose />
        </span>
      )}
    </div>
  );
}

export default Mobile;
