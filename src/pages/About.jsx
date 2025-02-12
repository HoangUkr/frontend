import React from "react";
import aboutImg from "../assets/images/about.png";

const About = () => {
  return (
    <div>
      <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
        <div
          className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
          style={{ minHeight: 400 }}
        >
          <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">
            About Us
          </h1>
          <div className="d-inline-flex mb-lg-5">
            <p className="m-0 text-white">
              <a className="text-white" href="/">
                Home
              </a>
            </p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">About Us</p>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="section-title">
            <h4
              className="text-primary text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              About Us
            </h4>
            <h1 className="display-4">Serving Since 1950</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 py-0 py-lg-5">
              <h1 className="mb-3">Our Story</h1>
              <h5 className="mb-3">
                Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet
                sed vero dolor sea
              </h5>
              <p>
                Takimata sed vero vero no sit sed, justo clita duo no duo amet
                et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet
                amet no. Est nonumy sed labore eirmod sit magna. Erat at est
                justo sit ut. Labor diam sed ipsum et eirmod
              </p>
              <a
                href=""
                className="btn btn-secondary font-weight-bold py-2 px-4 mt-2"
              >
                Learn More
              </a>
            </div>
            <div className="col-lg-4 py-5 py-lg-0" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src={aboutImg}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-4 py-0 py-lg-5">
              <h1 className="mb-3">Our Vision</h1>
              <p>
                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
                Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                dolor
              </p>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum
                dolor sit amet
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum
                dolor sit amet
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum
                dolor sit amet
              </h5>
              <a
                href=""
                className="btn btn-primary font-weight-bold py-2 px-4 mt-2"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
