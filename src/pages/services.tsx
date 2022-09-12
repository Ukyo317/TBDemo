import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
// import TBFooter from "../components/tbFooter"
// import TBHeader from "../components/tbHeader"
import "../../styles/animate.min.css"
import "../../styles/bootstrap.css"
import "../../styles/style.css"
import "../../styles/swipebox.css"
import TBFooter from "../components/tbFooter"
import TBHeader from "../components/tbHeader"

export default function TBService() {
    return <div>
        <TBHeader/>

        <div className="agileinfo">
            <div className="container">
                <h2 className="tit">Services</h2>
                <div className="services-grids">
                    <div className="col-md-3 ser-grid wow fadeInLeft animated animated" data-wow-delay=".5s">
                        <h4>Blanditiis prae</h4>
                        <ul>
                            <li>Accusantium doloremque</li>
                            <li>Molestiae consequatur</li>
                            <li>Nostrum exercitationem</li>
                            <li>voluptatibus maioresas</li>
                            <li>Temporibus autem quibu</li>
                        </ul>
                    </div>
                    <div className="col-md-3 ser-grid wow fadeInUpBig animated animated" data-wow-delay=".5s">
                        <h4>Accusant dolor</h4>
                        <ul>
                            <li>Molestiae consequatur</li>
                            <li>Accusantium doloremque</li>
                            <li>Nostrum exercitationem</li>
                            <li>voluptatibus maioresas</li>
                            <li>Temporibus autem quibu</li>
                        </ul>
                    </div>
                    <div className="col-md-3 ser-grid wow fadeInDownBig animated animated" data-wow-delay=".5s">
                        <h4>Molesti conseq</h4>
                        <ul>
                            <li>Nostrum exercitationem</li>
                            <li>Molestiae consequatur</li>
                            <li>Accusantium doloremque</li>
                            <li>voluptatibus maioresas</li>
                            <li>Temporibus autem quibu</li>
                        </ul>
                    </div>
                    <div className="col-md-3 ser-grid wow fadeInRight animated animated" data-wow-delay=".5s">
                        <h4>Accusant dolor</h4>
                        <ul>
                            <li>Accusantium doloremque</li>
                            <li>Molestiae consequatur</li>
                            <li>Nostrum exercitationem</li>
                            <li>voluptatibus maioresas</li>
                            <li>Temporibus autem quibu</li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>

        <div className="overview w3-2">
			<div className="container">
				<h3 className="tit">Services overview</h3>
				<div className="overview-grids">
					<div className="col-md-4 list-grid">
						<div className="list-img">
							<StaticImage src="../../static/g1.jpg" className="img-responsive" alt=" " />
							<div className="textbox"></div>
						</div>						
						<h4>Doloremque</h4>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae </p>
					</div>
					<div className="col-md-4 list-grid">
						<div className="list-img">
							<StaticImage src="../../static/g2.jpg" className="img-responsive" alt=" " />
							<div className="textbox"></div>
						</div>	
						<h4>Exercitationem</h4>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae </p>
					</div>
					<div className="col-md-4 list-grid">
						<div className="list-img">
							<StaticImage src="../../static/g7.jpg" className="img-responsive" alt=" " />
							<div className="textbox"></div>
						</div>	
						<h4>Voluptatibus</h4>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae </p>
					</div>
					
					<div className="clearfix"></div>
				</div>
			</div>
		</div>

        <div className="main-services agileits-2">
			<div className="container">
				<h3 className="tit">Main services</h3>
				<div className="services-grids">
						<div className="col-md-4 services-grid">
							<div className="services-left">
								<p>01</p>
							</div>
							<div className="services-right">
								<h4>Accusant dolor</h4>
								<p>Sed ut perspiciatis unde omnis iste natus error sit 
								voluptatem accusantium doloremque laudantium, totam rem 
								aperiam, eaque ipsa quae ab illo </p>
							</div>
							<div className="clearfix"></div>
						</div>
						<div className="col-md-4 services-grid">
							<div className="services-left">
								<p>02</p>
							</div>
							<div className="services-right">
								<h4>Doluptatibus</h4>
								<p>Sed ut perspiciatis unde omnis iste natus error sit 
								voluptatem accusantium doloremque laudantium, totam rem 
								aperiam, eaque ipsa quae ab illo </p>
							</div>
							<div className="clearfix"></div>
						</div>
						<div className="col-md-4 services-grid">
							<div className="services-left">
								<p>03</p>
							</div>
							<div className="services-right">
								<h4>Accusant dolor</h4>
								<p>Sed ut perspiciatis unde omnis iste natus error sit 
								voluptatem accusantium doloremque laudantium, totam rem 
								aperiam, eaque ipsa quae ab illo </p>
							</div>
							<div className="clearfix"></div>
						</div>
						<div className="col-md-4 services-grid">
							<div className="services-left">
								<p>04</p>
							</div>
							<div className="services-right">
								<h4>Doluptatibus</h4>
								<p>Sed ut perspiciatis unde omnis iste natus error sit 
								voluptatem accusantium doloremque laudantium, totam rem 
								aperiam, eaque ipsa quae ab illo </p>
							</div>
							<div className="clearfix"></div>
						</div>
						<div className="col-md-4 services-grid">
							<div className="services-left">
								<p>05</p>
							</div>
							<div className="services-right">
								<h4>Accusant dolor</h4>
								<p>Sed ut perspiciatis unde omnis iste natus error sit 
								voluptatem accusantium doloremque laudantium, totam rem 
								aperiam, eaque ipsa quae ab illo</p>
							</div>
							<div className="clearfix"></div>
						</div>
						<div className="col-md-4 services-grid">
							<div className="services-left">
								<p>06</p>
							</div>
							<div className="services-right">
								<h4>Voluptatibus</h4>
								<p>Sed ut perspiciatis unde omnis iste natus error sit 
								voluptatem accusantium doloremque laudantium, totam rem 
								aperiam, eaque ipsa quae ab illo </p>
							</div>
							<div className="clearfix"></div>
						</div>
						<div className="clearfix"></div>
				</div>
				
			</div>
		</div>

        <TBFooter />
    </div>
}