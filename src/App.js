import React,{Component} from 'react';
// importacion de elementos para crear rutas
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// importacion de componentes
import Inicio from './components/inicio'
import CardPlatillo from './components/cardPlatillo';
import Countries from './components/countries';
import Dishes from './components/dishes';
import NotFound from './components/notFound';

import './styles/App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          {/* rutas para navegar entre archivos */}
          <Switch>
            <Route path="/" exact> <Inicio/> </Route>
            <Route path="/showDishes" component={Dishes}></Route>
            <Route path="/pais"> <Countries/> </Route>
            <Route path="/card/:name"> <CardPlatillo/> </Route>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
