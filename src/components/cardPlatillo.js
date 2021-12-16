import React, {Component} from "react";
import Button from '@mui/material/Button';

// Formato de cards de platillos
class CardPlatillo extends Component{

    state = {
        edit:false,
        name: this.props.name
    };
  
    render(){
        return (
            <div className="card">
                <h2>{this.props.name}</h2>
                <h4>Ingredientes: {this.props.cantidad}</h4>
                <ul>
                    {/* index es el valor unico de referencia */}
                    {this.props.ingredients.map((ingredient, index) =>(<li key={index}>{ingredient}</li>))}
                </ul>
                <br/>
                <Button variant="contained" color='error'>
                Elegir
                </Button>
            </div>
        )
    }
}

export default CardPlatillo;