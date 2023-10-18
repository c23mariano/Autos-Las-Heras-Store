import "./item.css";

import { Link } from "react-router-dom";
import React, {useContext} from "react";

const Item = ({info}) => {
    
    return (
        <Link to={`/detalle/${info.id}`} className="car">
            <img src={info.image} alt="" />
            <p>{info.title}</p>
            <p>${info.price}</p>
        </Link>
    );
}

export default Item;
