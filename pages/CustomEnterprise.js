import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import EquinoxAccordion from "../src/components/EquinoxAccordion";
import ProgressBar from "../src/components/ProgressBar";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const faqsData = [
    {
        title: "How long does it take to develop a custom enterprise solution?",
        dec: "Development time varies based on the complexity and scope of your project requirements.",
    },
    {
        title: "Can I integrate the custom enterprise solution with my existing systems?",
        dec: "Absolutely. Our solutions seamlessly integrate with your existing systems for a smooth transition.",
    },
    {
        title: "How secure are the custom enterprise solutions developed by EquinoxDevs?",
        dec: "Security is our top priority. We follow best practices and implement robust measures to protect your data and ensure compliance.",
    },
    {
        title: "Do you provide ongoing support and maintenance after deployment?",
        dec: "Yes, we offer comprehensive support and maintenance services to ensure your custom enterprise solution runs smoothly.",
    },
];
const CustomEnterprise = () => {
  const [active, setActive] = useState(`collapse0`);
  const onClick = (value) => {
    setActive(value === active ? "" : value);
  };
  return (
    <Layout>
    <PageBanner
        titleHtml={`Custom <span>Enterprise</span> Soutions`}
        titleText="Custom Enterprise Soutions"
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
                            Power your Enterprise with EquinoxDevs' custom solutions for unstoppable success in the digital era.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                    <div className="what-we-offer-right wow fadeInLeft delay-0-2s">
                        <p>
                            EquinoxDevs specializes in delivering custom enterprise solutions designed
                            to empower businesses and drive success in the ever-evolving digital landscape.
                            Our comprehensive suite of services includes the development of CRM systems, ERP solutions, workflow automation, seamless integration, scalability, and robust security measures. We take pride in crafting tailored solutions that precisely cater to the unique needs and aspirations of your enterprise.
                        </p>
                        <ul className="list-style-four pt-5">
                        <li>Solutions for Your Unique Needs</li>
                                    <li>Increased Operational Efficiency</li>
                                    <li>Enhanced Data-driven Decision Making </li>
                                    <li>Improved Customer Engagement and Satisfaction</li>
                                    <li>Scalability and Future-readiness </li>
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
                        <h5>Strategic Alignmnent</h5>
                        <p>
                            Aligning technology with objectives for success.
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="feature-item-seven color-two wow fadeInUp delay-0-2s">
                        <div className="icon">
                            <i className="flaticon-graphic-design" />
                        </div>
                        <h5>Tailored Solutions</h5>
                        <p>
                            Custom enterprise solutions designed to fit your requirements.
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="feature-item-seven color-three mt-40 wow fadeInUp delay-0-2s">
                        <div className="icon">
                            <i className="flaticon-coding-2" />
                        </div>
                        <h5>Cutting-Edge Development</h5>
                        <p>
                            Bringing your solution to life with advanced technologies.
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="feature-item-seven color-four wow fadeInUp delay-0-2s">
                        <div className="icon">
                            <i className="flaticon-checklist" />
                        </div>
                        <h5>Rigorous Testing </h5>
                        <p>
                            Ensuring top-quality performance through thorough testing.
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="feature-item-seven color-five mt-40 wow fadeInUp delay-0-2s">
                        <div className="icon">
                            <i className="flaticon-goal" />
                        </div>
                        <h5>Seamless Deployment &amp; Support</h5>
                        <p>
                            Smooth deployment and ongoing assistance for evolving needs.
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
                            src="assets/images/enterprise/ces1.jpg"
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
                                    <h2>Enterprise Resource Planning (ERP)</h2>
                                </div>
                                <p>
                                    EquinoxDevs delivers streamlined Enterprise Resource Planning (ERP) solutions that optimize operations,
                                    integrate processes, and enhance efficiency. Our ERP systems provide real-time data,
                                    collaboration, scalability, and improved customer service, empowering your business for success.
                                </p>
                                <ul className="list-style-four pt-5 pb-30">
                                    <li>Enhanced Operational Efficiency</li>
                                    <li>Improved Collaboration and Communication</li>
                                    <li>Scalability and Adaptability.</li>
                                </ul>
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
                                        What We Offer
                                    </span>
                                    <h2>Customer Relationship Management (CRM)</h2>
                                </div>
                                <p>
                                    EquinoxDevs offers customized Customer Relationship Management (CRM) solutions to manage interactions,
                                    drive engagement, and foster customer loyalty. Our CRM systems centralize data, enable effective sales management,
                                    deliver personalized experiences,
                                    provide analytics insights, and seamless integration for efficient operations.
                                </p>
                                <ul className="list-style-four pt-5 pb-30">
                                    <li>Enhanced Customer Interactions</li>
                                    <li>Streamlined Sales Management</li>
                                    <li>Actionable Analytics Insights</li>
                                </ul>
                            </div>
                </div>
                <div className="col-lg-6">
                    <div className="responsive-design-image wow fadeInRight delay-0-2s">
                        <img
                            src="assets/images/enterprise/ces2.jpg"
                            alt="Responsive Design"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Responsive Design Area end */}
    {/* CTA Two Area start */}
   
  
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
                                    src="assets/images/enterprise/ces3.jpg"
                                    alt="FAQs"
                                />
                                <img
                                    className="image-two wow fadeInUp delay-0-4s"
                                    src="assets/images/enterprise/ces5.jpg"
                                    alt="FAQs"
                                />
                            </div>
                            <div className="col-6 col-small">
                                <img
                                    className="image-three mt-95 wow fadeInUp delay-0-6s"
                                    src="assets/images/enterprise/ces4.jpg"
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
    {/* FAQs Area end */}
    <section className="call-to-action-area bgc-black pt-80 pb-50">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-7 col-lg-9">
                            <div className="section-title text-white mb-25 wow fadeInUp delay-0-2s">
                                <h2>Let’s upgrade your business with powerful Enterprise solutions today!" </h2>
                                <p>
                                    Transform Your Enterprise with EquinoxDevs! Maximize efficiency, engage customers, and scale your business for the future. Experience the power of EquinoxDevs.
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
export default CustomEnterprise;
