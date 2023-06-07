import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import EquinoxAccordion from "../src/components/EquinoxAccordion";
import ProgressBar from "../src/components/ProgressBar";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const faqsData = [
  {
    title: "What is the typical timeline for developing a mobile application?",
    dec: "The timeline varies based on complexity and scope, and we provide a customized estimate after analyzing your requirements.",
  },
  {
    title: "Can you create mobile applications for both Android and iOS platforms?",
    dec: "Yes, we specialize in developing Android and iOS using technologies like React Native, Kotlin, Flutter, Swift, and Objective-C.",
  },
  {
    title: "Will I have complete control over the design and features of my mobile application?",
    dec: "Absolutely! We prioritize your vision and involve you in every step of the process for full control over design and features.",
  },
  {
    title: "Do you offer post-launch support and maintenance for mobile applications?",
    dec: "We provide comprehensive post-launch support, ensuring compatibility with the latest OS versions and addressing any issues or updates.",
  },
];
const MobileDev = () => {
  const [active, setActive] = useState(`collapse0`);
  const onClick = (value) => {
    setActive(value === active ? "" : value);
  };
  return (
    <Layout>
    <PageBanner
        titleHtml={`Mobile<span> Application Development</span>`}
        titleText="Mobile Application Development"
    />
    <section className="what-we-offer my-130 rel z-1">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-xl-5 col-lg-6">
                    <div className="what-we-offer-left mb-30 rmb-65 wow fadeInRight delay-0-2s">
                        <div className="section-title mb-5">
                            <span className="sub-title style-two mb-15">
                                What We Offer
                            </span>
                            <h2>
                            Transform your app idea into a captivating reality with EquinoxDevs
                                
                            </h2>
                        </div>
                      
                        
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                    <div className="what-we-offer-right wow fadeInLeft delay-0-2s">
                        <p>
                            EquinoxDev specializes in crafting captivating 
                            mobile applications that elevate your brand's online presence. 
                            Our talented team of developers excels in Android and iOS app development, 
                            utilizing technologies like React Native, Kotlin (MVVM), Flutter, Swift, 
                            and Objective-C. We deliver exceptional craftsmanship, seamless functionality, 
                            and innovative designs tailored to your specific requirements.

                            
                        </p>
                        <ul className="list-style-four pt-5">
                            <li>Exceptional Craftsmanship</li>
                            <li>Seamless Functionality</li>
                            <li>Innovative Designs </li>
                            <li>Platform Expertise</li>
                            <li>Personalized Approach</li>
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
                            Define objectives, research market trends, and analyze the target audience.
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="feature-item-seven color-two wow fadeInUp delay-0-2s">
                        <div className="icon">
                            <i className="flaticon-graphic-design" />
                        </div>
                        <h5>App Design</h5>
                        <p>
                            Create prototypes and select the most suitable concept.
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
                            Build the application, implement functionalities, and ensure a smooth user interface.
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
                            Thoroughly test the application, gather feedback, and make necessary refinements.
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="feature-item-seven color-five mt-40 wow fadeInUp delay-0-2s">
                        <div className="icon">
                            <i className="flaticon-goal" />
                        </div>
                        <h5>App Launching</h5>
                        <p>
                            Prepare for a successful launch, promote the application, and celebrate your brand's new mobile presence.
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
                            src="assets/images/mobile/mob1.jpg"
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
                            <h2>Andriod App Development with Flutter, React Native & Kotlin</h2>
                        </div>
                        <p>
                        EquinoxDev offers cutting-edge Android app development services. 
                            Our expert developers proficient in React Native, Kotlin (MVVM), 
                            and Flutter transform your ideas into stunning and feature-rich applications.
                             Trust us to deliver exceptional craftsmanship, seamless functionality, and
                              innovative designs for the diverse Android ecosystem.
                        </p>
                  
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="responsive-design-area mb-130 rel z-1">
      <div className="container">
        <div className="row large-gap align-items-center">
          <div className="col-lg-6">
            <div className="responsive-design-content rmb-65 wow fadeInLeft delay-0-2s">
              <div className="section-title mb-25">
                <span className="sub-title style-two mb-15">
                  What We Offer
                </span>
                <h2>iOS App Devlopment with<br/>Swift, Swift UI & Objective-C</h2>
              </div>
                  At EquinoxDev, we excel in creating sleek and intuitive iOS applications. Our skilled developers specialize in Swift and Objective-C, ensuring seamless functionality, elegant designs, and a seamless user experience. Whether you need a productivity app or a gaming application, we develop high-quality iOS solutions aligned with your vision.
            </div>
          </div>
          <div className="col-lg-6">
            <div className="responsive-design-image wow fadeInRight delay-0-2s">
              <img
                src="assets/images/mobile/mob2.jpg"
                alt="Responsive Design"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
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
                                    src="assets/images/mobile/mob3.jpg"
                                    alt="FAQs"
                                />
                                <img
                                    className="image-two wow fadeInUp delay-0-4s"
                                    src="assets/images/mobile/mob4.jpg"
                                    alt="FAQs"
                                />
                            </div>
                            <div className="col-6 col-small">
                                <img
                                    className="image-three mt-95 wow fadeInUp delay-0-6s"
                                    src="assets/images/mobile/mob5.jpg"
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
                            <h2>Asked Questions about Mobile App Development</h2>
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
              <h2>Let’s Design Your New Mobile Application </h2>
              <p>
              Ready to elevate your mobile presence? Contact EquinoxDevs today and let's bring your App idea to life!
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
export default MobileDev;
