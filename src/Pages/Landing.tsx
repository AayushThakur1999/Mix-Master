import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { QueryClient, useQuery } from "@tanstack/react-query";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailQuery = (searchTerm: string) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

export const loader =
  (queryClient: QueryClient) =>
  async ({ request }: { request: Request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";
    // checks for the data returned by searchCocktailQuery(searchTerm) inside cache
    // and returns the data in useQuery if present or fetches data in loader if not present
    await queryClient.ensureQueryData(searchCocktailQuery(searchTerm));

    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData() as { searchTerm: string };
  const { data: drinks } = useQuery(searchCocktailQuery(searchTerm));
  console.log(drinks);
  return (
    <section className="h-full">
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </section>
  );
};
export default Landing;
