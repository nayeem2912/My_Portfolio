import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home";
import PlantCareDetails from "../Details/PlantCareDetails";
import TravelDetails from "../Details/TravelDetails";
import EnglishJanala from "../Details/EnglishJanala";

 export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
         
        path: "/",
        Component: Home,
      
      }
    ]
  },
  {
        path:'/projects/1',
        Component: PlantCareDetails
      },
  {
        path:'/projects/2',
        Component: TravelDetails
      },
  {
        path:'/projects/3',
        Component: EnglishJanala
      },
]);