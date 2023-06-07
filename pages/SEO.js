import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import EquinoxAccordion from "../src/components/EquinoxAccordion";
import ProgressBar from "../src/components/ProgressBar";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const faqsData = [
  {
    title: "How long does it typically take to see results from SEO?",
    dec: "Results from SEO can vary, but improvements are usually seen within a few weeks to several months.",
  },
  {
    title: "Is one-time optimization enough for SEO, or is ongoing maintenance necessary?",
    dec: "Ongoing maintenance is necessary for SEO as search engines and competition evolve.",
  },
  {
    title: "Can SEO agencies guarantee top search engine rankings?",
    dec: "No, SEO agencies cannot guarantee specific top rankings on search engines.",
  },
  {
    title: "How is the success of an SEO campaign measured?",
    dec: "Success is measured through metrics like increased organic traffic, improved rankings, and higher engagement.",
  },
];
const SEO = () => {
  const [active, setActive] = useState(`collapse0`);
  const onClick = (value) => {
    setActive(value === active ? "" : value);
  };
  return (
    <Layout>
    <PageBanner
                titleHtml={`Search <span>Engine</span> Optimization`}
                titleText="Search Engine Optimization"
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
                                    Skyrocket your online visibility and dominate the search engine rankings
                                    </h2>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="what-we-offer-right wow fadeInLeft delay-0-2s">
                                <p>
                                    EquinoxDevs offers comprehensive SEO services to boost your online visibility. Our experts specialize in On-Page SEO, Off-Page SEO, and Technical SEO, ensuring higher search engine rankings and targeted organic traffic.
                                </p>
                                <ul className="list-style-four pt-5">
                                    <li>Enhanced Online Presence</li>
                                    <li>Increased Organic Traffic</li>
                                    <li>Improved User Experience</li>
                                    <li>Establish Credibility </li>
                                    <li>Ongoing Monitoring and Analysis </li>
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
                                <h5>Make <br /> Strategy</h5>
                                <p>
                                    Set Objectives and Research Keywords
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="feature-item-seven color-two wow fadeInUp delay-0-2s">
                                <div className="icon">
                                    <i className="flaticon-graphic-design" />
                                </div>
                                <h5>On-Page Optimization</h5>
                                <p>
                                    Enhance Website Performance
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="feature-item-seven color-three mt-40 wow fadeInUp delay-0-2s">
                                <div className="icon">
                                    <i className="flaticon-coding-2" />
                                </div>
                                <h5>Off-Page Optimization</h5>
                                <p>
                                    Build Online Reputation
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="feature-item-seven color-four wow fadeInUp delay-0-2s">
                                <div className="icon">
                                    <i className="flaticon-checklist" />
                                </div>
                                <h5>Technical Optimization</h5>
                                <p>
                                    Improve the Website's Technical Elements
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="feature-item-seven color-five mt-40 wow fadeInUp delay-0-2s">
                                <div className="icon">
                                    <i className="flaticon-goal" />
                                </div>
                                <h5>Monitoring &amp; Analysis</h5>
                                <p>
                                Track Performance and Make Adjustments
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
                                    src="assets/images/seo/seo2.jpeg"
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
                                    <h2>On-Page SEO Services</h2>
                                </div>
                                <p>
                                Improve your website's visibility with EquinoxDevs On-Page SEO services. We optimize your website's structure, content,
                                 and HTML elements for better search engine rankings and an enhanced user experience.

                                </p>
                          
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* What We Offer Two Area end */}
            {/* Responsive Design Area start */}
           
            {/* Responsive Design Area end */}
            {/* CTA Two Area start */}
           
            {/* CTA Two Area end */}
            {/* Support & Marketing Area start */}
            
            {/* Support & Marketing Area start */}
            {/* FAQs Area start */}
            <section className="responsive-design-area mb-130 rel z-1">
      <div className="container">
        <div className="row large-gap align-items-center">
          <div className="col-lg-6">
            <div className="responsive-design-content rmb-65 wow fadeInLeft delay-0-2s">
              <div className="section-title mb-25">
                <span className="sub-title style-two mb-15">
                  What We Offer
                </span>
                <h2>Off-Page SEO Services</h2>
              </div>
              <p>
              Establish authority and credibility with our Off-Page SEO services. We build high-quality backlinks and engage
               in outreach campaigns to boost your website's visibility and reputation in the online landscape
              </p>
          
            </div>
          </div>
          <div className="col-lg-6">
            <div className="responsive-design-image wow fadeInRight delay-0-2s">
              <img
                src="assets/images/seo/seo6.jpeg"
                alt="Responsive Design"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="what-we-offer-two mb-130 rel z-1">
                <div className="container">
                    <div className="row large-gap align-items-center">
                        <div className="col-lg-6">
                            <div className="what-we-offer-image rmb-65 wow fadeInRight delay-0-2s">
                                <img
                                    src="assets/images/seo/seo7.jpeg"
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
                                    <h2>Technical SEO Services</h2>
                                </div>
                                <p>
                                Optimize your website's technical aspects with EquinoxDevs Technical SEO expertise. We ensure proper
                                 crawlability, indexability, and a seamless user experience by resolving any technical issues.
                                </p>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faqs-area pb-160, pt-30 pd rel z-1">
                <div className="container pb-40">
                    <div className="row large-gap justify-content-between align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-images rmb-65 rel">
                                <div className="row" >
                                    <div className="col-6 col-small">
                                        <img
                                            className="image-one wow fadeInUp delay-0-2s"
                                            src="assets/images/seo/seo3.jpeg"
                                            alt="FAQs"
                                        />
                                        <img
                                            className="image-two wow fadeInUp delay-0-4s"
                                            src="assets/images/seo/seo4.jpeg"
                                            alt="FAQs"
                                        />
                                    </div>
                                    <div className="col-6 col-large">
                                        <img
                                            className="image-three mt-95 wow fadeInUp delay-0-6s"
                                            src="assets/images/seo/seo5.jpeg"
                                            alt="FAQs"
                                        />
                                     
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
    <section className="call-to-action-area bgc-black pt-80 pb-50">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-7 col-lg-9">
            <div className="section-title text-white mb-25 wow fadeInUp delay-0-2s">
              <h2>Let’s Do SEO </h2>
              <p>
              Supercharge your online presence today with EquinoxDevs' SEO services. Contact us now to unlock the full potential of your website and dominate the search engine rankings.
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
    {/* FAQs Area end */}
</Layout>
  );
};
export default SEO;
