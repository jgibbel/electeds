import React from 'react';
import './App.css';
import CongressionalDistricts from './CongressionalDistricts.js';

import About from './About';
import Contribute from './Contribute';
import Resources from './Resources';
import Documents from './Documents.js';
import UrReps from './UrReps.js';
import AllReps from './AllReps';
import CityCouncilShow from './CityCouncilShow';

import HeaderApp from "./components/HeaderApp"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">     
   
    <HeaderApp>REPPINGNYC</HeaderApp>
    
    <Link className="nav" to="/about">about</Link>
    <Route exact path="/about"><p>This weblog is intended to provide young people access to information concerning elected civil servants in New York City.</p></Route>
    

     <Link className="nav" to="/resources">resources</Link>
     <Route exact path="/resources"><Resources /></Route>
    
     <Link className="nav" to="/cc/1">City Council Candidates 2021</Link>
     <Link className="nav" to="/urReps">find your representation</Link>
     <Link className="nav" to="/allReps">all electeds by body</Link>
     
     <Route exact path="/urReps"><UrReps /></Route>
     <Route exact path="/allReps"><AllReps /></Route>
     <Route exact path="/about"><Contribute /></Route>
     <Route path="/cc/:id" component={CityCouncilShow}/>
    </div>
    </Router>
  );
}

export default App;
