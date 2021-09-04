import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdditions } from '../redux/async/additions';
import { Addition } from './Addition';
import OwlCarousel from 'react-owl-carousel';

export const Additions = () => {
    const dispatch = useDispatch()
    const additions = useSelector(state => state.additions)
    const loadingType = useSelector(state => state.loadingType)

    const options = {
        responsiveClass: true,
        dots: false,
        nav: false,
        //autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            992: {
                items: 2,
            }
        },
    };

    useEffect(() => {
        dispatch(getAdditions()) // ????????????
    }, [])

    return (
        <div id="additions">
            <div className="container">
                <h3 className="text-center section-heading">Дополнительные услуги</h3>
                
                <div className={`additions-container animate-${loadingType["all"]}`}>
                    <OwlCarousel className="slider-items additions-block owl-carousel" {...options}>
                        {additions && additions.map((addition, index) => <Addition key={index} addition={addition} />)}
                    </OwlCarousel>
                </div>
                
            </div>
        </div>
    )
}