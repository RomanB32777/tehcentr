import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { useParams } from 'react-router';
import { loadApp } from '../redux/async/loadApp';
import { Additions } from './Additions';
import { Adventages } from './Adventages';
import { Banner } from './Banner';
import { Producers } from './Producers';
import { Products } from './Products';


export const Main = () => {

    const dispatch = useDispatch()
    //const { id } = useParams()
    //const { search } = useParams()

    useEffect(() => {
        dispatch(loadApp())
    //    id ? dispatch(loadApp(id)) : dispatch(loadApp())
    }, [])

    return (
        <div id="main">
            <Banner />
            <Adventages />
            <Producers />
            <Products />
            <Additions />
            <div id="appMap" className="appMap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383.406149324498!2d34.294201115837396!3d53.3180808799731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4132a83675b9d727%3A0x9253c8039313f504!2z0YPQuy4g0JLQvtC60LfQsNC70YzQvdCw0Y8sIDYxLCDQkdGA0Y_QvdGB0LosINCR0YDRj9C90YHQutCw0Y8g0L7QsdC7LiwgMjQxMDE2!5e0!3m2!1sru!2sru!4v1622239203251!5m2!1sru!2sru" height="450" style={{ border: 0, width: "100%" }} allowFullScreen="" loading="lazy"></iframe>
            </div>
            {/* <div style={{ position: "relative", overflow: "hidden" }}><a href="https://yandex.ru/maps/191/bryansk/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", display: "none", fontSize: "12px", position: "absolute", top: "0px" }}>Брянск</a><a href="https://yandex.ru/maps/191/bryansk/?ll=34.373275%2C53.240361&utm_medium=mapframe&utm_source=maps&z=16.9" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Яндекс.Карты — транспорт, навигация, поиск мест</a><iframe src="https://yandex.ru/map-widget/v1/-/CCU4zNwvLA" height="400" frameborder="1" allowfullscreen="true" style={{ position: "relative", width: "100%" }}></iframe></div> */}
        </div>
    )
}