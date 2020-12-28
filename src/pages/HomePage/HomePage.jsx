import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import styles from "./HomePage.css"
import Footer from "../../components/Footer/Footer";
import Greeting from "../../components/Greeting/Greeting";


const HomePage = (props) => {
    return (
        <div className="HomePage">
        <Navbar 
            handleLogout={props.handleLogout}
            />
        <Greeting handle={props.handle}/>
        <Footer />
        </div>
    )
}

export default HomePage;