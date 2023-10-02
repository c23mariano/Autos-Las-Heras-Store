import React, {useState, useEffect} from "react";

import ItemDetail from "../ItemDetail";

const car = {id: 1, image: "https://www.autoo.com.br/fotos/2018/2/960_720/volkswagen_amarok_2018_1_26022018_8891_960_720.jpg", title: "Volkswagen Amarok V6 Highline 258cv"};

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(car);
            }, 3000);
        });

        getData.then(res => setData(res))
    }, []) 

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;