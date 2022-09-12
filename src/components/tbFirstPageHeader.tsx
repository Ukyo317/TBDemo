import * as React from "react"
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import "../../styles/animate.min.css"
import "../../styles/bootstrap.css"
import "../../styles/style.css"
import "../../styles/swipebox.css"

export default function TBFirstPageHeader() {

    const sepcialStyle = {
        Visibility: "visible"
        // animationdelay: "0.5s",
        // animationname: "fadeInRight"
    }

    return <div className="banner agileinfo-1">
        <div className="container">
            <div className="header">
                <nav className="navbar navbar-default">
                    <div
                        className="navbar-header wow fadeInLeft animated animated"
                        data-wow-delay=".5s" >
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <h1><a href="index.html">Cognate</a></h1>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1 wow fadeInRight animated animated" data-wow-delay=".5s">
                        {/* style={sepcialStyle} */}
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/" className="active">Homess</a></li>
                                <li><a href="about">About</a></li>
                                <li><a href="services">Services</a></li>
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

                <div className="banner-info">
                    <h2>Standard dummy text ever since the 1500s</h2>
                    <p> when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
            </div>
        </div>
    </div>
}