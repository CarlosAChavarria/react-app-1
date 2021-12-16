import React,{Component} from 'react';
import Button from '@mui/material/Button';
import Dishes from './dishes';
import Data from '../assets/data/dishes.json';


// importacion de componentes
import Header from './header';
import NewDish from './newDish';

class Inicio extends Component {

  state = {
    dish: "Tacos",
    dishes : Data
  }
  render(){
    return (
        <div className="App">
          <Header/>
          <NewDish/>        
          <div className='b_showPlatillos'>
          <Button variant="contained" href="/pais">VER PAISES</Button>
          </div>
          {/* enviando los datos almacenados en state al componente */}
          <Dishes Data={this.state.dishes} />
        </div>
    );
  }
}

export default Inicio;