import { Drink } from "../types/types";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }: { drinks: Drink[] | null}) => {
  if (!drinks) {
    return <h3 className="text-2xl">No matching cocktails found...</h3>;
  }
  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {formattedDrinks.map((drink) => (
        <CocktailCard key={drink.id} {...drink} />
      ))}
    </div>
  );
};
export default CocktailList;
