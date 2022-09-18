import * as React from "react";
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import "../../styles/animate.min.css";
import "../../styles/swipebox.css";
import "../../styles/bootstrap.css";
import "../../styles/style.css";

export default function TBHeader() {

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
                            <StaticImage
                                style={{
                                    maxWidth: "300px"
                                }}
                                src="../../static/TAB-white.png" alt="about-image" />
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
                </div>
            </div>
        </div>
    </div>
}