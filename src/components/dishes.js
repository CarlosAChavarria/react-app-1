import React, {Component} from "react";
// import {List, ListItem, ListItemText, ListItemIcon} from '@mui/material';
// import { Restaurant } from "@mui/icons-material";
import { ImageList } from "@mui/material";

// importacion de componentes
import CardPlatillo from "./cardPlatillo";

export class Dishes extends Component{
    
    render(){
        return(
            <div>
                <br/><hr/>

                {/* mostrando datos con diseño de material */}
                
                {/* <h3> Mostrando datos con listas de material </h3>
                <List component="nav">
                    {Data.dishes.map( (dish, index) =>(
                        <ListItem button key={index}>
                            <ListItemIcon>
                                <Restaurant/>
                            </ListItemIcon>
                            <ListItemText insert primary={dish.name}/>
                        </ListItem>
                    ) )}
                </List> */}

                {/* mostrando informacion de los platillos insertada en el componente card */}

                <ImageList cols={3} rowHeight={164}>
                    {this.props.Data.dishes.map( (dish, index) =>(
                        <CardPlatillo key={index} name={dish.name} ingredients={dish.ingredientes} cantidad={dish.ingredientes.length} />
                    ))}
                </ImageList>
            </div>
        );
    }
}

export default Dishes;