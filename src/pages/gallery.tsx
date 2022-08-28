import * as React from "react"
import "../../styles/animate.min.css"
import "../../styles/bootstrap.css"
import "../../styles/style.css"
import "../../styles/swipebox.css"
import TBFooter from "../components/tbFooter"
import TBHeader from "../components/tbHeader"

export default function Gallery() {
    return <div>
        <TBHeader />

        <div className="gallery w3-6">
            <div className="container">
                <h2 className="tit">Gallery</h2>
                <div className="gallery-grids">
                    <div className="col-md-6 baner-top wow fadeInRight animated" data-wow-delay=".5s">
                        <a href="images/g1.jpg" className="b-link-stripe b-animate-go  swipebox">
                            <div className="gal-spin-effect vertical ">
                                <img src="images/g1.jpg" alt=" " />
                                <div className="gal-text-box">
                                    <div className="info-gal-con">
                                        <h4>Cognate</h4>
                                        <span className="separator"></span>
                                        <p>Sit accusamus, vel blanditiis iure minima ipsa molestias minus laborum velit, nulla nisi hic quasi enim.</p>
                                        <span className="separator"></span>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6 baner-top wow fadeInLeft animated" data-wow-delay=".5s">
                        <a href="images/g2.jpg" className="b-link-stripe b-animate-go  swipebox">
                            <div className="gal-spin-effect vertical ">
                                <img src="images/g2.jpg" alt=" " />
                                <div className="gal-text-box">
                                    <div className="info-gal-con">
                                        <h4>Cognate</h4>
                                        <span className="separator"></span>
                                        <p>Sit accusamus, vel blanditiis iure minima ipsa molestias minus laborum velit, nulla nisi hic quasi enim.</p>
                                        <span className="separator"></span>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 baner-top ban-mar wow fadeInUp animated" data-wow-delay=".5s">
                        <a href="images/g3.jpg" className="b-link-stripe b-animate-go  swipebox">
                            <div className="gal-spin-effect vertical ">
                                <img src="images/g3.jpg" alt=" " />
                                <div className="gal-text-box">
                                    <div className="info-gal-con">
                                        <h4>Cognate</h4>
                                        <span className="separator"></span>
                                        <p>Sit accusamus, vel blanditiis iure minima ipsa.</p>
                                        <span className="separator"></span>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 baner-top ban-mar wow fadeInDown animated" data-wow-delay=".5s">
                        <a href="images/g4.jpg" className="b-link-stripe b-animate-go  swipebox">
                            <div className="gal-spin-effect vertical ">
                                <img src="images/g4.jpg" alt=" " />
                                <div className="gal-text-box">
                                    <div className="info-gal-con">
                                        <h4>Cognate</h4>
                                        <span className="separator"></span>
                                        <p>Sit accusamus, vel blanditiis iure minima ipsa.</p>
                                        <span className="separator"></span>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 baner-top ban-mar wow fadeInUp animated" data-wow-delay=".5s">
                        <a href="images/g5.jpg" className="b-link-stripe b-animate-go  swipebox">
                            <div className="gal-spin-effect vertical ">
                                <img src="images/g5.jpg" alt=" " />
                                <div className="gal-text-box">
                                    <div className="info-gal-con">
                                        <h4>Cognate</h4>
                                        <span className="separator"></span>
                                        <p>Sit accusamus, vel blanditiis iure minima ipsa.</p>
                                        <span className="separator"></span>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 baner-top ban-mar wow fadeInUp animated" data-wow-delay=".5s">
                        <a href="images/g6.jpg" className="b-link-stripe b-animate-go  swipebox">
                            <div className="gal-spin-effect vertical ">
                                <img src="images/g6.jpg" alt=" " />
                                <div className="gal-text-box">
                                    <div className="info-gal-con">
                                        <h4>Cognate</h4>
                                        <span className="separator"></span>
                                        <p>Sit accusamus, vel blanditiis iure minima ipsa.</p>
                                        <span className="separator"></span>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-6 baner-top wow fadeInRight animated" data-wow-delay=".5s">
                        <a href="images/g7.jpg" className="b-link-stripe b-animate-go  swipebox">
                            <div className="gal-spin-effect vertical ">
                                <img src="images/g7.jpg" alt=" " />
                                <div className="gal-text-box">
                                    <div className="info-gal-con">
                                        <h4>Cognate</h4>
                                        <span className="separator"></span>
                                        <p>Sit accusamus, vel blanditiis iure minima ipsa molestias minus laborum velit, nulla nisi hic quasi enim.</p>
                                        <span className="separator"></span>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6 baner-top wow fadeInLeft animated" data-wow-delay=".5s">
                        <a href="images/g8.jpg" className="b-link-stripe b-animate-go  swipebox">
                            <div className="gal-spin-effect vertical ">
                                <img src="../../images/1.jpg" alt=" " />
                                <div className="gal-text-box">
                                    <div className="info-gal-con">
                                        <h4>Cognate</h4>
                                        <span className="separator"></span>
                                        <p>Sit accusamus, vel blanditiis iure minima ipsa molestias minus laborum velit, nulla nisi hic quasi enim.</p>
                                        <span className="separator"></span>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
        <div className="w3ls">
            <div className="container">
                <div className="col-md-4 w3ls-right">
                    <h3>Contact Us</h3>
                    <p className="para">Corrupti quos dolores et quas molestias excepturi .</p>
                    <ul className="con-icons">
                        <li><span className="glyphicon glyphicon-phone" aria-hidden="true"></span>+123 456 7890</li>
                        <li><a href="mailto:info@example.com"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>info@example.com</a></li>
                        <li><span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>London, Jasmin Road</li>

                    </ul>


                </div>
                <div className="col-md-4 w3ls-left">
                    <h3>Information</h3>

                    <p className="para">At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti at
                        que corrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident, similique sunt.</p>

                </div>
                <div className="col-md-4 w3ls-right">
                    <h3>Follow Us</h3>

                    <p className="para">voluptatum deleniti at
                        que corrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident, similique sunt.</p>
                    <ul className="fb_icons">
                        <li className="hvr-rectangle-out"><a className="fb" href="#"></a></li>
                        <li className="hvr-rectangle-out"><a className="twit" href="#"></a></li>
                        <li className="hvr-rectangle-out"><a className="goog" href="#"></a></li>
                        <li className="hvr-rectangle-out"><a className="pin" href="#"></a></li>
                        <li className="hvr-rectangle-out"><a className="drib" href="#"></a></li>
                    </ul>
                </div>

                <div className="clearfix"></div>
                <p className="copy-right">Copyright &copy; 2016.Company name All rights reserved.<a target="_blank" href="http://guantaow.taobao.com/">厚朴网络淘宝店</a><a target="_blank" href="http://www.moobnn.com">网页模板</a></p>

            </div>
        </div>

        <TBFooter />
    </div>
}