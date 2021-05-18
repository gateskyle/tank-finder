import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import "./App.css";
import HomePage from '../src/pages/HomePage/HomePage';
import SearchPage from '../src/pages/SearchPage/SearchPage';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/search" exact component={() => <SearchPage />} />
        </Switch>
      </Router>
  )
}


export default App;
