import React from "react";

const Card = ({ image, title, price, bowls }) => {
  return (
    <div className="bg-black bg-opacity-50 p-4 rounded-xl text-white w-52 text-center shadow-md">
      <img src={image} alt={title} className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-sm mt-1 text-gray-300">${price}</p>
      <p className="text-xs mt-1 text-gray-400">{bowls} Bowls available</p>
    </div>
  );
};

export default Card;