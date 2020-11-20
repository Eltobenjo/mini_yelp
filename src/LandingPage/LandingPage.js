import React from 'react';
import styles from './LandingPage.module.css'

export default function LandingPage() {
    return (
    <div className={styles.landing}>
    <h1>Landing Page</h1>
    <img className='logo' src='../assets/logo.png' alt='LOGO'/>
    </div>
    )
}
