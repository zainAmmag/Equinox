import Head from "next/head";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import dynamic from "next/dynamic";
const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});
import { BsInfinity } from "react-icons/bs"
import {CiMobile3} from "react-icons/ci"
import {SlSettings} from "react-icons/sl"
import {BsBuildings} from "react-icons/bs"
import ClientsFeedback from "../src/components/home1/ClientsFeedback";
import Hero1 from "../src/components/home1/Hero1";
import RecentProjects from "../src/components/home1/RecentProjects";
import Layout from "../src/layout/Layout";
import SideBar from "../src/layout/SideBar";
import { useState } from "react";
import emailjs from 'emailjs-com';
import {PulseLoader} from "react-spinners";

const index = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [Loader, setLoader] = useState(false);
  const [MessageSend, setMessageSend] = useState(null);

  const handleSubmit = async (e) => {
    if(Loader) return
    e.preventDefault();
    setLoader(true)
    const templateParams = {
        from_name: email,
        to_name: 'Equinox',
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
    <Layout className="home-one" footer={1} noHeader>
      <Head>
        {" "}
        <link
          rel="shortcut icon"
          href="assets/images/favicon.png"
          type="image/x-icon"
        />
      </Head>
      <header className="main-header header-two">
        {/*Header-Upper*/}
        <div className="header-upper">
          <div className="container clearfix">
            <div className="header-inner rel d-flex align-items-center " style={{ height: "80px", justifyContent: "space-between" }}>
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
                          <a href="#home">Home</a>
                        </li>
                        <li>
                          <a href="#about">about</a>
                        </li>
                        <li>
                          <a href="#featured">featured</a>
                        </li>
                        <li>
                          <a href="#project">project</a>
                        </li>
                        {/* <li>
                          <a href="#pricing">pricing</a>
                        </li> */}
                        <li>
                          <a href="#contact">contact us </a>
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
      {/*End Hidden Sidebar */}
      {/* Slider Section Start */}
      <Hero1 />
      {/* Slider Section End */}
      {/* Core Feature start */}
      <section className="feature-area-five bgc-lighter pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">Core Features</span>
            <h2>Amazing web design features</h2>
          </div>
          <div className="row row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col wow fadeInUp delay-0-2s">
              <div className="feature-item-five">
                <i className="flaticon-responsive" />
                <h5>Responsive design</h5>
              </div>
            </div>
            <div className="col wow fadeInUp delay-0-3s">
              <div className="feature-item-five">
                <i className="flaticon-feature" />
                <h5>
                  Powerful Customization
                </h5>
              </div>
            </div>
            <div className="col wow fadeInUp delay-0-4s">
              <div className="feature-item-five">
                <i className="flaticon-aim" />
                <h5>

                  Cool &amp; modern animations

                </h5>
              </div>
            </div>
            <div className="col wow fadeInUp delay-0-5s">
              <div className="feature-item-five">
                <i className="flaticon-seo" />
                <h5>
                  SEO Friendly Coding
                </h5>
              </div>
            </div>
            <div className="col wow fadeInUp delay-0-6s">
              <div className="feature-item-five">
                <i className="flaticon-search-location" />
                <h5>
                  Best Technical supports
                </h5>
              </div>
            </div>
            {/* <div className="col wow fadeInUp delay-0-7s">
              <div className="feature-item-five">
                <i className="flaticon-settings" />
                <h5>
                  <Link href="/service-details">
                    <a>Varied Layouts &amp; parallax</a>
                  </Link>
                </h5>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* Core Feature end */}
      {/* About Us Area start */}
      <section id="about" className="about-area-one pt-130 pb-125 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="about-image-one bg-squire-shape rmb-85 wow fadeInUp delay-0-2s">
                <img src="assets/images/home/home4.jpg" alt="About us" />
                <img
                  className="image-left"
                  src="assets/images/shapes/image-left.png"
                  alt="shape"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about-content-one wow fadeInUp delay-0-4s">
                <div className="section-title mb-45">
                  <span className="sub-title mb-15">
                    About digital solutions
                  </span>
                  <h2>Feature us for best IT solutions and Services for your business</h2>
                </div>
                <ul className="list-style-one">
                  <li>
                    <div className="content">
                      <h4>About Us</h4>
                      <p>
                      At EquinoxDevs we provide IT solutions for Web and Mobile Application Development, Devops Engineering, and custom Enterprise Solutions. We, passionately believe that we are successful in delivering excellence to our clients.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <h4>Company Mission</h4>
                      <p>
                        We promote business with our strong spirit which is to fulfill customer’s requests at all times. Our company also creates what customers need to realize a glamorous dream they have.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <h4>Company Vision</h4>
                      <p>
                      Empowering innovation through diverse talent and flexible solutions for exceptional client success in Developing Web Applications, Mobile Applications, and DevOps Engineering.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Statistics Three Area start */}
      {/* <section className="statistics-area-three bgs-cover pb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-7">
              <div className="statistics-three-content rmb-65 wow fadeInRight delay-0-2s">
                <div className="row justify-content-center justify-content-xl-start">
                  <div className="col-xl-9">
                    <div className="section-title mb-60">
                      <span className="sub-title mb-15">
                        Company Statistics
                      </span>
                      <h2>We’ve some achievement from global partners</h2>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                    <div className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-3s">
                      <i className="flaticon-startup" />
                      <Counter end={2365} />
                      <span className="counter-title">Projects complete</span>
                      <p>On the other denonce with righteous indin</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                    <div className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-5s">
                      <i className="flaticon-global" />
                      <Counter end={5234} />
                      <span className="counter-title">Global Client’s</span>
                      <p>On the other denonce with righteous indin</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                    <div className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-7s">
                      <i className="flaticon-rating" />
                      <Counter end={8532} />
                      <span className="counter-title">Happy Customer</span>
                      <p>On the other denonce with righteous indin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="statistics-three-image bg-squire-shape mb-30 wow fadeInLeft delay-0-3s">
                <img
                  src="assets/images/about/statictics.jpg"
                  alt="Statictics"
                />
                <img
                  className="image-right"
                  src="assets/images/shapes/image-right.png"
                  alt="shape"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Statistics Three Area end */}
      {/* Design Featured Start */}
      <section
        id="featured"
        className="design-feature-area overflow-hidden pt-130 pb-100 text-white bgc-black-with-lighting rel z-1"
      >
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">Our Services</span>
            <h2>What We Provide</h2>
          </div>
          <div className="row row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="service-item style-three wow fadeInRight delay-0-2s">

              <div className="icon">
             <i className="flaticon-coding-2" />
              </div>
              <div className="content">
                <h4>
                  <Link href="/WebDev">
                    <a>Web Application Development</a>
                  </Link>
                </h4>
                <Link href="/WebDev">
                  <a className="more-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="service-item style-three wow fadeInRight delay-0-2s">
              <div className="icon">
              <CiMobile3 color="#3e34fff2" />
              </div>
              <div className="content">
                <h4>
                  <Link href="/MobileDev">
                    <a>Mobile Application Development</a>
                  </Link>
                </h4>
                <Link href="/MobileDev">
                  <a className="more-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>  <div className="service-item style-three wow fadeInRight delay-0-2s">
              <div className="icon">
              <SlSettings color="#3e34fff2" />
              </div>
              <div className="content">
                <h4>
                  <Link href="/SEO">
                    <a>Search Engine Optimization (SEO)</a>
                  </Link>
                </h4>
                <Link href="/SEO">
                  <a className="more-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>  <div className="service-item style-three wow fadeInRight delay-0-2s">
              <div className="icon">
              <BsInfinity color="#3e34fff2" />
              </div>
              <div className="content">
                <h4>
                  <Link href="/DevOps">
                    <a>DevOps Engineering Services</a>
                  </Link>
                </h4>
                <Link href="/DevOps">
                  <a className="more-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="service-item style-three wow fadeInRight delay-0-2s">
              <div className="icon">
              <BsBuildings color="#3e34fff2" />
              </div>
              <div className="content">
                <h4>
                  <Link href="/CustomEnterprise">
                    <a>Custom Enterprise Solutions</a>
                  </Link>
                </h4>
                <Link href="/CustomEnterprise">
                  <a className="more-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            {/* <div className="col wow fadeInUp delay-0-7s">
              <div className="feature-item-five">
                <i className="flaticon-settings" />
                <h5>
                  <Link href="/service-details">
                    <a>Varied Layouts &amp; parallax</a>
                  </Link>
                </h5>
              </div>
            </div> */}
          </div>

        </div>
        <div className="design-feature-shapes">
          <img
            className="shape dots"
            src="assets/images/shapes/slider-dots.png"
            alt="Shape"
          />
          <img
            className="shape wave-line"
            src="assets/images/shapes/feature-wave-line.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Design Featured End */}
      {/* Project Area start */}
      <RecentProjects />
      {/* Project Area end */}
      {/* Working Process Area start */}
      <section className="work-process-area pb-140 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Working Process</span>
                <h2>How does we works</h2>
              </div>
            </div>
          </div>
          <div className="work-process-wrap rel z-1">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item mt-30 wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <span className="number">01</span>
                    <i className="flaticon-optimization" />
                  </div>
                  <h4>Info Gathering</h4>
                  <p>Unleashing data-driven innovation for top-notch solutions.</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item wow fadeInUp delay-0-4s">
                  <div className="icon">
                    <span className="number">02</span>
                    <i className="flaticon-link" />
                  </div>
                  <h4>Idea Planning</h4>
                  <p>Transforming ideas into actionable plans.</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item mt-55 wow fadeInUp delay-0-6s">
                  <div className="icon">
                    <span className="number">03</span>
                    <i className="flaticon-data" />
                  </div>
                  <h4>Design Analysis</h4>
                  <p>Crafting visually stunning, user-friendly interfaces.</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item mt-45 wow fadeInUp delay-0-8s">
                  <div className="icon">
                    <span className="number">04</span>
                    <i className="flaticon-star" />
                  </div>
                  <h4>Testing &amp; Lunching</h4>
                  <p>Flawless execution for successful product launches</p>
                </div>
              </div>
            </div>
            <div className="work-process-shape">
              <img
                src="assets/images/shapes/worp-process-step.png"
                alt="Shape"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Working Process Area end */}
      {/* CTA Area start */}
      <section className="call-to-action-area rel z-2">
        <div className="container">
          <div
            className="cta-inner bgs-cover"
            style={{
              backgroundImage: "url(assets/images/background/cta-bg.jpg)",
            }}
          >
            {/*<div className="row">
              <div className="col-xl-6">
                <div className="cta-item wow fadeInLeft delay-0-2s">
                  <div className="icon">
                    <i className="flaticon-target" />
                  </div>
                  <h4>Have any Project On Minds ?</h4>
                  <Link href="/contact">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="cta-item wow fadeInRight delay-0-2s">
                  <div className="icon">
                    <i className="flaticon-target" />
                  </div>
                  <h4>We are to work SEO optimization ?</h4>
                  <Link href="/contact">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
          </div>*/}
          </div>
        </div>
      </section>
      {/* CTA Area end */}
      {/* Pricing Two Area start */}
      
      {/* Pricing Two Area end */}
      {/* Testimonial Area Start */}
      {/* <ClientsFeedback /> */}
      {/* Testimonial Area End */}
      {/* Contact Area Start */}
      <section
        id="contact"
        className="contact-area overflow-hidden py-130 bgc-black-with-lighting rel z-1"
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="contact-info-area text-white rmb-75 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-55">
                  <h2>
                    Have any project on mind! feel free contact with us{" "}
                    {/* <span>say hello</span> */}
                  </h2>
                </div>
                <div className="contact-info-wrap">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <span className="title">Location</span>
                      <b className="text">948,Umar Block, Bahria Town, Lahore, Pakistan</b>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-envelope-open-text" />
                    </div>
                    <div className="content">
                      <span className="title">Email Address</span>
                      <b className="text">
                        <a style={{color: "white"}}href="mailto:support@gmail.com">info@equinoxdevs.com</a>
                      </b>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-phone" />
                    </div>
                    <div className="content">
                      <span className="title">Phone No</span>
                      <b className="text">
                        <a style={{color:"white"}}href="callto:+000(123)45699">+92 (302) 8664374<br/>+92 (42) 35340337 </a>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
      <form
        id="contact-area-form"
        className="contact-area-form text-center wow fadeInRight delay-0-2s"
        name="contact-area-form"
        method="post"
        onSubmit={handleSubmit}
      >
        <h4>Send us a Message</h4>
        <input
          type="text"
          id="full-name"
          name="name"
          className="form-control"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          id="blog-email"
          name="email"
          className="form-control"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          id="website"
          name="website"
          className="form-control"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />

        <textarea
          name="message"
          id="message"
          className="form-control"
          rows={5}
          placeholder="Write a Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {MessageSend && <p>{MessageSend}</p>}

        <button type="submit" className="theme-btn">
          {
            Loader?
            <PulseLoader size={11} color="white" />
             :<>
               Send message <i className="fas fa-angle-double-right" />
       </>
          }
         </button>
      </form>
    </div>
          </div>
        </div>
        <div className="contact-shapes">
          <img
            className="shape circle"
            src="assets/images/shapes/slider-dots.png"
            alt="Shape"
          />
          <img
            className="shape dots"
            src="assets/images/shapes/contact-dots.png"
            alt="Shape"
          />
          <img
            className="shape wave-line"
            src="assets/images/shapes/contact-wave-line.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Contact Area End */}
      {/* Blog Area start */}
      {/* <section id="news" className="news-blog-area pt-130 pb-75 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Get Every Updates</span>
                <h2>Read Latest News &amp; Blog</h2>
              </div>
            </div>
          </div>
          <div className="row large-gap">
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 March 2022
                  </span>
                  <h4>
                    <Link href="/blog-details">
                      <a>Easy Ways to Incorporate Customer Feedback</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author1.jpg" alt="Author" />
                    <div className="post-by">
                      <span>Post by</span>
                      <a href="#">Douglas B. Dickens</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 27 March 2022
                  </span>
                  <h4>
                    <Link href="/blog-details">
                      <a>How to create modern web site for your business?</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author2.jpg" alt="Author" />
                    <div className="post-by">
                      <span>Post by</span>
                      <a href="#">Carson C. Rhodes</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 March 2022
                  </span>
                  <h4>
                    <Link href="/blog-details">
                      <a>How to digital marketing work social networking?</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author3.jpg" alt="Author" />
                    <div className="post-by">
                      <span>Post by</span>
                      <a href="#">Robert T. Evans</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog4.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 March 2022
                  </span>
                  <h4>
                    <Link href="/blog-details">
                      <a>Easy Ways to Incorporate Customer Feedback</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author4.jpg" alt="Author" />
                    <div className="post-by">
                      <span>Post by</span>
                      <a href="#">Stanley J. Contreras</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};
export default index;
