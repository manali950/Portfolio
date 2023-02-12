import React, { Component } from 'react';

import Header from './layouts/Header';
import SideBar from './layouts/SideBar';

import 'admin-lte/dist/css/adminlte.min.css';
import './AdminIndex.css';
import Footer from './layouts/Footer';
import AdminDashboard from './AdminDashboard';
import FooterScript from './layouts/FooterScript';




export default class AdminIndex extends Component {
    render() {

        return (
            <body className='hold-transition sidebar-mini'>
                <div className="wrapper">
                    {/*<h1 className={style.h1}>admin</h1>*/}
                    <Header />
                    <SideBar />
                    <AdminDashboard/>
                    <Footer />
                    <FooterScript />
                </div>
            </body>
        );
    }
}
