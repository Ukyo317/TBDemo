import type { HeadFC } from "gatsby"
import React from "react"
import TBFirstPageHeader from "../components/tbFirstPageHeader"
import TBFooter from "../components/tbFooter"

export const Head: HeadFC = () => <title>Home Page</title>

export default function Home() {
  return <div>
    <TBFirstPageHeader />

    <div className="agile">
      <div className="container">
        <div className="col-md-6 agile-left wow fadeInLeft animated animated" data-wow-delay=".5s">
          <h3>Our Mission</h3>
          <div className="grid_3 grid_5">
            <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
              <ul id="myTab" className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active"><a href="#expeditions" id="expeditions-tab" role="tab" data-toggle="tab" aria-controls="expeditions" aria-expanded="true">Printing</a></li>
                <li role="presentation"><a href="#tours" role="tab" id="tours-tab" data-toggle="tab" aria-controls="tours">Simply</a></li>
                <li role="presentation"><a href="#tree" role="tab" id="tree-tab" data-toggle="tab" aria-controls="tree">Typesetting</a></li>
              </ul>
              <div id="myTabContent" className="tab-content">
                <div role="tabpanel" className="tab-pane fade in active" id="expeditions" aria-labelledby="expeditions-tab">
                  <div className="tab-info">
                    <p> This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact form, accompanied by English versions from the 1914 translation by H. Rackham. The generated Lorem Ipsum is therefore always free from repetition.</p>

                  </div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="tours" aria-labelledby="tours-tab">
                  <div className="tab-info">
                    <p> Very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact form, accompanied by English versions from the 1914 translation by H. Rackham. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

                  </div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="tree" aria-labelledby="tree-tab">
                  <div className="tab-info">
                    <p>Treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact form, accompanied by English versions from the 1914 translation by H. Rackham. The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 agile-right wow fadeInRight animated animated" data-wow-delay=".5s">
          <ul>
            <li>
              <div className="list-img">
                <img src="images/1.jpg" className="img-responsive" alt=" " />
                <div className="textbox"></div>
              </div>
            </li>
            <li>
              <div className="list-img">
                <img src="images/2.jpg" className="img-responsive" alt=" " />
                <div className="textbox"></div>
              </div>
            </li>
            <li>
              <div className="list-img">
                <img src="images/3.jpg" className="img-responsive" alt=" " />
                <div className="textbox"></div>
              </div>
            </li>
            <li>
              <div className="list-img">
                <img src="images/4.jpg" className="img-responsive" alt=" " />
                <div className="textbox"></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>

    <div className="count w3-1">
      <div className="container">
        <div className="col-md-4 agile_count_grid wow fadeInLeft animated animated" data-wow-delay=".5s">
          <div className="agile_count_grid_left">
            <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
          </div>
          <div className="agile_count_grid_right">
            <p className="counter">324</p>
          </div>
          <div className="clearfix"> </div>
          <h3>Our Designers</h3>
          <ul className="award">
            <li><a href="#">Sed ut perspiciatis unde omnis iste </a></li>
            <li><a href="#">veritatis quasi architecto beatae vitae</a></li>
            <li><a href="#">Nemo enim ipsam voluptatem quia voluptas</a></li>
            <li><a href="#">Neque porro quisquam est, qui dolorem</a></li>
            <li><a href="#">Ut enim ad minima veniam, quis nostrum</a></li>
            <li><a href="#">Duis aute irure dolor reprehenderit velit</a></li>
          </ul>
        </div>
        <div className="col-md-4 agile_count_grid wow fadeInUp animated animated" data-wow-delay=".5s">
          <div className="agile_count_grid_left">
            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
          </div>
          <div className="agile_count_grid_right">
            <p className="counter">543</p>
          </div>
          <div className="clearfix"> </div>
          <h3>Target Audience</h3>
          <ul className="award">
            <li><a href="#">Sed ut perspiciatis unde omnis iste </a></li>
            <li><a href="#">veritatis quasi architecto beatae vitae</a></li>
            <li><a href="#">Nemo enim ipsam voluptatem quia voluptas</a></li>
            <li><a href="#">Neque porro quisquam est, qui dolorem</a></li>
            <li><a href="#">Ut enim ad minima veniam, quis nostrum</a></li>
            <li><a href="#">Duis aute irure dolor reprehenderit velit</a></li>
          </ul>
        </div>
        <div className="col-md-4 agile_count_grid wow fadeInRight animated animated" data-wow-delay=".5s">
          <div className="agile_count_grid_left">
            <span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
          </div>
          <div className="agile_count_grid_right">
            <p className="counter">434</p>
          </div>
          <div className="clearfix"> </div>
          <h3>Notable Awards</h3>
          <ul className="award">
            <li><a href="#">Sed ut perspiciatis unde omnis iste </a></li>
            <li><a href="#">veritatis quasi architecto beatae vitae</a></li>
            <li><a href="#">Nemo enim ipsam voluptatem quia voluptas</a></li>
            <li><a href="#">Neque porro quisquam est, qui dolorem</a></li>
            <li><a href="#">Ut enim ad minima veniam, quis nostrum</a></li>
            <li><a href="#">Duis aute irure dolor reprehenderit velit</a></li>
          </ul>
        </div>

      </div>
    </div>

    <TBFooter />
  </div>
}