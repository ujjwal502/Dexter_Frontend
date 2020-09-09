import React from 'react';
import Menu from "./Menu";
import Logo from '../images/logo.png';

//import Layout from './Layout'

import '../styles.css'

const Home = () => {
    return (
        // <Layout title='Home Page' description='Dexter App'>
        //     ......
        // </Layout>
        <div id="homepage">
            <Menu id="head-menu"/>
            <img src={Logo} align="middle" id="logo"></img>
            <h1 id="subtext">#Just Learning Happening</h1>
        </div>
    )
}

export default Home;