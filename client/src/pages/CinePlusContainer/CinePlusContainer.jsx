import React from "react";
import CinePlusBlack from "../../components/CinePlusBlack/CinePlusBlack";
import CinePlusGold from "../../components/CinePlusGold/CinePlusGold";

const CinePlus = () => {
  return (
    <div className="w-4/5 h-screen flex items-center justify-around mx-auto">
      <CinePlusGold />
      <CinePlusBlack />
    </div>
  );
};

export default CinePlus;
