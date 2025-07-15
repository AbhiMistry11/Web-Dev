import React from 'react';
import Card from './Card';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useState } from 'react';

const Testimonial = ({ reviews }) => {
    const [index,setIndex] = useState(0);

    function leftShiftHandler() {
    if(index - 1 < 0){
        setIndex(reviews.length - 1);
    }else{
        setIndex(index - 1);
    }
    }
    function rightShiftHandler() {
    if(index + 1 >= reviews.length){
        setIndex(0);
    } else {
        setIndex(index + 1);
    }
    }
    function surpriseHandler() {
        // Logic to surprise the user with a random testimonial
        const randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }
  return (
    <div className="flex flex-col items-center space-y-3 mt-2">
      
      {/* Card */}
      <Card reviews={reviews[index]} />

      {/* Navigation Buttons */}
      <div className="flex items-center gap-2">
        <button onClick={leftShiftHandler} className="bg-purple-100 text-purple-600 p-2 rounded-full hover:bg-purple-200 transition">
          <FaAngleLeft />
        </button>
        <button onClick={rightShiftHandler} className="bg-purple-100 text-purple-600 p-2 rounded-full hover:bg-purple-200 transition">
          <FaAngleRight />
        </button>
      </div>

      {/* Surprise Me Button */}
      <button onClick={surpriseHandler} className="text-sm text-white bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition">
        Surprise Me
      </button>
    </div>
  );
};

export default Testimonial;
