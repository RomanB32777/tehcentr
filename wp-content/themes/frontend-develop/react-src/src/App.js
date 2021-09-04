import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'

import AppNavbar from "./components/Navbar";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { useSelector } from "react-redux";
import { Loader } from "./components/UI/Loader";

import './bootstrap.min.css'
import './style/scss/style.scss'
import 'bootstrap/dist/js/bootstrap.bundle';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function App() {

    const loading = useSelector(state => state.loading)

    return (
        <div id="app" className="App">
            <Loader loading={loading} />
            <AppNavbar />
            <Router>
                <Main />
                <Footer />
            </Router>
        </div>

    );
}

export default App;
