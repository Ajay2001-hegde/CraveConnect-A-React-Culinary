

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter ,RouterProvider,Outlet,Link} from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import { lazy ,Suspense} from "react";
import Shimmer from "./components/Shimmer";
import Appstore from "./utils/Appstore";
import Cart from "./components/Cart";


const Grocery = lazy(()=>import('./components/Grocery'))


const AppLayout = () => {
 
  return (
    <Provider store={Appstore}>
    
    <React.Fragment>
      <Header />
      <Outlet/>
      
    </React.Fragment>
    </Provider>
 
  );
};


const approuter = createBrowserRouter(
  [
    {
        path:'/',
        element:<AppLayout></AppLayout>,
        children:[
          {
            
            path:'/',
            element:<Body/>,
        },
          {

            path:'/about',
            element:<About></About>,
        },
        {
          path:'/contact',
          element:<Contact/>,
      },
      {
        path:'/restaurant/:resid',
        element:<RestaurantMenu></RestaurantMenu>,
      },
      {
          path:'/grocery',
          element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>,
      },
      {
          path:'/cart',
          element:<Cart/>,

      },
        ],
       
    },
    
  ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>);