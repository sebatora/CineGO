import React from "react";
import CinePlusBlack from "../CinePlusBlack";
import CinePlusGold from "../CinePlusGold";

const cinePlus = () => {
  return (
    <div className="w-4/5 flex justify-around my-20 mx-auto">
      <CinePlusBlack />
      <CinePlusGold />
    </div>
  );
};

export default cinePlus;
