import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../../styles/desc.css"
import "../../styles/animate.min.css"
import "../../styles/swipebox.css"
import "../../styles/style.css"
import "../../styles/bootstrap.css"

export default function Description() {

    return <div>
        <div className="count_about">
            <div className="container">
                <div className="icon_banner">
                    <div className="col-md-3 agile_count_grid_desc">
                        <div className="agile_count_grid_left_desc">
                            <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
                        </div>
                        <h5>Luxury Designs</h5>
                        <div>
                            <p className="counter">2677</p>
                        </div>
                        <div className="clearfix"> </div>

                    </div>
                    <div className="col-md-3 agile_count_grid_desc">
                        <div className="agile_count_grid_left_desc">
                            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                        </div>
                        <h5>Happy Clients</h5>
                        <div>
                            <p className="counter">768</p>
                        </div>
                        <div className="clearfix"> </div>

                    </div>
                    <div className="col-md-3 agile_count_grid c3">
                        <div className="agile_count_grid_left_desc">
                            <span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
                        </div>
                        <h5>Followers</h5>
                        <div>
                            <p className="counter">1674</p>
                        </div>
                        <div className="clearfix"> </div>

                    </div>
                    <div className="col-md-3 agile_count_grid c4">
                        <div className="agile_count_grid_left_desc">
                            <span className="glyphicon glyphicon-leaf" aria-hidden="true"></span>
                        </div>
                        <h5>Our Sponsors</h5>
                        <div>
                            <p className="counter">806</p>
                        </div>
                        <div className="clearfix"> </div>

                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <div className="about-info">
                    <StaticImage src="../../static/ab.jpg" alt="about-image" />
                    <div className="about-info2">
                        <h4>About Our Interior</h4>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam". </p>

                        <a href="#" className="view2" data-toggle="modal" data-target="#myModal1">Read More</a>
                        <div className="modal fade" id="myModal1" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h5>Lorem ipsum dolor</h5>
                                        <span>Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste natus error sit voluptatem , eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.accusantium doloremque laudantium, totam rem aperiamconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaaccusantium doloremque laudantium, totam rem aperiamconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>

        </div>
    </div>
}


