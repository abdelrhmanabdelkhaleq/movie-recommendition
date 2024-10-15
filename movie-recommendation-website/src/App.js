import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Movies from "./components/Movies/Movies";
import Tv from "./components/Tv/Tv";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import People from "./components/People/People";
import MovieDetails from "./components/MovieDetails/MovieDetails";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "people", element: <People /> },
      { path: "tv", element: <Tv /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "MovieDetails/:id/:media_type", element: <MovieDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
