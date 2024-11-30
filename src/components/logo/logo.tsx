import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 flex justify-end items-end bg-blue-500 rounded">
        <span className="text-white text-sm font-bold mr-[2px]">AM</span>
      </div>
      <h1 className="font-semibold">Anthony Mclamb</h1>
    </div>
  );
};

export default Logo;
