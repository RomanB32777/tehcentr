import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { useSelector } from 'react-redux';
import renderHTML from 'react-render-html';


export const Adventages = () => {
    const adventages = useSelector(state => state.adventages)

    const options = {
        responsiveClass: true,
        dots: false,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            400: {
                items: 1,
                dots: true
            },
            600: {
                items: 2,
                dots: true
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        },
    };

    return (
        <div id="adventages">
            <div className="container">
                <h3 className="text-center section-heading">Наши преимущества</h3>
                <OwlCarousel className="slider-items adventages-list owl-carousel" {...options}>
                    {adventages && adventages.map((adventage, index) => (
                        <div key={index} className="adventage">
                            <div className="adventage-img">
                                <img src={require(`../img/${adventage.icon}`)} alt="" />
                            </div>
                            <div className="adventage-text">
                                <h5>{adventage.title}</h5>
                                <p>{renderHTML(adventage.description)}</p>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>

            {/* <div className="row adventages-list">
                <div className="col-md-3 ">
                    <div className="adventage">
                        <div className="adventage-img">
                            <img src={adventageMechanic} alt="" />
                        </div>
                        <div className="adventage-text">
                            <h5>Профессиональные инструменты</h5>
                            <p>В наличии только качественное обрудование</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className="adventage">
                        <div className="adventage-img">
                            <img src={adventageDelivey} alt="" />
                        </div>
                        <div className="adventage-text">
                            <h5>Доставка инструментов</h5>
                            <p>Возможна доставка по городу в дневное и вечернее время</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className="adventage">
                        <div className="adventage-img">
                            <img src={adventageCashe} alt="" />
                        </div>
                        <div className="adventage-text">
                            <h5>Удобная оплата</h5>
                            <p>Принимаем наличный и безналичный расчет</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className="adventage">
                        <div className="adventage-img">
                            <img src={adventageAddit} alt="" />
                        </div>
                        <div className="adventage-text">
                            <h5>Дополнительные услуги</h5>
                            <p>Помимо аренды инструментов, мы предагаем <a href="#">доп. услуги</a></p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}