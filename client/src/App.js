import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Footer from "./components/Footer";
import './App.css';


  const App = () => (
   <Router>
      <div>
        <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/home" component={Home} />
         <Route exact path="/saved" component={Saved} />
         </Switch>
        <Footer/>
      </div>
   </Router>
);
  
export default App;
