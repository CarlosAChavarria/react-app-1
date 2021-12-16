import React, {Component} from 'react';
import Fab from '@mui/material/Fab';
import {TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

class NewDish extends Component{

    // realizando una ligadura al metodo para usar this.
    constructor(){
        // accediendo a todas las opciones de component
        super();
        this.addDish = this.addDish.bind(this);
    }

    // uso de valores por referencia para acceder a componentes
    newDish = React.createRef();

    addDish(event){
        console.log("Platillo agregado: " + this.newDish.value);
        // preventDefault() evita que la pagina se recargue por completo al ocurrir este evento y mantiene la información ingresada.
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.addDish}>
                    <TextField
                        id="outlined-disabled"
                        label="Platillo"
                        // variant ?
                        variant="outlined"
                        // creando la referencia
                        inputRef={e => (this.newDish) = e}
                    />
                    {/* fab - floating action button */}
                    <Fab color="primary" aria-label="add" className="spaceIcons" onClick={this.addDish}>
                        <AddIcon />
                    </Fab>
                </form>
            </div>
        );
    }
}

export default NewDish;