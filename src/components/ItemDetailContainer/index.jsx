import React, {useState, useEffect} from "react";

import ItemDetail from "../ItemDetail";
import { useParams } from "react-router";

const cars = [
    {id: 1, price: 26500000, image: "https://www.autoo.com.br/fotos/2018/2/960_720/volkswagen_amarok_2018_1_26022018_8891_960_720.jpg", category: 'camionetas', title: "Volkswagen Amarok V6 Highline 258cv"},
    {id: 2, price: 14500000, image: "https://www.megautos.com/wp-content/uploads/2018/11/amarok-trendline-1.jpg", category: 'camionetas', title: "Volkswagen Amarok Trendline 4x2 140cv"},
    {id: 3, price: 18900000, image: "https://www.klassikcar.cl/volkswagen/wp-content/uploads/amarok-color-blanco-candy.png", category: 'camionetas', title: "Volkswagen Amarok Highline 4x4 AT 180cv"},
    {id: 4, price: 25000000, image: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/l/RT_V_25a6a899dfdd43beae53fc19419db0f3.jpg", category: 'autos', title: "Volkswagen Taos Highline"},
    {id: 5, price: 16900000, image: "https://mundodoautomovelparapcd.com.br/wp-content/uploads/2020/08/Volkswagen-Nivus-Comfortline-01-1024x576.jpg", category: 'autos', title: "Volkswagen Nivus Comfortline"},
    {id: 6, price: 9500000, image: "https://agenciauto.com/wp-content/uploads/2021/03/BLANCO-GLACIAL-SANDERO_NP2021-1536x864.jpg", category: 'autos', title: "Renault Sandero Intens"},
    {id: 7, price: 9900000, image: "https://agenciauto.com/wp-content/uploads/2021/02/Blanco-GLACIAL-STEPWAY_NP2021.jpg", category: 'autos', title: "Renault Stepway Intens"},
    {id: 8, price: 9000000, image: "https://motores.lacapital.com.ar/static/blog/2021/02/02/Cronos_BlancoAlaska_29.png", category: 'autos', title: "Fiat Cronos Precision"},
    {id: 9, price: 22000000, image: "https://www.autotropical.com/toyota/wp-content/uploads/2021/03/1.-SUPER-BLANCO.jpg", category: 'autos', title: "Toyota Corolla SEG 2.0"},
    {id: 10, price: 16000000, image: "https://i2.wp.com/revistaroadone.com/wp-content/uploads/2020/08/Toyota-YARIS-SUPER-BLANCO.jpg?fit=1024%2C576&ssl=1", category: 'autos', title: "Toyota Yaris XLS 5Ptas"},
];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(cars);
            }, 3000);
        });

        getData.then(res => setData(res.find(car => car.id === parseInt(detalleId))))
    }, []) 

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;