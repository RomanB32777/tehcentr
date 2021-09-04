import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MyButton } from './UI/Button';
import Navbar from 'react-bootstrap/Navbar'

const AppNavbar = () => {
    const menu = useSelector(state => state.menu)
    const contacts = useSelector(state => state.contacts)
    const loadingType = useSelector(state => state.loadingType)

    const [expanded, setExpanded] = useState(false);
    
    const btnRepair = {
        btn: true,
        textBtn: "Заявка на ремонт",
        classBtn: "primary",
        sizeBtn: "large",
        additClasses: "nav-btnRepair",
        data: {
            "data-bs-toggle": "modal",
            "data-bs-target": "#repairModal",
        } 
    }

    useEffect(() => {
        let prevScrollpos = window.pageYOffset;
        window.onscroll = () => {
            let currentScrollPos = window.pageYOffset;
            const navbar = document.getElementById("navbar");
            if (navbar) {
                if (prevScrollpos > currentScrollPos) {
                    navbar.style.top = "0px";
                } else if (prevScrollpos < 80) {
                    navbar.style.top = "0px";
                } else {
                    navbar.style.top = "-80px";
                }
            }
            prevScrollpos = currentScrollPos;
        };
    }, [])

    return (
        <Navbar expanded={expanded} id="navbar" bg="light" expand="lg" className="fixed-top">
            <div className="container">
                <Navbar.Brand className="brand">
                    <a className="navbar-brand" href="#app">Техцентр</a>
                </Navbar.Brand>

                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="navbar-right-flex">
                        <div className={`navbar-info navbar-phone animate-${loadingType["settings"]}`}>
                         {!loadingType["settings"] &&
                            <>
                                <div className="navbar-phone">
                                    <div className="navbar-phone-icon">
                                        <img src={require('../img/icons-phone-32.png')} alt="" />
                                    </div>
                                    <div className="navbar-phone-links">
                                        {contacts.phones && contacts.phones.map((phone, index) => <a key={index} href={`tel:${phone}`}>{phone}</a>)}
                                    </div>
                                </div>
                                <div className="navbar-email">
                                    <div className="navbar-email-icon">
                                        <img src={require('../img/icons-mail-32.png')} alt="" />
                                    </div>
                                    <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                                </div>
                                <div className="navbar-location">
                                    <div className="navbar-location-icon">
                                        <img src={require('../img/icons-marker-32.png')} alt="" />
                                    </div>
                                    <a href={contacts.location.link} rel="noopener noreferrer" target="_blank">{contacts.location.text}</a>
                                </div>
                            </>
                         }
                        </div>

                        <ul className="navbar-nav">
                            {menu && menu.map((item, index) => (
                                <li key={index} className="nav-item">
                                    <a onClick={() => setExpanded(false)} className="nav-link" href={item.link}>{item.title}</a>
                                </li>
                            ))}
                            <li> <MyButton {...btnRepair}/> </li>
                        </ul>
                       
                    </div>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default AppNavbar
