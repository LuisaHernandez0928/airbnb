import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { AddAirbnb } from "./pages/layout/addNewAirbnb.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./types.ts";
import { KindSpace } from "./pages/kindSpace/kindSpace.jsx";
import { Features } from "./pages/featuresSpace/featureSpace.jsx";

const opts = [
  "Casas rurales",
  "Cabaña",
  "Piscinas increibles",
  "Ciudades famosas",
  "Parques nacionales",
  "Frente al lago",
  "Esqui",
  "Vistas increibles",
  "Casas historicas",
  "Playa",
  "Mansiones",
  "Minicasa",
  "Bed and breakfast",
  "Novedad",
  "Populares",
  "Diseño",
  "Autosuficiente",
  "Tropical",
  "Casa del arbol",
  "Islas",
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add",
    element: <AddAirbnb />,
  },

  {
    path: "/add/typeHouse",
    element: <KindSpace options={opts} />,
  },
  {
    path: "/add/typeHouse/features",
    element: <Features />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
