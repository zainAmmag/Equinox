import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import EquinoxAccordion from "../src/components/EquinoxAccordion";
import ProgressBar from "../src/components/ProgressBar";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const faqsData = [
    {
        title: "What technologies do EquinoxDevs specialize in?",
        dec: "EquinoxDevs specializes in a wide range of technologies, including GCP, AWS, Oracle, Azure, Docker, Kubernetes, Ansible, Terraform, Puppet, Chef, Prometheus, Splunk, Datadog, Git, GitHub, GitLab, Shell Scripting, Python, Golang, Helm, Jenkins, Kubernetes Operator, and Nagios.",
    },
    {
        title: "How does EquinoxDevs ensure the quality of DevOps solutions?",
        dec: "EquinoxDevs ensures high-quality DevOps solutions through a thorough testing process. We identify and resolve any issues or bottlenecks, guaranteeing reliable performance and optimal functionality.",
    },
    {
        title: "Can EquinoxDevs handle the scaling requirements of my business?",
        dec: "Absolutely! EquinoxDevs specializes in building scalable DevOps solutions. We design and implement solutions that can adapt and grow with your business, whether it's scaling your infrastructure or handling growing workloads.",
    },
    {
        title: "Will EquinoxDevs provide ongoing support for my DevOps infrastructure?",
        dec: "Yes, EquinoxDevs offers expert guidance and ongoing support for your DevOps infrastructure. We are dedicated to your success and provide assistance with troubleshooting, updates, and optimization recommendations.",
    },
];
const DevOps = () => {
  const [active, setActive] = useState(`collapse0`);
  const onClick = (value) => {
    setActive(value === active ? "" : value);
  };
  return (
    <Layout>
    <PageBanner
        titleHtml={`DevOps Engineering & <span>Services</span>`}
        titleText="DevOps Engineering"
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
                            Revolutionize your operations with our cutting-edge DevOps services
                            </h2>
                        </div>
                      
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                    <div className="what-we-offer-right wow fadeInLeft delay-0-2s">
                        <p>
                            EquinoxDevs is a leading DevOps service provider, specializing in cutting-edge technologies and domains. With a diverse team of experts, we deliver excellence to our clients by leveraging our collective talents. We prioritize flexibility and space for our team to succeed, ensuring superior results for your business.
                        </p>
                        <ul className="list-style-four pt-5">
                        <li>Enhanced Efficiency</li>
                        <li>Scalable Solutions</li>
                        <li>Reliable Performance</li>
                        <li>Seamless Deployment</li>
                        <li>Expert Guidance and Support</li>
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
                            Collaborate to define objectives and select the best technologies for implementation.
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="feature-item-seven color-two wow fadeInUp delay-0-2s">
                        <div className="icon">
                            <i className="flaticon-graphic-design" />
                        </div>
                        <h5>Design</h5>
                        <p>
                            Create comprehensive blueprints considering all aspects of your DevOps infrastructure.
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
                            Build robust and scalable solutions tailored to your specific requirements.
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="feature-item-seven color-four wow fadeInUp delay-0-2s">
                        <div className="icon">
                            <i className="flaticon-checklist" />
                        </div>
                        <h5>Testing</h5>
                        <p>
                            Thoroughly test solutions for high quality and optimal performance.
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="feature-item-seven color-five mt-40 wow fadeInUp delay-0-2s">
                        <div className="icon">
                            <i className="flaticon-goal" />
                        </div>
                        <h5>Deployment</h5>
                        <p>
                            Seamlessly deploy solutions, ensuring a smooth transition and minimal disruption.
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
                            src="assets/images/devops/devops1.jpg"
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
                            <h2>DevOps Technologies &amp; Domains</h2>
                        </div>
                        <p>
                            Our DevOps services cover a wide range of technologies and domains, including GCP, AWS, Oracle, Azure, Docker, Kubernetes, Ansible, Terraform, Puppet, Chef, Prometheus, Splunk, Datadog, Git, GitHub, GitLab, Shell Scripting, Python, Golang, Helm, Jenkins, Kubernetes Operator, and Nagios. Trust us to empower your organization with efficient deployment, automation, monitoring, and infrastructure management.
                        </p>
                   
                    </div>
                </div>
            </div>
        </div>
    </section>
   
  
  
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
                                    src="assets/images/devops/devops2.jpg"
                                    alt="FAQs"
                                />
                                <img
                                    className="image-two wow fadeInUp delay-0-4s"
                                    src="assets/images/devops/devops3.jpg"
                                    alt="FAQs"
                                />
                            </div>
                            <div className="col-6 col-small">
                                <img
                                    className="image-three mt-95 wow fadeInUp delay-0-6s"
                                    src="assets/images/about/Web1.jpg"
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
                                <h2>Let’s unlock the full potential of your software development<br/> with DevOps services</h2>
                                <p>
                                    Transform your DevOps with EquinoxDevs. Contact us for expert support and cutting-edge technologies. Elevate your capabilities today!
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
export default DevOps;
