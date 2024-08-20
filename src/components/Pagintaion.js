import React from "react";
import { useContext } from "react";
import SystemContext from "../context/SystemContext";

function Pagintaion(props) {
    const { totalPage } = props;
    const context = useContext(SystemContext);
    const {currentPage, handlePrev, handleNext} = context;
  return (
    <div class="my-5 flex flex-col items-center">
      <span class="text-sm text-gray-700 dark:text-gray-400">
        Showing Page {" "}
        <span class="font-semibold text-grey">{currentPage}</span> to{" "}
        
        <span class="font-semibold text-grey">{totalPage}</span>{" "}
        Pages
      </span>

      <div class="inline-flex mt-2 xs:mt-0">
        <button onClick={handlePrev} class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Prev
        </button>
        <button onClick={(totalPage)=>handleNext(totalPage)} class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagintaion;
