import * as React from "react"
import Description from "../components/description"
import "../../styles/animate.min.css"
import "../../styles/bootstrap.css"
import "../../styles/style.css"
import "../../styles/swipebox.css"
import TBFooter from "../components/tbFooter"
import TBHeader from "../components/tbHeader"

export default function TBAbout() {
    return <div>
        <TBHeader/>
        <div className="agileinfo">
            <div className="container">
                <h2 className="tit">About Us</h2>
                <Description />
            </div>
        </div>

        <TBFooter />
    </div>
}