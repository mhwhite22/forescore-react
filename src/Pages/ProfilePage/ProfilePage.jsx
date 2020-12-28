import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './ProfilePage.css'

function ProfilePage(props){
    return (
        <div className="ProfilePage">
        <Navbar />
        <h3>This is the Profile Page</h3>
        </div>
    )
}

export default ProfilePage;