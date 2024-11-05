import React from "react";
import HeaderContent from "../../Header/HeaderContent";
import Footer from "../../Footer/Footer";
import Nav from "../../nav";

function Blog() {
  return (
    <div>
      <HeaderContent />
      <Nav />
      {/* Blog banner image */}
      <div className="banner-section">
        <h1 className="banner-title">Blog</h1>
      </div>
      <div className="container">
        <div className="title-blog fs-2 fw-bold m-3 text-success">Recent Blogs</div>
      </div>
      <div className="container">
        <div className="row">
          {/* Large blog posts */}

          <div className="col-md-8 mb-4">
            <div className="card">
              <img
                src="path_to_image"
                className="card-img-top"
                alt="Description of image"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Motorcycle Safety Tips: How to Keep Your Bike in Top Condition
                </h5>
                <p className="card-text">
                  Riding a motorcycle is thrilling, but it’s also a
                  responsibility. Keeping your bike in good shape isn’t just
                  about making it last longer; it’s about your safety.
                </p>
                <a href="#" className="btn btn-primary">
                  Get More
                </a>
              </div>
            </div>
          </div>
          {/* Sidebar blog posts */}
          <div className="col-md-4 ">
            <div className="mb-4">
              <div className="card">
                <img
                  src="path_to_image"
                  className="card-img-top"
                  alt="Description of image"
                />
                <div className="card-body">
                  <h5 className="card-title">Bike Maintenance Tips</h5>
                  <p className="card-text">
                    Keep your bike in top shape with these essential maintenance
                    tips.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Get More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-md-8 mb-4">
            <div className="card">
              <img
                src="path_to_image"
                className="card-img-top"
                alt="Description of image"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Motorcycle Safety Tips: How to Keep Your Bike in Top Condition
                </h5>
                <p className="card-text">
                  Riding a motorcycle is thrilling, but it’s also a
                  responsibility. Keeping your bike in good shape isn’t just
                  about making it last longer; it’s about your safety.
                </p>
                <a href="#" className="btn btn-primary">
                  Get More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="mb-4">
              <div className="card">
                <img
                  src="path_to_image"
                  className="card-img-top"
                  alt="Description of image"
                />
                <div className="card-body">
                  <h5 className="card-title">Essential Gear for Riders</h5>
                  <p className="card-text">
                    Discover the must-have gear every motorcycle rider should
                    own.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Get More
                  </a>
                </div>
              </div>
            </div>
          </div>
           {/* 3 */}
           <div className="col-md-8 mb-4">
            <div className="card">
              <img
                src="path_to_image"
                className="card-img-top"
                alt="Description of image"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Motorcycle Safety Tips: How to Keep Your Bike in Top Condition
                </h5>
                <p className="card-text">
                  Riding a motorcycle is thrilling, but it’s also a
                  responsibility. Keeping your bike in good shape isn’t just
                  about making it last longer; it’s about your safety.
                </p>
                <a href="#" className="btn btn-primary">
                  Get More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="mb-4">
              <div className="card">
                <img
                  src="path_to_image"
                  className="card-img-top"
                  alt="Description of image"
                />
                <div className="card-body">
                  <h5 className="card-title">Essential Gear for Riders</h5>
                  <p className="card-text">
                    Discover the must-have gear every motorcycle rider should
                    own.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Get More
                  </a>
                </div>
              </div>
            </div>
          </div>
           {/* 4*/}
           <div className="col-md-8 mb-4">
            <div className="card">
              <img
                src="path_to_image"
                className="card-img-top"
                alt="Description of image"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Motorcycle Safety Tips: How to Keep Your Bike in Top Condition
                </h5>
                <p className="card-text">
                  Riding a motorcycle is thrilling, but it’s also a
                  responsibility. Keeping your bike in good shape isn’t just
                  about making it last longer; it’s about your safety.
                </p>
                <a href="#" className="btn btn-primary">
                  Get More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="mb-4">
              <div className="card">
                <img
                  src="path_to_image"
                  className="card-img-top"
                  alt="Description of image"
                />
                <div className="card-body">
                  <h5 className="card-title">Essential Gear for Riders</h5>
                  <p className="card-text">
                    Discover the must-have gear every motorcycle rider should
                    own.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Get More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
