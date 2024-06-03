import React from "react";

const DS_BigO = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-6">
      <p className="text-white font-bold text-lg">Big-O Complexity</p>
      <img
        src={`BigO.png`}
        alt="Big-O"
        className="w-[95%] h-auto rounded-2xl"
      />

      <p className="text-white font-bold text-lg pt-4">Data Structures Big-O</p>
      <img
        src={`DS_BigO.png`}
        alt="Big-O"
        className="w-[95%] h-auto rounded-2xl "
      />

      <p className="text-white font-bold text-lg pt-4">Sorting Big-O</p>
      <img
        src={`Sorting_BigO.png`}
        alt="Big-O"
        className="w-[70%] h-auto rounded-2xl"
      />
      <a
        href="https://www.bigocheatsheet.com/"
        rel="noreferrer"
        target="_blank"
      >
        <p className="text-xs text-zinc-500">Credit: Big-O Cheatsheet</p>
      </a>
    </div>
  );
};

export default DS_BigO;
