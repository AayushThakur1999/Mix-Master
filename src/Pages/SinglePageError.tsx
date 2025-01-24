import { useRouteError } from "react-router-dom";
import { RouterError } from "../types/types";

const SinglePageError = () => {
  const error = useRouteError() as RouterError;
  console.log(error.message);

  return <h2 className="text-4xl font-mono">There was an error...</h2>;
};
export default SinglePageError;
