import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { LoaderData } from "../types/types";
import CocktailList from "../components/CocktailList";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async (): Promise<LoaderData> => {
  const searchTerm = "";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData() as LoaderData;
  console.log(drinks);
  return (
    <section className="h-full">
      <CocktailList drinks={drinks} />
    </section>
  );
};
export default Landing;
