import { Link, useRouteError } from "react-router-dom"
import img from '/NotFound.svg'

interface RouterError {
  status?: number;
  statusText?: string;
  data?: string;
}

const Error = () => {
  const error = useRouteError() as RouterError;
  console.log(error);
  
  if (error.status === 404) {
    return (
      <div className="min-h-screen text-center flex flex-col items-center justify-center p-4">
        <img src={img} alt="not found" className="sm:max-w-xl mb-8 block" />
        <h3 className="text-2xl font-medium mb-2 w-[90vw]">Ohh!</h3>
        <p className="text-gray-500 mt-2 mb-4 leading-normal">We can't seem to find the page you're looking for</p>
        <Link to='/' className="text-emerald-500 hover:text-green-600 capitalize underline">back home</Link>
      </div>
    )
  }
  return (
    <h1 className="text-4xl font-semibold">something went wrong</h1>
  )
}
export default Error