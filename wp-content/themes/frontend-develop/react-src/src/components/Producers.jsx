import React from 'react';
import { useSelector } from 'react-redux';
import OwlCarousel from 'react-owl-carousel';

export const Producers = () => {
    const producers = useSelector(store => store.producers)

    //Owl Carousel Settings
    const options = {
        margin: 30,
        responsiveClass: true,
        autoplay: true,
        loop: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        },
    };

    return (
        <div id="producers">
            <div className="container">
                <h3 className="text-center section-heading">Работаем с марками <span className="c-primary">известных</span> производителей</h3>
                <OwlCarousel className="slider-items owl-carousel producers-carousel" {...options}>
                    {producers && producers.map((producer, index) => <div key={index} className={"item " + (producer === "Bosch.png" ? "bosch" :  "")}><img src={require(`../img/${producer}`)} /></div>)}
                </OwlCarousel>
            </div>
        </div>
    )
}