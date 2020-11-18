import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../Components/Navbar";
import styles from "./HomePage.css"

const HomePage = (props) => {
    return (
        <div className="HomePage">
        <Navbar />
        <h2>Hello, User</h2>
        </div>
    )
}

export default HomePage;