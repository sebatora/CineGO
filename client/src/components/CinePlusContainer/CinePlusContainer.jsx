import React from "react";
import CinePlusBlack from "../CinePlusBlack/CinePlusBlack";
import CinePlusGold from "../CinePlusGold/CinePlusGold";

const CinePlus = () => {
  return (
    <div className="w-4/5 flex justify-around my-20 mx-auto">
      <CinePlusGold />
      <CinePlusBlack />
    </div>
  );
};

export default CinePlus;
