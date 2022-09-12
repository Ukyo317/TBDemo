import * as React from "react"
import "../../styles/animate.min.css"
import "../../styles/bootstrap.css"
import "../../styles/style.css"
import "../../styles/swipebox.css"
import TBFooter from "../components/tbFooter"
import TBHeader from "../components/tbHeader"

export default function TBAbout() {
    return <div>
        <TBHeader/>
        <div className="about w3-3">
            <div className="container">
                <h2 className="tit">About Us</h2>

                <div className="col-md-12 about_banner"><img src="../../static/2.jpg" className="img-responsive" alt="" /></div>
                <div className="box_20">
                    <div className="col-sm-6 box_3">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue dui</p>
                    </div>
                    <div className="col-sm-6 box_3">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue dui</p>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
        
        <TBFooter />
    </div>
}