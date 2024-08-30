import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
} from "./Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
