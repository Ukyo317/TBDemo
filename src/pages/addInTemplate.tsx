import * as React from "react"
import { BrowserRouter as Router, NavLink, Switch, Route } from "react-router-dom"
import Home from "."
import "../../styles/animate.min.css"
import "../../styles/bootstrap.css"
import "../../styles/style.css"
import "../../styles/swipebox.css"
import { ActiveTag } from "../constants/constants"
import TBAbout from "./about"
import TBContact from "./contact"
import Gallery from "./gallery"
import TBService from "./services"

export default function AddInTemplate() {
    const [tag, setTag] = React.useState(ActiveTag.About.toString());

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
                            <Router>
                                <ul className="nav navbar-nav navbar-right">
                                    <li><NavLink to="/">Home</NavLink></li>
                                    {/* <li data-name={ActiveTag.About} onClick={(event) => handleTagSelection(event)}><a href="about"
                                    className={tag == ActiveTag.About.toString() ? "" : "active"}>About</a></li>
                                <li><a href="services" 
                                    className={tag == ActiveTag.Services.toString() ? "" : "active"}>Services</a></li> */}
                                    <li><NavLink to="/about">About</NavLink></li>
                                    <li><NavLink to="/services">Services</NavLink></li>
                                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                                    <li><NavLink to="/contact">Contact</NavLink></li>
                                </ul>

                                <Switch>
                                    <Route path="/" exact component={Home} />
                                    <Route path="/about" component={TBAbout} />
                                    <Route path="/services" exact component={TBService} />
                                    <Route path="/gallery" component={Gallery} />
                                    <Route path="/contact" exact component={TBContact} />
                                </Switch>
                            </Router>


                            {/* <ul className="nav navbar-nav navbar-right">
                                <li><a href="/">Home</a></li>
                                <li data-name={ActiveTag.About} onClick={(event) => handleTagSelection(event)}><a href="about"
                                    className={tag == ActiveTag.About.toString() ? "" : "active"}>About</a></li>
                                <li><a href="services"
                                    className={tag == ActiveTag.Services.toString() ? "" : "active"}>Services</a></li>
                                <li><a href="gallery">Gallery</a></li>
                                <li><a href="contact">Contact</a></li>
                            </ul> */}
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