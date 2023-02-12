import React, { useEffect, useState } from 'react'
import { Link ,useLocation} from 'react-router-dom';
// import './../../../../node_modules/admin-lte/dist/css/adminlte.min.css';


const SideBar =() => {
    const [activeTab , setActiveTab] = useState("Home");
    const location = useLocation();
    useEffect(() =>{
        if(location.pathname === "/admin"){
            setActiveTab("admin");
        }else if(location.pathname === "/adminProfile"){
            setActiveTab("adminProfile");
        }else if(location.pathname === "/adminContact"){
            setActiveTab("adminContact");
        }else if(location.pathname === "/adminSocial"){
            setActiveTab("adminSocial");
        }else if(location.pathname === "/adminSkill"){
            setActiveTab("adminSkill");
        }else if(location.pathname === "/adminVcCard"){
            setActiveTab("adminVcCard");
        }
    },[location]);
    const mystyle = {
        color: "white",
        display:" inline - block",
        margin: 0,
        // fontSize: "0px", 
        // lineHeight: "0px",
        
    };
return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">

        <a href="/admin" className="brand-link">
            <img src="../../dist/img/Logo.png"
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: ".8" }} />
            <span className="brand-text font-weight-light">Admin Pannel</span>
        </a>


        <div className="sidebar">

            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                </div>
                <div className="info">
                    <a href="#" className="d-block">Dynamic Name</a>
                </div>
            </div>

            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                    <li className={`${activeTab === "admin" ? "nav-item  has-treeview menu-open" :"nav-item  has-treeview"}`} >
                        <a href="#" className="nav-link">
                            <i className="nav-icon fa fa-dashboard"></i>
                            <p style={mystyle}>
                                Dashboard
                                <i className="right fa fa-angle-left"></i>
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <Link to="/admin" className={`${activeTab === "admin" ? "nav-link active" :"nav-link"}`}>
                                    <i className="fa fa-circle-o nav-icon"></i>
                                    <p onClick={() => setActiveTab("admin")}>Home</p>
                                </Link>
                            </li>

                        </ul>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/adminProfile" className={`${activeTab === "adminProfile" ? "nav-link active" :"nav-link"}`}>
                            <i className="nav-icon fa fa-user-o"></i>
                            <p style={mystyle} onClick={() => setActiveTab("adminProfile")}>
                            AddProfile
                                <span className="right badge badge-danger">New</span>
                            </p>
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="/adminSocial" className={`${activeTab === "adminSocial" ? "nav-link active" :"nav-link"}`}>
                            <i className="nav-icon fa fa fa-share-alt"></i>
                            <p style={mystyle} onClick={() => setActiveTab("adminSocial")}> 
                                Add Social
                                <span className="right badge badge-danger">New</span>
                            </p>
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="/adminSkill" className={`${activeTab === "adminSkill" ? "nav-link active" :"nav-link"}`}>
                            <i className="nav-icon fa fa-cogs"></i>
                            <p style={mystyle} onClick={() => setActiveTab("adminSkill")}> 
                                Add Skills
                                <span className="right badge badge-danger">New</span>
                            </p>
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="/adminVcCard" className={`${activeTab === "adminVcCard" ? "nav-link active" :"nav-link"}`}>
                            <i className="nav-icon fa fa-address-card"></i>
                            <p style={mystyle} onClick={() => setActiveTab("adminVcCard")}> 
                                create VC Card
                                <span className="right badge badge-danger">New</span>
                            </p>
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="/adminContact" className={`${activeTab === "adminContact" ? "nav-link active" :"nav-link"}`}>
                            <i className="nav-icon fa fa-address-book-o"></i>
                            <p style={mystyle} onClick={() => setActiveTab("adminContact")}> 
                                Contacts
                                <span className="right badge badge-danger">New</span>
                            </p>
                        </Link>
                    </li>


                </ul>
            </nav>

        </div>

    </aside>

);

}

export default SideBar;
