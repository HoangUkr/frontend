import React from "react";
import img1 from "../assets/images/menu-1.jpg";
import img2 from "../assets/images/menu-2.jpg";
import img3 from "../assets/images/menu-3.jpg";

const Menu = () => {
  return (
    <div>
      <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
        <div
          className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
          style={{ minHeight: 400 }}
        >
          <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">
            Menu
          </h1>
          <div className="d-inline-flex mb-lg-5">
            <p className="m-0 text-white">
              <a className="text-white" href="">
                Home
              </a>
            </p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">Menu</p>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="section-title">
            <h4
              className="text-primary text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Menu & Pricing
            </h4>
            <h1 className="display-4">Competitive Pricing</h1>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mb-5">Hot Coffee</h1>
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <img
                    className="w-100 rounded-circle mb-3 mb-sm-0"
                    src={img1}
                    alt=""
                  />
                  <span className="menu-price">$5</span>
                  <div className="menu-price"> 
                    <span className="price-font">$5</span>
                  </div>
                  {/* <button className="item-add-button" title="">
                    <i class="fa fa-plus-circle" style={{ fontSize: '16px' }}></i>
                  </button> */}
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Black Coffee</h4>
                  <p className="m-0">
                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea
                    et et lorem dolor
                  </p>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <img
                    className="w-100 rounded-circle mb-3 mb-sm-0"
                    src={img2}
                    alt=""
                  />
                  <h5 className="menu-price">$7</h5>
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Chocolete Coffee</h4>
                  <p className="m-0">
                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea
                    et et lorem dolor
                  </p>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <img
                    className="w-100 rounded-circle mb-3 mb-sm-0"
                    src={img3}
                    alt=""
                  />
                  <h5 className="menu-price">$9</h5>
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Coffee With Milk</h4>
                  <p className="m-0">
                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea
                    et et lorem dolor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="mb-5">Cold Coffee</h1>
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <img
                    className="w-100 rounded-circle mb-3 mb-sm-0"
                    src={img1}
                    alt=""
                  />
                  <h5 className="menu-price">$5</h5>
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Black Coffee</h4>
                  <p className="m-0">
                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea
                    et et lorem dolor
                  </p>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <img
                    className="w-100 rounded-circle mb-3 mb-sm-0"
                    src={img2}
                    alt=""
                  />
                  <h5 className="menu-price">$7</h5>
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Chocolete Coffee</h4>
                  <p className="m-0">
                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea
                    et et lorem dolor
                  </p>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <img
                    className="w-100 rounded-circle mb-3 mb-sm-0"
                    src={img3}
                    alt=""
                  />
                  <h5 className="menu-price">$9</h5>
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Coffee With Milk</h4>
                  <p className="m-0">
                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea
                    et et lorem dolor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
