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
  [key: `strIngredient${number}`]: string | null;
  // the above is same as strIngredient1: string | null;
  // where we can give any number value at the place of number
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

export type DrinkData = {
  // drinks: Drink[]
  drinks: Array<Drink>;
};

export type CocktailLoaderType = {
  id: string;
  data: DrinkData;
};
