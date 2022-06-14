import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { types } from '../redux/types';

export const Footer = () => {

    const year = new Date().getFullYear()
    const contacts = useSelector(state => state.contacts)
    const categories = useSelector(state => state.categories)
    const loadingType = useSelector(state => state.loadingType)
    const history = useHistory()

    const toCategory = (id, count, name) => {
        history.push(`/category/${id}`)
        //count ? history.push(`/category/${id}`) : history.push("/")
    }

    return (
        <div id="footer" className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer-textBlock">
                            <h1 className="footer-brand">Техцентр</h1><hr />
                            <h5 className="footer-heading"><span>Ремонт</span> и аренда <br /> электро-бензоинструмента в Брянске</h5> 
                            <p className={`footer-text animate-${loadingType["settings"]}`}>© {!loadingType["settings"] && <span>{contacts.domain}</span>}, {year}. Все права защищены.</p>
                        </div>
                    </div>
                    <div className="col-md-5 footer-categoriesBlock d-none d-lg-block">
                        <h5>Каталог</h5>
                        <hr />
                        {!loadingType["categoriesList"] &&
                        <div className={`categories-list animate-${loadingType["categoriesList"]}`}>
                            {categories.map((cat, index) => {
                                if (cat.count && cat.id !== 1)
                                    return (<div key={index} className="categories-list-item"><a onClick={() => toCategory(cat.id, cat.count, cat.name)} href="#products">{cat.name}</a></div>)
                            })}
                        </div>
                        }
                    </div>
                    <div className="footer-contactsBlock col-lg-3 col-md-4 offset-md-4 offset-lg-0">
                        <h5>Наши контакты</h5><hr />
                        <div className={`contacts-block animate-${loadingType["settings"]}`}>
                            {!loadingType["settings"] &&
                            <>
                                <div className="contacts-block-phone">
                                    <div className="contacts-block-phone-icon">
                                        <img src={require('../img/icons-phone-32.png')} alt="" />
                                    </div>
                                    <div className="contacts-block-phone-links">
                                        {contacts.phones && contacts.phones.map((phone, index) => <a key={index} href={`tel:${phone}`}>{phone}{index === 2 && <span style={{ display: 'block' }}>(Новосоветская)</span>}</a>)}
                                    </div>
                                </div>
                                <div className="contacts-block-email">
                                    <div className="contacts-block-email-icon">
                                        <img src={require('../img/icons-mail-32.png')} alt="" />
                                    </div>
                                    <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                                </div>
                                <div className="contacts-block-location">
                                    <div className="contacts-block-location-icon">
                                        <img src={require('../img/icons-marker-32.png')} alt="" />
                                    </div>
									<div className="contacts-block-location-links">
                                    	<a href={contacts.location.link} rel="noopener noreferrer" target="_blank">{contacts.location.text}</a>
										{contacts.location_2 && <a href={contacts.location_2.link} rel="noopener noreferrer" target="_blank">{contacts.location_2.text}</a>}
									</div>
                                </div>
								<div className="contacts-block-vk">
                                    <div className="contacts-block-vk-icon">
                                        <img src={require('../img/icons-vk.png')} alt="" />
                                    </div>
                                    <a href={contacts.vk && contacts.vk} rel="noopener noreferrer" target="_blank">Мы в ВК</a>
                                </div>
                            </>
                            }
                        </div>
                    </div>
                </div>
                <p className={`footer-text-mobile animate-${loadingType["settings"]}`}>© {!loadingType["settings"] && <span>{contacts.domain}</span>}, {year}. <br /> Все права защищены.</p>
            </div>
        </div>
    )
}