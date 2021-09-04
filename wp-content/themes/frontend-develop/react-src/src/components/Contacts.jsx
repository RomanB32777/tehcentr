import React from 'react';

export const Contacts = () => {
    return (
        <div id="contacts">
            <h3 className="text-center">
                Контакты
            </h3>
            <div className="row">
                <div className="col-md-6">
                    <div className="contacts-map">
                        <div style={{ position: "relative", overflow: "hidden" }}><a href="https://yandex.ru/maps/191/bryansk/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", display: "none", fontSize: "12px", position: "absolute", top: "0px" }}>Брянск</a><a href="https://yandex.ru/maps/191/bryansk/?ll=34.373275%2C53.240361&utm_medium=mapframe&utm_source=maps&z=16.9" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Яндекс.Карты — транспорт, навигация, поиск мест</a><iframe src="https://yandex.ru/map-widget/v1/-/CCU4zNwvLA" width="560" height="400" frameborder="1" allowfullscreen="true" style={{ position: "relative" }}></iframe></div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="contacts-info">
                        <div className="contacts-info-form">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className="contacts-info-text">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos voluptatem dolorum id quos. Ullam voluptate, qui eos hic quam velit nemo molestias fugiat laborum a debitis, similique libero officiis rem?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}