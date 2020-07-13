import React from 'react';
import './App.css';
import CongressionalDistricts from './CongressionalDistricts.js';

import About from './About';
import Contribute from './Contribute';
import Resources from './Resources';
import Documents from './Documents.js';
import UrReps from './UrReps.js';
import AllReps from './AllReps';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Link  to="/support"><p className="right">support the work</p></Link>

    <div className="App">     
    {/* <svg width="960" height="600"> <CongressionalDistricts width={960} height={600} />
    </svg> */}
          <Route exact path="/support"><p>email reppingnyc@gmail.com for inquiries, to join the team, or throw some dough. ty, peace n love.</p></Route>
    <br></br>   
     <Link className="" to="/about">about</Link>
     <Route exact path="/about"><p>This weblog is intended to provide young people access to information concerning elected civil servants in New York City.</p></Route>
     
<br></br>
     <Link className="" to="/resources">resources</Link>
     <Route exact path="/resources"><Resources /></Route>
<br></br>
     <Link className="" to="/documents">documents</Link>
     <Route exact path="/documents"><Documents /></Route>
     <br></br>
     <Link className="" to="/urReps">find your representation</Link>
     <br></br>
     <Link className="" to="/allReps">all electeds by body</Link>
     <Route exact path="/urReps"><UrReps /></Route>
     <Route exact path="/allReps"><AllReps /></Route>
     <Route exact path="/about"><Contribute /></Route>
     
    </div>
    </Router>
  );
}

export default App;
