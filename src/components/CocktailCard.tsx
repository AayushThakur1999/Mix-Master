import { Link } from "react-router-dom";
import { CocktailCardProps } from "../types/types";

const CocktailCard = ({ id, name, image, info, glass }: CocktailCardProps) => {
  return (
    <div className="flex flex-col shadow-md hover:-translate-y-1 hover:shadow-xl transition duration-300">
      <img src={image} alt={name} className="bg-cover bg-center rounded-t-md h-64" />
      <div className="p-4">
      <h2 className="text-3xl font-bold">{name}</h2>
      <h3 className="text-3xl font-normal mb-2">{glass}</h3>
      <p className="text-gray-500 mb-3">{info}</p>
      
        <Link
          to={`cocktail/${id}`}
          className="inline-block px-3 py-1 text-white bg-emerald-500 hover:bg-emerald-700 rounded-md transition duration-200"
        >
          Details
        </Link>
      
      </div>
    </div>
  );
};
export default CocktailCard;
