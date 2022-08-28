import * as React from "react"
import "../../styles/animate.min.css"
import "../../styles/bootstrap.css"
import "../../styles/style.css"
import "../../styles/swipebox.css"
import TBFooter from "../components/tbFooter"
import TBHeader from "../components/tbHeader"

export default function Contact() {
    return <div>
        <TBHeader />

        <div className="contact w3-5">
            <div className="container">
                <h2 className="tit">Contact</h2>
                <div className="contact-inner">
                    <div className="col-md-4 contact-text">
                        <h3 className="tittle con">Company info</h3>
                        <div className="contact-text-inner">
                            <address>
                                795 Folsom Ave, Suite 600<br />
                                San Francisco, CA 94107<br />
                                <abbr title="Phone">P :</abbr> (123) 456-7890
                            </address>

                            <div className="lost-para">
                                <p>Fax : 123345456</p>
                                <p>Mobile : 0123345456</p>
                                <p>Email : <a href="mailto:info@example.com">mail@example.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 con-form agileits-5">
                        <form>
                            <p className="your-para">Your Name:</p>
                            <input type="text" placeholder="" />
                            <p className="your-para">Your Mail:</p>
                            <input type="text" placeholder="" />
                            <p className="your-para">Your Message:</p>
                            <textarea placeholder=""></textarea>

                            <div className="send">
                                <input type="submit" value="Send" />
                            </div>
                        </form>

                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="map wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1578265.0941403757!2d-98.9828708842255!3d39.41170802696131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sin!4v1407515822047"> </iframe>
                </div>
            </div>
        </div>

        <TBFooter />
    </div>
}