import React from "react";
import CinePlusBlack from "../../components/CinePlusBlack/CinePlusBlack";
import CinePlusGold from "../../components/CinePlusGold/CinePlusGold";

const CinePlus = () => {
  return (
    <div className="w-4/5 flex justify-around my-20 mx-auto">
      <CinePlusGold />
      <CinePlusBlack />
    </div>
  );
};

export default CinePlus;
