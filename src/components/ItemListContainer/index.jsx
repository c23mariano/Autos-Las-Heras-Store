import React, {useEffect, useState} from "react";
import ItemList from "../ItemList";
import Title from "../Title";
import ItemCount from "../ItemCount";

const cars = [
    {id: 1, image: "https://www.autoo.com.br/fotos/2018/2/960_720/volkswagen_amarok_2018_1_26022018_8891_960_720.jpg",
    title: "Volkswagen Amarok V6 Highline 258cv"},
    {id: 2, image: "https://www.megautos.com/wp-content/uploads/2018/11/amarok-trendline-1.jpg", 
    title: "Volkswagen Amarok Trendline 4x2 140cv"},
    {id: 3, image: "https://www.klassikcar.cl/volkswagen/wp-content/uploads/amarok-color-blanco-candy.png", 
    title: "Volkswagen Amarok Highline 4x4 AT 180cv"},
    {id: 4, image: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/l/RT_V_25a6a899dfdd43beae53fc19419db0f3.jpg", 
    title: "Volkswagen Taos Highline"},
    {id: 5, image: "https://mundodoautomovelparapcd.com.br/wp-content/uploads/2020/08/Volkswagen-Nivus-Comfortline-01-1024x576.jpg", 
    title: "Volkswagen Nivus Comfortline"},
    {id: 6, image: "https://agenciauto.com/wp-content/uploads/2021/03/BLANCO-GLACIAL-SANDERO_NP2021-1536x864.jpg", 
    title: "Renault Sandero Intens"},
    {id: 7, image: "https://agenciauto.com/wp-content/uploads/2021/02/Blanco-GLACIAL-STEPWAY_NP2021.jpg", 
    title: "Renault Stepway Intens"},
    {id: 8, image: "https://motores.lacapital.com.ar/static/blog/2021/02/02/Cronos_BlancoAlaska_29.png", 
    title: "Fiat Cronos Precision"},
    {id: 9, image: "https://www.autotropical.com/toyota/wp-content/uploads/2021/03/1.-SUPER-BLANCO.jpg", 
    title: "Toyota Corolla SEG 2.0"},
    {id: 10, image: "https://i2.wp.com/revistaroadone.com/wp-content/uploads/2020/08/Toyota-YARIS-SUPER-BLANCO.jpg?fit=1024%2C576&ssl=1", 
    title: "Toyota Yaris XLS 5Ptas"},
];

export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(cars);
            }, 3000);
        });
        getData.then(res => setData(res)); 

    }, [])

    const onAdd = (quantity) => {
        console.log('Compraste ${quantity} unidades');
    }
    
    return (
        <>
            <Title greeting={texto} />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;