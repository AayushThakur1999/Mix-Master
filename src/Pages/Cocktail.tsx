import axios from "axios";
import { Link, Navigate, Params, useLoaderData } from "react-router-dom";
import { Drink } from "../types/types";
import { QueryClient, useQuery } from "@tanstack/react-query";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id: string) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: Params<string> }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id as string));
    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData() as { id: string };
  const { data } = useQuery(singleCocktailQuery(id));

  if (!data) return <Navigate to="/" />;

  const singleDrink = data.drinks[0];
  const validIngredients = Object.keys(singleDrink)
    .filter(
      (ingredient) =>
        ingredient.startsWith("strIngredient") &&
        singleDrink[ingredient as keyof Drink] !== null
    )
    .map((key) => singleDrink[key as keyof Drink]);
  console.log(validIngredients);

  const {
    strDrink: name,
    strCategory: category,
    strDrinkThumb: image,
    strAlcoholic: info,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;
  return (
    <article className="flex flex-col items-center justify-center w-full">
      <header className="flex flex-col items-center justify-center">
        <Link to="/" className="py-2 px-3 bg-emerald-500 text-white rounded-md">
          Back Home
        </Link>
        <h3 className="text-3xl md:text-4xl font-bold my-4">{name}</h3>
      </header>
      <div className="flex flex-col sm:flex-row gap-5 items-start justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-full sm:w-96 sm:h-96 bg-cover bg-center rounded-md"
        />
        <div className="mt-8 sm:mt-0 self-center">
          <p className="font-bold block mb-4 sm:mb-6">
            <span className="text-sm tracking-wider bg-emerald-400 text-emerald-700 py-1 px-2 sm:text-base rounded-md mr-2">
              Name:
            </span>
            {name}
          </p>
          <p className="font-bold block mb-4 sm:mb-6">
            <span className="text-sm tracking-wider bg-emerald-400 text-emerald-700 py-1 px-2 sm:text-base rounded-md mr-2">
              Category:
            </span>
            {category}
          </p>
          <p className="font-bold block mb-4 sm:mb-6">
            <span className="text-sm tracking-wider bg-emerald-400 text-emerald-700 py-1 px-2 sm:text-base rounded-md mr-2">
              Info:
            </span>
            {info}
          </p>
          <p className="font-bold block mb-4 sm:mb-6">
            <span className="text-sm tracking-wider bg-emerald-400 text-emerald-700 py-1 px-2 sm:text-base rounded-md mr-2">
              Glass:
            </span>
            {glass}
          </p>
          <p className="font-bold block mb-4 sm:mb-6">
            <span className="text-sm tracking-wider bg-emerald-400 text-emerald-700 py-1 px-2 sm:text-base rounded-md mr-2">
              Ingredients:
            </span>
            {validIngredients.join(", ")}
          </p>
          <p className="font-bold block mb-4 sm:mb-0">
            <span className="text-sm tracking-wider bg-emerald-400 text-emerald-700 py-1 px-2 sm:text-base rounded-md mr-2">
              Instructions:
            </span>
            {instructions}
          </p>
        </div>
      </div>
    </article>
  );
};
export default Cocktail;
