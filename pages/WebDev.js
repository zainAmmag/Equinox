import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import EquinoxAccordion from "../src/components/EquinoxAccordion";
import ProgressBar from "../src/components/ProgressBar";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const faqsData = [
  {
    title: "How long does it typically take to complete a web design and development project",
    dec: "The duration of a web design and development project varies based on its complexity, scope, and specific requirements. Upon evaluating your project, we will provide you with a customized timeline that ensures the delivery of a high-quality website within a reasonable timeframe.",
  },
  {
    title: "Which languages do you use in developing the website?",
    dec: "For full-stack development projects we include front-end development, back-end development, database management, server management, API development and integration, version control, and deployment and hosting. We are proficient in front-end technologies like HTML, CSS, JavaScript, React, and Angular. For back-end development, we are proficient in Node.js and Express.js. Moreover, we have experience working with databases such as MySQL, PostgreSQL, MongoDB, Oracle, and SQL Server.",
  },
  {
    title: "Will my website be designed to be mobile-friendly and responsive?",
    dec: "Absolutely! At EquinoxDevs, we prioritize providing an optimal user experience across all devices. Our experienced team specializes in crafting mobile-friendly and responsive web designs. This ensures that your website seamlessly adapts and functions flawlessly on various platforms, including desktops, tablets, and smartphones.",
  },
  {
    title: "What support is available after the website is launched? Can I make updates and modifications?",
    dec: "EquinoxDevs is committed to providing ongoing support even after your website is launched. We offer maintenance packages tailored to your specific needs, ensuring that your website remains up-to-date and secure. Additionally, we provide you with user-friendly content management systems, allowing you to make updates, changes, and modifications to your website's content easily and efficiently.",
  },
];
const WebDev = () => {
  const [active, setActive] = useState(`collapse0`);
  const onClick = (value) => {
    setActive(value === active ? "" : value);
  };
  return (
    <Layout>
    <PageBanner
      titleHtml={`Web Design &amp; Develop<span>ment</span>`}
      titleText="Web Design & Development"
    />
    <section className="what-we-offer my-130 rel z-1">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="what-we-offer-left mb-30 rmb-65 wow fadeInRight delay-0-2s">
              <div className="section-title mb-25">
                <span className="sub-title style-two mb-15">
                  What We Offer
                </span>
                <h2>
                Ignite digital brilliance with EquinoxDevs, stunning Web design, and seamless development. 
                </h2>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="what-we-offer-right wow fadeInLeft delay-0-2s">
              <p>
              We excel in creating impressive websites that engage your audience and enhance 
              your online visibility to unprecedented levels. Our team of skilled designers and developers
               specializes in blending innovation, technical proficiency, and industry-leading standards to provide
                state-of-the-art websites customized to suit your specific requirements. Whether you desire a sleek and 
                contemporary design or an
               intuitive interface, we guarantee a distinctive website that sets you apart and creates a memorable impact.
              </p>
              <ul className="list-style-four pt-5">
                <li>Enhanced Online Visibility</li>
                <li>Customized Solutions</li>
                <li>Exceptional User Experiences</li>
                <li>Cutting-Edge Technology</li>
                <li>Professional Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* What We Offer Area end */}
    {/* Features Area start */}
    <section className="features-area-seven pb-100 rel z-1">
      <div className="container">
        <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
          <div className="col">
            <div className="feature-item-seven mt-30 wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon-idea" />
              </div>
              <h5>Make Strategy</h5>
              <p>
              Set objectives, plan the brand, research keywords, and strategize positioning.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="feature-item-seven color-two wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon-graphic-design" />
              </div>
              <h5>Website Design</h5>
              <p>
              Create design drafts and choose a concept.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="feature-item-seven color-three mt-40 wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon-coding-2" />
              </div>
              <h5>Development</h5>
              <p>
                To make the content, information architecture, visual design
                all work
              </p>
            </div>
          </div>
          <div className="col">
            <div className="feature-item-seven color-four wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon-checklist" />
              </div>
              <h5>Project Testing</h5>
              <p>
              Our expert team is available for updates and thorough testing.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="feature-item-seven color-five mt-40 wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon-goal" />
              </div>
              <h5>Project Launching</h5>
              <p>
              Ready to launch the website and showcase the brand's new online presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Features Area end */}
    {/* What We Offer Two Area start */}
    <section className="what-we-offer-two mb-130 rel z-1">
      <div className="container">
        <div className="row large-gap align-items-center">
          <div className="col-lg-6">
            <div className="what-we-offer-image rmb-65 wow fadeInRight delay-0-2s">
              <img
                src="assets/images/about/Webimg.jpg"
                alt="What We Offer"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="what-we-offer-content wow fadeInLeft delay-0-2s">
              <div className="section-title mb-25">
                <span className="sub-title style-two mb-15">
                  What We Offer
                </span>
                <h2>Full Stack, FrontEnd & BackEnd Development Services</h2>
              </div>
              <p>
              Our team consists of highly skilled experts who specialize in web and mobile app development. 
              We have extensive experience in utilizing various technologies, including the MERN Stack, WordPress, 
              and more. Our focus is on delivering outstanding user experiences and providing cutting-edge 
              solutions to our clients. We are committed to bringing your ideas to life and driving your business forward in 
              the digital world.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* What We Offer Two Area end */}
    {/* Responsive Design Area start */}
    <section className="responsive-design-area mb-130 rel z-1">
      <div className="container">
        <div className="row large-gap align-items-center">
          <div className="col-lg-6">
            <div className="responsive-design-content rmb-65 wow fadeInLeft delay-0-2s">
              <div className="section-title mb-25">
                <span className="sub-title style-two mb-15">
                  Responsive Design
                </span>
                <h2>Design For Any Device Responsive Web Design</h2>
              </div>
              <p>
              We create stunning responsive web designs that seamlessly adapt to any device. From desktops to smartphones, our expert team crafts visually captivating and user-friendly websites that provide an exceptional browsing experience.
              </p>
              <ul className="list-style-four pt-5 pb-30">
                <li>Mobile-friendly</li>
                <li>Design for every device</li>
                <li>Positive UX &amp; Helps SEO</li>
              </ul>
          
            </div>
          </div>
          <div className="col-lg-6">
            <div className="responsive-design-image wow fadeInRight delay-0-2s">
              <img
                src="assets/images/about/resp.jpg"
                alt="Responsive Design"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Responsive Design Area end */}
    {/* CTA Two Area start */}

    {/* CTA Two Area end */}
    {/* Support & Marketing Area start */}

    {/* Support & Marketing Area start */}
    {/* FAQs Area start */}
    <section className="faqs-area pb-130 rel z-1">
      <div className="container">
        <div className="row large-gap justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="faq-images rmb-65 rel">
              <div className="row">
                <div className="col-6 col-small">
                  <img
                    className="image-one wow fadeInUp delay-0-2s"
                    src="assets/images/about/Web1.jpg"
                    alt="FAQs"
                  />
                  <img
                    className="image-two wow fadeInUp delay-0-4s"
                    src="assets/images/about/Web4.jpg"
                    alt="FAQs"
                  />
                </div>
                <div className="col-6 col-small">
                  <img
                    className="image-three mt-95 wow fadeInUp delay-0-6s"
                    src="assets/images/about/Web3.jpg"
                    alt="FAQs"
                  />
                  {/*<div className="year-of-experience wow zoomIn delay-0-6s">
                    <span className="number">5</span>
                    Years Of Web Experience
  </div>*/}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-content wow fadeInRight delay-0-2s">
              <div className="section-title mb-40">
                <span className="sub-title style-two mb-15">Faqs</span>
                <h2>Asked Questions about Website Design</h2>
              </div>
              <Accordion
                defaultActiveKey="collapse0"
                className="accordion"
                id="faq-accordion"
              >
                {faqsData.map((faq, i) => (
                  <EquinoxAccordion
                    dec={faq.dec}
                    event={`collapse${i}`}
                    key={i}
                    title={faq.title}
                    onClick={() => onClick(`collapse${i}`)}
                    active={active}
                  />
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* FAQs Area end */}
    <section className="call-to-action-area bgc-black pt-80 pb-50">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-7 col-lg-9">
            <div className="section-title text-white mb-25 wow fadeInUp delay-0-2s">
              <h2>Let’s Design Your New Mobile Application </h2>
              <p>
              Enhance your digital presence with EquinoxDevs, Join forces with us today to develop an extraordinary website that mesmerizes your audience and propels your business to unprecedented achievements!
              </p>
            </div>
          </div>
          <div className="col-lg-3 text-lg-end">
            <Link href="/contactus">
              <a className="theme-btn style-two mb-30 wow fadeInUp delay-0-4s">
                Let’s Get Started <i className="fas fa-angle-double-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
  );
};
export default WebDev;
