import * as React from "react"
import "../../styles/animate.min.css"
import "../../styles/bootstrap.css"
import "../../styles/style.css"
import "../../styles/swipebox.css"

export default function TBFooter() {
    
    return 	<div className="w3ls">
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
}