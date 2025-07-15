import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Card = ({ reviews }) => {
  return (
    <div className="bg-white w-full max-w-sm mx-auto p-6 rounded-xl shadow-md flex flex-col items-center text-center space-y-3">
      
      {/* Enlarged Profile Image */}
      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-purple-500 shadow">
        <img
          src={reviews.image}
          alt={reviews.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <p className="text-lg font-semibold text-gray-800">{reviews.name}</p>

      {/* Job */}
      <p className="text-purple-500 text-xs uppercase tracking-wider">{reviews.job}</p>

      {/* Left Quote */}
      <div className="text-purple-400 text-xl">
        <RiDoubleQuotesL />
      </div>

      {/* Testimonial Text */}
<p className="text-gray-600 text-sm px-2 leading-relaxed line-clamp-3">
  {reviews.text}
</p>


      {/* Right Quote */}
      <div className="text-purple-400 text-xl">
        <RiDoubleQuotesR />
      </div>
    </div>
  );
};

export default Card;
