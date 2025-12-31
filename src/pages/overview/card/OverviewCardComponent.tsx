import { ArrowRight } from "lucide-react";
import { type CardComponentProps } from "./interfaces/OverviewCardComponent.interface";

function OverviewCardComponent({
  image,
  icon,
  title,
  description,
  buttonText,
  onButtonClick,
}: CardComponentProps) {
  return (
    <div className="group card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 w-full hover:-translate-y-1">
      <figure className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-radial from-black/80 via-black/60 to-black/40"></div>

        <div className="absolute top-3 right-3 bg-base-100 rounded-full p-2 shadow">
          {icon}
        </div>
      </figure>

      <div className="p-5 flex flex-col justify-between space-y-3">
        <div>
          <h2 className="text-lg font-semibold text-base-content">{title}</h2>
          <p className="text-sm text-base-content/70 mt-1">{description}</p>
        </div>

        <button onClick={onButtonClick} className="btn btn-primary w-full">
          {buttonText}
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default OverviewCardComponent;
