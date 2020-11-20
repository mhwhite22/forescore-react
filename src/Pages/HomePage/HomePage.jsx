import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./HomePage.css"
import Footer from "../../Components/Footer/Footer";
import Greeting from "../../Components/Greeting/Greeting";


const HomePage = (props) => {
    return (
        <div className="HomePage">
        <Navbar 
            handleLogout={props.handleLogout}
            />
        <Greeting />
        <Footer />
        </div>
    )
}

export default HomePage;