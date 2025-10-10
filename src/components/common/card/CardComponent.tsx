import React from "react";
import { ArrowRight } from "lucide-react";
import { type CardComponentProps } from "./CardComponentProps.interface";

function CardComponent({
  image,
  icon,
  title,
  description,
  buttonText,
  onButtonClick,
}: CardComponentProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden w-96">
      {/* Image Section */}
      <figure className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
        />

        <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow">
          {icon}
        </div>
      </figure>

      {/* Content Section */}
      <div className="p-5 flex flex-col justify-between space-y-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>

        <button
          onClick={onButtonClick}
          className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        >
          {buttonText}
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default CardComponent;
