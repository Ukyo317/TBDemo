import * as React from "react";
import { useState } from "react";
import { HashRouter, Link, Route, Router } from "react-router-dom";
import "../../styles/animate.min.css";
import "../../styles/bootstrap.css";
import "../../styles/style.css";
import "../../styles/swipebox.css";
import { ActiveTag } from "../constants/Constants";
import Home from "../pages";
import TBAbout from "../pages/about";

export default function TBHeader() {

    const [tag, setTag] = useState(ActiveTag.About.toString());

    const handleTagSelection = (event: any) => {
        const result = event.currentTarget.getAttribute("data-name") == ActiveTag.About.toString();
        const tagValue = ActiveTag[event.currentTarget.getAttribute("data-name")];
        setTag(ActiveTag[event.currentTarget.getAttribute("data-name")]);
    }

    return <div>
        <div className="banner-1 agileinfo-2">
            <div className="container">
                
                <div className="header">
                    <nav className="navbar navbar-default">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <h1><a href="index.html">Cognate</a></h1>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/">Home</a></li>
                                <li data-name={ActiveTag.About} onClick={(event) => handleTagSelection(event)}><a href="about"
                                    className={tag == ActiveTag.About.toString() ? "" : "active"}>About</a></li>
                                <li><a href="services" 
                                    className={tag == ActiveTag.Services.toString() ? "" : "active"}>Services</a></li>
                                <li><a href="gallery">Gallery</a></li>
                                <li><a href="contact">Contact</a></li>
                            </ul>
                            <div className="clearfix"> </div>
                        </div>
                    </nav>

                    <div className="cd-main-header">
                        <ul className="cd-header-buttons">
                            <li><a className="cd-search-trigger" href="#cd-search"> <span></span></a></li>
                        </ul>
                    </div>
                    <div id="cd-search" className="cd-search">
                        <form action="#" method="post">
                            <input name="Search" type="search" placeholder="Search..." />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}