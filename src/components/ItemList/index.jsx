import Item from "../Item";
import React from "react";

const ItemList = ({data = []}) => {
    return (
        data.map(car => <Item key={car.id} info={car} />) 
    );
}

export default ItemList;