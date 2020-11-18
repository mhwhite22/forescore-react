import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./HomePage.css"
import Footer from "../../Components/Footer/Footer";

const HomePage = (props) => {
    return (
        <div className="HomePage">
        <Navbar />
        <h2>Hello, User</h2>
        <Footer />
        </div>
    )
}

export default HomePage;