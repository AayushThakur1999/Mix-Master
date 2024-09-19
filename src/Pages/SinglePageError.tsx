import { useRouteError } from "react-router-dom";
import { RouterError } from "../types/types";

const SinglePageError = () => {
  const error = useRouteError() as RouterError;
  console.log(error.message);

  return <h2 className="text-2xl font-medium">{error.message}</h2>;
};
export default SinglePageError;
