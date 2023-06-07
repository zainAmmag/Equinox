
import PageBanner from "../src/layout/PageBanner";
import Head from "next/head";

import Link from "next/link";

import { Accordion } from "react-bootstrap";
import dynamic from "next/dynamic";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});
import ClientsFeedback from "../src/components/home1/ClientsFeedback";
import Hero1 from "../src/components/home1/Hero1";
import RecentProjects from "../src/components/home1/RecentProjects";
import Layout from "../src/layout/Layout";
import SideBar from "../src/layout/SideBar";
import emailjs from 'emailjs-com';
import {PulseLoader} from "react-spinners";
import { useState } from "react";
const Contact = () => {




  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [Phonenumber, setPhonenumber] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [Loader, setLoader] = useState(false);
  const [MessageSend, setMessageSend] = useState(null);

  const handleSubmit = async (e) => {
    if(Loader) return
    e.preventDefault();
    setLoader(true)
    const templateParams = {
        from_name: name,
        to_name: email,
        subject:website,
        message: message,
      };
    emailjs.send(
        'service_y24sp7p',
        'template_x17ayap',
        templateParams,
        'EMl2WVjXLjZC2AOMI'
      ).then((result) => {
        setLoader(false)
        setMessageSend("Message Send successfully")
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });;
 
  };
  return (
<>


<Layout className="home-one" footer={1} noHeader>
      <Head>
        {" "}
        <link
          rel="shortcut icon"
          href="assets/images/favicon.png"
          type="image/x-icon"
        />
      </Head>
      <header style={{backgroundColor: "black"}} className="main-header header-two">
        {/*Header-Upper*/}
        <div className="header-upper">
          <div className="container clearfix">
            <div className="header-inner rel d-flex align-items-center " style={{ height: "70px", justifyContent: "space-between" }}>
              <div className="logo-outer">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img
                        src="assets/images/logos/logo-two.png"
                        alt="Logo"
                        title="Team for you"
                        style={{ width: "205px", height: "120px" }}
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="nav-outer clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <Accordion>
                    <div className="navbar-header">
                      <div className="mobile-logo my-15">
                        <Link href="/">
                          <a>
                            <img
                              src="assets/images/logos/logo-two.png"
                              alt="Logo"
                              title="Logo"
                            />
                          </a>
                        </Link>
                      </div>
                      {/* Toggle Button */}
                      <Accordion.Toggle
                        eventKey="nav"
                        as="button"
                        className="navbar-toggle"
                      >
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse
                      eventKey="nav"
                      className="navbar-collapse clearfix"
                    >
                      <ul className="navigation onepage clearfix">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/#about">about</a>
                        </li>
                        <li>
                          <a href="/#featured">featured</a>
                        </li>
                        <li>
                          <a href="/#project">project</a>
                        </li>
                        {/* <li>
                          <a href="#pricing">pricing</a>
                        </li> */}
                        <li>
                          <a href="/#contact">contact us </a>
                        </li>
                        {/* <li>
                          <a href="#news">news</a>
                        </li> */}
                        <li>
                          {/* <div className="menu-btns" style={{height:"40px"}}> */}
                          <Link href="/contactus" style={{ height: "40px" }}>
                            <a className="theme-btn style-three" style={{ height: "40px", border: "1px solid #3380f1" }}>
                              <span style={{
                                position: "relative",
                                bottom: "5px"
                              }}>
                                Get a Quote <i className="fas fa-angle-double-right" />
                              </span>
                            </a>
                          </Link>

                          {/* </div> */}
                        </li>
                      </ul>

                    </Accordion.Collapse>
                  </Accordion>
                </nav>
                {/* Main Menu End*/}

              </div>
              {/* Nav Search */}
              {/* <div className="nav-search py-15">
                <button className="far fa-search" />
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="hide"
                >
                  <input
                    type="text"
                    placeholder="Search"
                    className="searchbox"
                    required=""
                  />
                  <button
                    type="submit"
                    className="searchbutton far fa-search"
                  />
                </form>
              </div> */}
              {/* Menu Button */}

            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
      <SideBar />
      {/* <PageBanner titleHtml={`Conta<span>ct Us</span>`} titleText="Contact" /> */}
      <section className="contact-us-page-area py-130">
        <div className="container">
          <div className="row align-items-end justify-content-between">
            <div className="col-lg-7">
              <div className="contact-content rmb-65 wow fadeInRight delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">Contact Us</span>
                  <h2>
                    Let’s Start New Project or work Together! Contact With us
                  </h2>
                </div>
                <p>
                Unlock your full potential without letting technology hinder your path to success. Connect with EquinoxDevs today and commence a voyage of originality and advancement. Allow us to convert your concepts into tangible achievements and propel your enterprise into the forefront of the digital era.
                </p>
                <form
           onSubmit={handleSubmit}
                  id="contactForm"
                  className="contactForm z-1 rel"
                >
                  <div className="row pt-15">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Enter Your Name"
                          required=""
                          onChange={(e)=>{
                            setName(e.target.value)
                          }}
                          data-error="Please enter your name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          onChange={(e)=>{
                            setEmail(e.target.value)
                          }}
                          className="form-control"
                          defaultValue=""
                          placeholder="Enter your Email"
                          required=""
                          data-error="Please enter your Email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input
                          type="text"
                          id="phone_number"
                          name="phone_number"
                          className="form-control"
                          defaultValue=""
                          onChange={(e)=>{
                            setPhonenumber(e.target.value)
                          }}
                          placeholder="Enter your Contact Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="select_subject">
                          Select Requirments
                        </label>
                        <select  onChange={(e)=>{
                          setWebsite(e.target.value)
                        }} name="select_subject" id="select_subject">
                          <option value="default" selected="">
                            Custom Inquiry
                          </option>
                          <option value="Development">Web Development</option>
                          <option value="Development">Mobile App Development</option>
                          <option value="SEO">SEO Services</option>
                          <option value="Development">DevOps Services</option>
                          <option value="Development">Custom Enterprise Solutions</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Write Message</label>
                        <textarea
                          name="message"
                          id="message"
                          onChange={(e)=>{
                            setMessage(e.target.value)
                          }}
                          className="form-control"
                          rows={4}
                          placeholder="Write Message"
                          required=""
                          data-error="Please enter your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group pt-5 mb-0">
                        { MessageSend && <p>{MessageSend}</p> }
                        <button type="submit" className="theme-btn w-100">
                       {
                        Loader ?
                        <PulseLoader size={11} color="white" />
                        :<>
                           Send Message{" "}
                          <i className="fas fa-angle-double-right" />
                        </>
                       }
                       
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="contact-info wow fadeInLeft delay-0-2s">
                <div className="contact-info-item style-two">
                  <div className="icon">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="content">
                    <span className="title">Location</span>
                    <span className="text">
                      Bahria Town, Lahore, Pakistan
                    </span>
                  </div>
                </div>
                <div className="contact-info-item style-two">
                  <div className="icon">
                    <i className="far fa-envelope-open-text" />
                  </div>
                  <div className="content">
                    <span className="title">email address</span>
                    <span className="text">
                      <a href="mailto:support@gmail.com">
                        info@equinoxdevs.com
                      </a>
                      <br />
                     
                    </span>
                  </div>
                </div>
                <div className="contact-info-item style-two">
                  <div className="icon">
                    <i className="far fa-phone" />
                  </div>
                  <div className="content">
                    <span className="title">Phone Number</span>
                    <span className="text">
                      <a href="calto:+000(123)45688">+92 (302) 8664374</a>
                      <br />
                      +92 42 35340337
                    </span>
                  </div>
                </div>
                <div className="follow-us">
                  <h4>Follow Us</h4>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us Page Area end */}
      {/* Our Location Address Area start */}
     {/* <section className="our-location-address-area rel z-1">
        <div className="container">
          <div className="row medium-gap justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="location-address-item wow fadeInUp delay-0-2s">
                <div className="top-part">
                  <img
                    src="assets/images/contact/location1.png"
                    alt="Location"
                  />
                  <h5>New York</h5>
                </div>
                <div className="bottom-part">
                  <ul>
                    <li>
                      <i className="fal fa-map-marker-alt" /> 55 Main Street,
                      New York
                    </li>
                    <li>
                      <i className="far fa-envelope-open-text" />{" "}
                      support@gmail.com
                    </li>
                    <li>
                      <i className="far fa-phone" /> +000 (123) 456 88
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-address-item wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <img
                    src="assets/images/contact/location2.png"
                    alt="Location"
                  />
                  <h5>Australia Capital</h5>
                </div>
                <div className="bottom-part">
                  <ul>
                    <li>
                      <i className="fal fa-map-marker-alt" /> 55 Main Street,
                      New York
                    </li>
                    <li>
                      <i className="far fa-envelope-open-text" />{" "}
                      support@gmail.com
                    </li>
                    <li>
                      <i className="far fa-phone" /> +000 (123) 456 88
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-address-item wow fadeInUp delay-0-6s">
                <div className="top-part">
                  <img
                    src="assets/images/contact/location3.png"
                    alt="Location"
                  />
                  <h5>South Africa</h5>
                </div>
                <div className="bottom-part">
                  <ul>
                    <li>
                      <i className="fal fa-map-marker-alt" /> 55 Main Street,
                      New York
                    </li>
                    <li>
                      <i className="far fa-envelope-open-text" />{" "}
                      support@gmail.com
                    </li>
                    <li>
                      <i className="far fa-phone" /> +000 (123) 456 88
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
      {/* Our Location Address Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map wow fadeInUp delay-0-2s">
        <div className="our-location">
          <iframe
            src="https://www.google.com/maps/embed?mid=1CYaMf9qsEtBnZXGoeMhyMPbMcE4&hl=en_US&ll=31.53670959015728%2C74.311609&z=12"
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      </Layout>
      {/* Location Map Area End */}
</>
  );
};
export default Contact;