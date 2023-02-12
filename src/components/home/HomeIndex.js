import React from 'react';

import Header from './layouts/Header';
import MenuModel from './layouts/MenuModel';
import Footer from './layouts/Footer';
import HomeBanner from './HomeBanner';
import HomeAbout from './HomeAbout';
import HomeSkill from './HomeSkill';
import HomeAward from './HomeAward';
import HomeProject from './HomeProject';
import HomeClient from './HomeClient';
import HomeFeedback from './HomeFeedback';
import HomeBlog from './HomeBlog';
import HomeContact from './HomeContact';

import  './assets/css/style.css' // Include font URL
import './assets/css/style-liberty.css'; //Home CSS 
import FooterScript from './layouts/FooterScript'; // footer Script (BS,owl) 

const HomeIndex = () => {


    return (
        <div>
            <Header />
            <MenuModel />
            <HomeBanner />
            <HomeAbout />
            <HomeSkill />
            <HomeAward />
            <HomeProject />
            <HomeClient />
            <HomeFeedback />
            <HomeBlog />
            <HomeContact />
            <Footer />
            {<FooterScript/>}
        </div>
    );

}

export default HomeIndex;
