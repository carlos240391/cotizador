import React,{Suspense} from "react";
import { Switch, Route } from 'react-router-dom' 
import SpinerPage from "./components/generals/spiner/spiner-page";
import Navbar from "./components/navbar/navbar";
import { routes } from "./routes/routes";

function App(props) {

 

  return (
    <Suspense fallback={<SpinerPage/>}>
      <Navbar/>
      <Switch>
        {routes.map((route,i)=>{
          return <Route key={i} path={route.path}
                        exact={route.exact}
                        render={(props)=><route.component {...props}/>}/>
        })}
      </Switch>
    </Suspense>
  );
}

export default App;
