import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer6 from '../layout/footer6';
import ReactRevSlider7 from '../element/revslider7';
import ClientCarousel2 from '../element/client-carousel2';
import ReactPlayer from 'react-player/youtube';

class Index7 extends Component {
  componentDidMount() {
    window.dz_rev_slider_7();
    window.Agency.load();
  }

  render() {
    return (
      <>
        <Header1 />

        <div className="page-content">
          <ReactRevSlider7 />

          {/* <!-- About Us --> */}
          <div className="section-full bg-white p-b30">
            <div className="container">
              <div className="row about-us">
                <div className="icon-bx-wraper col-md-4 bg-white col-lg-4 p-tb30 p-l30 p-r50">
                  <div className="icon-md m-b20">
                    <span className="icon-cell">
                      <img src="images/icon/icon3.png" alt="" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="dez-tilte">
                      <span className="font-weight-300"></span>PARTNERS
                    </h3>
                    <p>
                      We are currently looking for Companies that are interested
                      in locking arms with us.
                    </p>
                  </div>
                </div>
                <div className="icon-bx-wraper bg-primary p-lr30 about-scale text-white col-md-4 col-lg-4 p-tb30">
                  <div className="icon-md m-b20">
                    <span className="icon-cell">
                      <img src="images/icon/icon1.png" alt="" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="dez-tilte">
                      <span className="font-weight-300"></span>
                      INVESTORS
                    </h3>
                    <p>
                      We are currently seeking investors in the Project who see
                      our vision and would like to support our mission.
                    </p>
                  </div>
                </div>
                <div className="icon-bx-wraper p-l50 p-r30 col-md-4 bg-white col-lg-4 p-tb30">
                  <div className="icon-md m-b20">
                    <span className="icon-cell">
                      <img src="images/icon/icon2.png" alt="" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="dez-tilte">
                      <span className="font-weight-300"></span>
                      CAREERS
                    </h3>
                    <p>
                      Now hiring. Positions Available - Marketing, Software
                      Engineers, Social Media Manager. Submit your Resume if
                      you're interested in joining our Team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- About Us END --> */}
          {/* <!-- Our Services --> */}
          <div className="section-full content-inner-2 bg-white">
            <div className="container">
              <div className="row video">
                <div className="col-lg-12 section-head text-center">
                  <h5 className="title-small">Welcome to </h5>
                  <h2 className="title-head m-b0">AUSTRALASIA.COM</h2>
                </div>
                <div className="video-container">
                  <ReactPlayer
                    className="react-player"
                    controls
                    url="https://www.https://www.youtube.com/watch?v=m-hc6Y0m_sA&t=2s.com/watch?v=ysz5S6PUM-U"
                    width="100%"
                    // height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Our Services END --> */}
          {/* <!-- Experts --> */}
          <div className="section-full content-inner-2 our-team-bx bg-primary">
            <div className="container">
              <div className="row">
                <div className="section-head text-white col-lg-12 text-center">
                  <h5 className="title-small">Our Team</h5>
                  <h2 className="title-head m-b0">top experts mates</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div
                    className="experts-box text-white p-a20 wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-wow-duration="1s"
                  >
                    <div className="clearfix experts-info-bx">
                      <div className="experts-img">
                        <img src="images/testimonials/pic1.jpg" alt="" />
                      </div>
                      <div className="experts-info">
                        <h5 className="experts-name">Johny Cornor</h5>
                        <h6 className="experts-service">Content expert</h6>
                      </div>
                    </div>
                    <p className="m-b10">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{' '}
                    </p>
                    <ul className="dez-social-icon">
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-facebook"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-google-plus"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-linkedin"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-twitter"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div
                    className="experts-box text-white p-a20 wow fadeInUp"
                    data-wow-delay="0.4s"
                    data-wow-duration="1s"
                  >
                    <div className="clearfix experts-info-bx">
                      <div className="experts-img">
                        <img src="images/testimonials/pic2.jpg" alt="" />
                      </div>
                      <div className="experts-info">
                        <h5 className="experts-name">Johny Cornor</h5>
                        <h6 className="experts-service">Content expert</h6>
                      </div>
                    </div>
                    <p className="m-b10">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{' '}
                    </p>
                    <ul className="dez-social-icon">
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-facebook"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-google-plus"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-linkedin"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-twitter"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div
                    className="experts-box text-white p-a20 wow fadeInUp"
                    data-wow-delay="0.6s"
                    data-wow-duration="1s"
                  >
                    <div className="clearfix experts-info-bx">
                      <div className="experts-img">
                        <img src="images/testimonials/pic3.jpg" alt="" />
                      </div>
                      <div className="experts-info">
                        <h5 className="experts-name">Johny Cornor</h5>
                        <h6 className="experts-service">Content expert</h6>
                      </div>
                    </div>
                    <p className="m-b10">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{' '}
                    </p>
                    <ul className="dez-social-icon">
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-facebook"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-google-plus"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-linkedin"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-twitter"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div
                    className="experts-box text-white p-a20 wow fadeInUp"
                    data-wow-delay="0.8s"
                    data-wow-duration="1s"
                  >
                    <div className="clearfix experts-info-bx">
                      <div className="experts-img">
                        <img src="images/testimonials/pic3.jpg" alt="" />
                      </div>
                      <div className="experts-info">
                        <h5 className="experts-name">Johny Cornor</h5>
                        <h6 className="experts-service">Content expert</h6>
                      </div>
                    </div>
                    <p className="m-b10">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{' '}
                    </p>
                    <ul className="dez-social-icon">
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-facebook"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-google-plus"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-linkedin"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-twitter"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div
                    className="experts-box text-white p-a20 wow fadeInUp"
                    data-wow-delay="1s"
                    data-wow-duration="1s"
                  >
                    <div className="clearfix experts-info-bx">
                      <div className="experts-img">
                        <img src="images/testimonials/pic1.jpg" alt="" />
                      </div>
                      <div className="experts-info">
                        <h5 className="experts-name">Johny Cornor</h5>
                        <h6 className="experts-service">Content expert</h6>
                      </div>
                    </div>
                    <p className="m-b10">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{' '}
                    </p>
                    <ul className="dez-social-icon">
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-facebook"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-google-plus"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-linkedin"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-twitter"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div
                    className="experts-box text-white p-a20 wow fadeInUp"
                    data-wow-delay="1.2s"
                    data-wow-duration="1s"
                  >
                    <div className="clearfix experts-info-bx">
                      <div className="experts-img">
                        <img src="images/testimonials/pic2.jpg" alt="" />
                      </div>
                      <div className="experts-info">
                        <h5 className="experts-name">Johny Cornor</h5>
                        <h6 className="experts-service">Content expert</h6>
                      </div>
                    </div>
                    <p className="m-b10">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{' '}
                    </p>
                    <ul className="dez-social-icon">
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-facebook"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-google-plus"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-linkedin"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="fa text-white fa-twitter"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Experts END -->	 */}

          {/* <!-- Ticket KIt Section --> */}
          <div
            className="section-full content-inner bg-primary"
            style={{
              backgroundImage: 'url(' + './images/background/bg22.png' + ')',
              backgroundPosition: 'center',
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-5 m-b30">
                  <div className="tickit-box bg-white text-center">
                    <span className="title">Complete Kit</span>
                    <h2 className="price text-primary">
                      <span>$</span>58
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor.
                    </p>
                    <a
                      href="javascript:void(0);"
                      className="site-button btn-block radius-xl"
                    >
                      Get started
                    </a>
                  </div>
                </div>
                <div className="col-lg-7 offset-lg-1 col-md-7 text-white m-b30">
                  <div className="tickit-info">
                    <h2 className="font-50">
                      Lorem Ipsum Dolor
                      <br /> Sit Amet
                    </h2>
                    <p>
                      “Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                    </p>
                    <div className="thumb-img m-b20">
                      <img src="images/testimonials/pic2.jpg" alt="" />
                    </div>
                    <span>-Name Here, Position at Company</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Ticket KIt Section End --> */}
          {/* <!-- Our Services --> */}
          <div className="section-full content-inner bg-white">
            <div className="container">
              <div className="section-head text-black text-center">
                <h2 className="title-head m-b0">Our Stories</h2>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div
                    className="text-center wow zoomIn icon-hover-bx"
                    data-wow-delay="0.2s"
                    data-wow-duration="1s"
                  >
                    <div className="icon-bx-xl text-primary bg-white radius border-2">
                      <a
                        href="javascript:void(0);"
                        className="icon-cell icon-md"
                      >
                        <i className="flaticon-shop"></i>
                      </a>
                    </div>
                    <div className="icon-content m-t30">
                      <h5 className="dez-tilte text-uppercase">Shop</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing sed
                        diam nibh euismod.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div
                    className="text-center wow zoomIn icon-hover-bx"
                    data-wow-delay="0.4s"
                    data-wow-duration="1s"
                  >
                    <div className="icon-bx-xl text-primary bg-white radius border-2">
                      <a
                        href="javascript:void(0);"
                        className="icon-cell icon-md"
                      >
                        <i className="flaticon-star"></i>
                      </a>
                    </div>
                    <div className="icon-content m-t30">
                      <h5 className="dez-tilte text-uppercase">Star</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing sed
                        diam nibh euismod.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div
                    className="text-center wow zoomIn icon-hover-bx"
                    data-wow-delay="0.6s"
                    data-wow-duration="1s"
                  >
                    <div className="icon-bx-xl text-primary bg-white radius border-2">
                      <a
                        href="javascript:void(0);"
                        className="icon-cell icon-md"
                      >
                        <i className="flaticon-play-button"></i>
                      </a>
                    </div>
                    <div className="icon-content m-t30">
                      <h5 className="dez-tilte text-uppercase">Play</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing sed
                        diam nibh euismod.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div
                    className="text-center wow zoomIn icon-hover-bx"
                    data-wow-delay="0.8s"
                    data-wow-duration="1s"
                  >
                    <div className="icon-bx-xl text-primary bg-white radius border-2">
                      <a
                        href="javascript:void(0);"
                        className="icon-cell icon-md"
                      >
                        <i className="flaticon-like"></i>
                      </a>
                    </div>
                    <div className="icon-content m-t30">
                      <h5 className="dez-tilte text-uppercase">Heart</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing sed
                        diam nibh euismod.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Contact Form --> */}
          <div
            className="section-full content-inner bg-primary contact-2"
            style={{
              backgroundImage: 'url(' + './images/background/bg23.png' + ')',
            }}
          >
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-lg-7">
                  <div
                    className="wow fadeInLeft"
                    data-wow-delay="0.4s"
                    data-wow-duration="1s"
                  >
                    <div className="support-form support-box-form bg-white">
                      <div className="support-title m-b30">
                        <h6 className="text-uppercase font-weight-500 m-b10">
                          Support
                        </h6>
                        <h2 className="font-40 font-weight-400 m-tb0">
                          Need Help?
                        </h2>
                      </div>
                      <div className="dezPlaceAni">
                        <div className="dzFormMsg"></div>
                        <form method="post" className="" action="">
                          <input type="hidden" value="Contact" name="dzToDo" />
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <div className="input-group">
                                  <label>Your Name</label>
                                  <input
                                    name="dzName"
                                    type="text"
                                    required=""
                                    className="form-control"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <div className="input-group">
                                  <label>Phone</label>
                                  <input
                                    name="dzOther[Phone]"
                                    type="text"
                                    required=""
                                    className="form-control"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="form-group">
                                <div className="input-group">
                                  <label>Your Email Address</label>
                                  <input
                                    name="dzEmail"
                                    type="email"
                                    className="form-control"
                                    required=""
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="form-group">
                                <div className="input-group">
                                  <label>Your Message...</label>
                                  <textarea
                                    name="dzMessage"
                                    rows="4"
                                    className="form-control"
                                    required=""
                                    placeholder=""
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <button
                                name="submit"
                                type="submit"
                                value="Submit"
                                className="site-button radius-xl button-md m-t10"
                              >
                                Submit Now
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div
                    className="contact-info-bx p-a30 text-white wow fadeInRight"
                    data-wow-delay="0.8s"
                    data-wow-duration="1s"
                  >
                    <div className="m-b10">
                      <span>Address</span>
                      <h3>
                        123 Street Name
                        <br />
                        City, State 00000
                      </h3>
                    </div>
                    <div className="m-b10">
                      <span>E-mail</span>
                      <h3>Info@example.com</h3>
                    </div>
                    <div className="m-b10">
                      <span>Telephone</span>
                      <h3>(+01) 123-4020</h3>
                    </div>
                    <div className="m-b10">
                      <span>Fins us on</span>
                      <ul className="list-inline socail-icon m-t15 m-a0">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="site-button white facebook"
                          >
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="site-button white google-plus"
                          >
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="site-button white linkedin"
                          >
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="site-button white instagram"
                          >
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="site-button white twitter"
                          >
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Our Services End --> */}
          <div className="section-full content-inner our-stories bg-white">
            <div className="container">
              <div className="section-head text-black text-center">
                <h2 className="title-head m-b0">Our Stories</h2>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="blog-post blog-lg wow fadeIn"
                    data-wow-delay="0.2s"
                    data-wow-duration="1s"
                  >
                    <div className="dez-post-media dez-img-effect radius-sm">
                      <a href="javascript:void(0);">
                        <img src="images/blog/default/thum5.jpg" alt="" />
                      </a>
                    </div>
                    <div className="dez-info">
                      <div className="dez-post-tags">
                        <span>MARKETING</span>
                      </div>
                      <div className="dez-post-title">
                        <h4 className="post-title">
                          <a href="javascript:void(0);">
                            In defense of being on the phone all the damn time
                            24 hours
                          </a>
                        </h4>
                      </div>
                      <div className="dez-post-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fusce eleifend euismod nibh ut sollicitudin.
                          Morbi eget ullamcorper quam. Pellentesque dui elit,
                          rhoncus gravida ex et, lobortis tempor tortor. Fusce
                          vel imperdiet nulla. Donec quis urna tellus. Sed
                          aliquet, turpis nec vulputate aliquam, ex mi sodales
                          sem mauris.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div
                        className="blog-post blog-lg wow fadeIn"
                        data-wow-delay="0.4s"
                        data-wow-duration="1s"
                      >
                        <div className="dez-post-media dez-img-effect radius-sm">
                          <a href="javascript:void(0);">
                            <img
                              src="images/blog/recent-blog/pic5.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="dez-info">
                          <div className="dez-post-tags">
                            <span>TRENDS</span>
                          </div>
                          <div className="dez-post-title">
                            <h4 className="post-title">
                              <a href="javascript:void(0);">
                                The biggest and most awesome...
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div
                        className="blog-post blog-lg wow fadeIn"
                        data-wow-delay="0.6s"
                        data-wow-duration="1s"
                      >
                        <div className="dez-post-media dez-img-effect radius-sm">
                          <a href="javascript:void(0);">
                            <img
                              src="images/blog/recent-blog/pic6.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="dez-info">
                          <div className="dez-post-tags">
                            <span>GADGETS</span>
                          </div>
                          <div className="dez-post-title">
                            <h4 className="post-title">
                              <a href="javascript:void(0);">
                                Tupac tribute murals and graffi...
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div
                        className="blog-post blog-lg wow fadeIn"
                        data-wow-delay="0.8s"
                        data-wow-duration="1s"
                      >
                        <div className="dez-post-media dez-img-effect radius-sm">
                          <a href="javascript:void(0);">
                            <img
                              src="images/blog/recent-blog/pic7.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="dez-info">
                          <div className="dez-post-tags">
                            <span>BUSINESS</span>
                          </div>
                          <div className="dez-post-title">
                            <h4 className="post-title">
                              <a href="javascript:void(0);">
                                How to travel the world and get big...
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div
                        className="blog-post blog-lg wow fadeIn"
                        data-wow-delay="1s"
                        data-wow-duration="1s"
                      >
                        <div className="dez-post-media dez-img-effect radius-sm">
                          <a href="javascript:void(0);">
                            <img
                              src="images/blog/recent-blog/pic8.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="dez-info">
                          <div className="dez-post-tags">
                            <span>CATEGORY</span>
                          </div>
                          <div className="dez-post-title">
                            <h4 className="post-title">
                              <a href="javascript:void(0);">
                                What happens when algorithms...
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Our Stories Blog End --> */}
          {/* <!-- Contact Form END --> */}
          <div className="section-full bg-primary-dark p-tb15">
            <div className="container">
              <ClientCarousel2 />
            </div>
          </div>
          {/* <!-- Partners Logo --> */}
        </div>

        <Footer6 />
      </>
    );
  }
}
export default Index7;
