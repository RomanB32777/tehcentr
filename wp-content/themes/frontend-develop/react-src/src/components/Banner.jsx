import React from 'react';
import { MyButton } from './UI/Button';
import { RepairModal } from './UI/RepairModal';
import { useSelector } from 'react-redux';
import renderHTML from 'react-render-html';

export const Banner = () => {
    
    const head = useSelector(state => state.head)
    
    const btnRepair = {
        btn: true,
        textBtn: "Заявка на ремонт",
        classBtn: "primary",
        sizeBtn: "large",
        additClasses: "mr-3",
        data: {
            "data-bs-toggle": "modal",
            "data-bs-target": "#repairModal",
        } 
    }
    // Смотреть каталог , #products

    const btnCatalog = {
        btn: false,
        textBtn: "Аренда инструмента",
        classBtn: "grey",
        sizeBtn: "large",
        link: "#products",
    }
    
    // Получить консультацию , tel:89051027358

    return (
        <div id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="banner-textblock">
                        
                            {/*<span>Аренда</span> <br /> инструмента и оборудования в Брянске */}
                            <h1><span>Ремонт</span> и аренда электро-бензоинструмента в Брянске</h1>
                            <p>Занимаемся ремонтом<span className="mobile-rent">, арендой</span> и техническим обслуживанием электроинструмента, бензоинструмента и промышленного оборудования.<span className="desktop-rent"> Также предоставляем в аренду инструменты и оборудование известных производителей.</span></p>
                           
                            {/* <h1>{renderHTML(head.info_head)}</h1>
                            <p>{renderHTML(head.info_description)}</p> */}
                            {/* На базе нашего пункта проката работает мастерская, которая занимается ремонтом и техническим обслуживанием электроинструмента и бензоинструмента */ }
                        </div>
                        <div className="banner-buttonblock">
                            <MyButton {...btnRepair}/>
                            <MyButton {...btnCatalog}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="banner-imgblock">
                            <img src={require('../img/main.png')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
           <RepairModal />
        </div>
    )
}
