export type RouterError = {
  status?: number;
  statusText?: string;
  message?: string;
};

export type Drink = {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
};

export type LoaderData = {
  drinks: Drink[] | null;
  searchTerm: string;
};

export type CocktailCardProps = {
  id: string;
  name: string;
  image: string;
  info: string;
  glass: string;
};
