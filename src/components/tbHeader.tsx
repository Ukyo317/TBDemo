import * as React from "react";
import { useState } from "react";
import { Link } from 'gatsby';
import "../../styles/animate.min.css";
import "../../styles/bootstrap.css";
import "../../styles/style.css";
import "../../styles/swipebox.css";
import { ActiveTag } from "../constants/constants";
import Home from "../pages";
import TBAbout from "../pages/about";
import Gallery from "../pages/gallery";

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
                            <h1><a href="/">Cognate</a></h1>
                        </div>
                        <div>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/gallery">
                                        Gallery
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        Contact
                                    </Link>
                                </li>
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