import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../Components/Navbar";
import styles from "./HomePage.css"

const HomePage = (props) => {
    return (
        <div className="HomePage">
        <h2>Hello, User</h2>
        <Navbar />
        </div>
    )
}

export default HomePage;