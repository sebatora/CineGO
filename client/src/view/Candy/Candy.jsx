import React from 'react';
import CandyContainer from '../../components/CandyContainer/CandyContainer';

function Candy() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="flex justify-center items-center mt-16">
          <div className="w-4/5">
            <CandyContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Candy;