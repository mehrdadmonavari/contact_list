import { IoIosContact } from "react-icons/io";
import { BsFillTrashFill } from "react-icons/bs";
import { createRef, useEffect, useRef, useState } from "react";

const Contact = ({ contact, onDelete }) => {
   const { name, email } = contact;
   const [trashElement, setTrashElement] = useState(null);
   const trashRef = useRef();

   const trashAction = (type) => {
      type === "show" && trashElement.classList.remove("opacity-0");
      type === "hide" && trashElement.classList.add("opacity-0");
   };

   useEffect(() => {
      setTrashElement(trashRef.current);
   }, []);

   return (
      <li onMouseOver={() => trashAction("show")} onMouseOut={() => trashAction("hide")}>
         <div className="flex justify-between items-center py-1 transition duration-300 px-4 border-x-2 border-transparent hover:border-x-2 hover:border-blue-500 hover:shadow-[inset_13px_0px_12px_-13px_rgba(59,131,246,0.6),inset_-13px_0px_12px_-13px_rgba(59,131,246,0.6)]">
            <div className="flex justify-start items-center">
               <span>
                  <IoIosContact className="text-gray-600 text-3xl sm:text-[4rem]" />
               </span>
               <div className="flex flex-col justify-center items-start ml-1">
                  <span className="text-gray-800 text-base sm:text-lg">{name}</span>
                  <span className="text-gray-600 text-xs sm:text-sm">{email}</span>
               </div>
            </div>
            <div className="flex justify-end items-center gap-x-4 pr-5">
               <span
                  onClick={onDelete}
                  ref={trashRef}
                  className="cursor-pointer transition-opacity duration-200 opacity-0">
                  <BsFillTrashFill className="text-xl sm:text-2xl transition duration-200 text-red-500 hover:drop-shadow-[0px_0px_6px_rgba(239,68,68,0.7)]" />
               </span>
            </div>
         </div>
      </li>
   );
};

export default Contact;
