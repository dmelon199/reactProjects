
import './styles.css';
import React from 'react'


import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { render } from 'react-dom';


//pages
import MainPage from "./pages/MainPage";
import Lithia from "./pages/Lithia";

function App() {
  return (  <Router>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/lithia" component={Lithia}/>
      </Switch>
    </Router>
  )
}

export default App;
