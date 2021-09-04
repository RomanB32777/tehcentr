import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { Additions } from './components/Additions'
import { Adventages } from './components/Adventages'
import { Banner } from './components/Banner'
import { CategoriesList } from './components/CategoriesList'
import { Category } from './components/Category'
import { Contacts } from './components/Contacts'
import { Footer } from './components/Footer'
import { Main } from './components/Main'
import Navbar from './components/Navbar'
import { Producers } from './components/Producers'

export const Routes = ({ posts, categories, additions }) => {

    return (
        <React.Fragment>
            <Navbar />
            <div id="main">
                <Banner />
                <Adventages />
                <Producers />
                <div className="container">
                    <div id="posts">
                        <div className="row">
                            <div className="col-3">
                                <h3>Категории</h3>
                                {categories && <CategoriesList categories={categories} />}
                            </div>
                            <div className="col-9">
                                <React.Fragment>
                                    <Switch>
                                        <Route path="/" exact>
                                            <Main posts={posts} categories={categories} />
                                        </Route>
                                        <Route path="/category/:id">
                                            <Category />
                                        </Route>
                                        <Redirect to="/" />
                                    </Switch>
                                </React.Fragment>
                            </div>
                        </div>
                    </div>
                    <Additions additions={additions} />
                    {/* <Contacts /> */}
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1068.2472000893358!2d34.36875079536907!3d53.23995601210776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xce38b04eab84f338!2sRolling&#39;s!5e0!3m2!1sru!2sru!4v1621809573032!5m2!1sru!2sru" height="450" style={{ border: 0, width: "100%" }} allowfullscreen="" loading="lazy"></iframe>
                {/* <div style={{ position: "relative", overflow: "hidden" }}><a href="https://yandex.ru/maps/191/bryansk/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", display: "none", fontSize: "12px", position: "absolute", top: "0px" }}>Брянск</a><a href="https://yandex.ru/maps/191/bryansk/?ll=34.373275%2C53.240361&utm_medium=mapframe&utm_source=maps&z=16.9" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Яндекс.Карты — транспорт, навигация, поиск мест</a><iframe src="https://yandex.ru/map-widget/v1/-/CCU4zNwvLA" height="400" frameborder="1" allowfullscreen="true" style={{ position: "relative", width: "100%" }}></iframe></div> */}
            </div>
            <Footer />
        </React.Fragment>
    )
}