import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Inicio from './components/Inicio';
import Persona from './components/Persona';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <div className="btn-group">
          <NavLink to="/" className="btn btn-dark">Inicio</NavLink>
        
          <NavLink to="/contacto" className="btn btn-dark">Contacto</NavLink>
        
          <NavLink to="/nosotros" className="btn btn-dark" activeClassName="active">Nosotros</NavLink>
        </div>
        <hr />
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/contacto">
            <Contacto/>
          </Route>
          <Route path="/nosotros" exact>
            <Nosotros />
          </Route>
          <Route path="/nosotros/:id" exact>
            <Persona />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
