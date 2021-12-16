import React, {Component} from 'react';
import Button from "@mui/material/Button";

class Countries extends Component{

    // metodo de javascript
    getCountries(){
        fetch('https://restcountries.com/v3.1/all').then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error));
    }

    render(){
        return(
            <div>
                <h1> Countries </h1>
                <div className='b_showPlatillos'>
                    <Button variant="contained" href="/" >REGRESAR</Button>
                </div>
                <br/>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.getCountries}
                >
                    Cargar Lista
                </Button>
            </div>
        );
    }
}

export default Countries;