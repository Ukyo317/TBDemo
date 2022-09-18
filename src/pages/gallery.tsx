import * as React from "react"
import TBFooter from "../components/tbFooter"
import TBHeader from "../components/tbHeader"
import { StaticImage } from "gatsby-plugin-image"

export default function Gallery() {
    return <div>
        <TBHeader />

        <div className="gallery w3-6">
            <div className="container">
                <h2 className="tit">Gallery</h2>
                <div className="gallery-grids">
                    <div className="col-md-6 baner-top wow fadeInRight animated" data-wow-delay=".5s">
                        <a href="../../static/g1.jpg" className="b-link-stripe b-animate-go  swipebox">
                            <div className="gal-spin-effect vertical ">
                                <StaticImage src="../../static/g1.jpg" alt=" " />
                                <div className="gal-text-box">
                                    <div className="info-gal-con">
                                        <h4>TAB</h4>
                                        <span className="separator"></span>
                                        <p>Sit accusamus, vel blanditiis iure minima ipsa molestias minus laborum velit, nulla nisi hic quasi enim.</p>
                                        <span className="separator"></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6 baner-top wow fadeInLeft animated" data-wow-delay=".5s">
                        <a href="../../static/g2.jpg" className="b-link-stripe b-animate-go  swipebox">
                            <div className="gal-spin-effect vertical ">
                                <StaticImage src="../../static/g2.jpg" alt=" " />
                                <div className="gal-text-box">
                                    <div className="info-gal-con">
                                        <h4>TAB</h4>
                                        <span className="separator"></span>
                                        <p>Sit accusamus, vel blanditiis iure minima ipsa molestias minus laborum velit, nulla nisi hic quasi enim.</p>
                                        <span className="separator"></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 baner-top ban-mar wow fadeInUp animated" data-wow-delay=".5s">
                        <a href="../../static/g3.jpg" className="b-link-stripe b-animate-go  swipebox">
                            <div className="gal-spin-effect vertical ">
                                <StaticImage src="../../static/g3.jpg" alt=" " />
                                <div className="gal-text-box">
                                    <div className="info-gal-con">
                                        <h4>TAB</h4>
                                        <span className="separator"></span>
                                        <p>Sit accusamus, vel blanditiis iure minima ipsa.</p>
                                        <span className="separator"></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 baner-top ban-mar wow fadeInDown animated" data-wow-delay=".5s">
                        <a href="../../static/g4.jpg" className="b-link-stripe b-animate-go  swipebox">
                            <div className="gal-spin-effect vertical ">
                                <StaticImage src="../../static/g4.jpg" alt=" " />
                                <div className="gal-text-box">
                                    <div className="info-gal-con">
                                        <h4>TAB</h4>
                                        <span className="separator"></span>
                                        <p>Sit accusamus, vel blanditiis iure minima ipsa.</p>
                                        <span className="separator"></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 baner-top ban-mar wow fadeInUp animated" data-wow-delay=".5s">
                        <a href="../../static/g5.jpg" className="b-link-stripe b-animate-go  swipebox">
                            <div className="gal-spin-effect vertical ">
                                <StaticImage src="../../static/g5.jpg" alt=" " />
                                <div className="gal-text-box">
                                    <div className="info-gal-con">
                                        <h4>TAB</h4>
                                        <span className="separator"></span>
                                        <p>Sit accusamus, vel blanditiis iure minima ipsa.</p>
                                        <span className="separator"></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 baner-top ban-mar wow fadeInUp animated" data-wow-delay=".5s">
                        <a href="../../static/g6.jpg" className="b-link-stripe b-animate-go  swipebox">
                            <div className="gal-spin-effect vertical ">
                                <StaticImage src="../../static/g6.jpg" alt=" " />
                                <div className="gal-text-box">
                                    <div className="info-gal-con">
                                        <h4>TAB</h4>
                                        <span className="separator"></span>
                                        <p>Sit accusamus, vel blanditiis iure minima ipsa.</p>
                                        <span className="separator"></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-6 baner-top wow fadeInRight animated" data-wow-delay=".5s">
                        <a href="../../static/g7.jpg" className="b-link-stripe b-animate-go  swipebox">
                            <div className="gal-spin-effect vertical ">
                                <StaticImage src="../../static/g7.jpg" alt=" " />
                                <div className="gal-text-box">
                                    <div className="info-gal-con">
                                        <h4>TAB</h4>
                                        <span className="separator"></span>
                                        <p>Sit accusamus, vel blanditiis iure minima ipsa molestias minus laborum velit, nulla nisi hic quasi enim.</p>
                                        <span className="separator"></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6 baner-top wow fadeInLeft animated" data-wow-delay=".5s">
                        <a href="../../static/g8.jpg" className="b-link-stripe b-animate-go  swipebox">
                            <div className="gal-spin-effect vertical ">
                                <StaticImage src="../../static/g8.jpg" alt=" " />
                                <div className="gal-text-box">
                                    <div className="info-gal-con">
                                        <h4>TAB</h4>
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

        <TBFooter />
    </div>
}