import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home";
import PlantCareDetails from "../Details/PlantCareDetails";

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
      }
]);