import Link from "next/link";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;

    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const Footer1 = () => (
  <footer className="main-footer footer-two pt-80 bgc-lighter">
    <div className="container">
      <div className="row justify-content-xl-between justify-content-center">
        <div className="col-xl-4 col-lg-5 col-md-6">
          <div className="footer-widget widget_about me-md-5 wow fadeInUp delay-0-2s">
            <div className="footer-logo mb-25">
              <Link href="/">
                <a>
                  <img style={{ width: "205px", height: "120px" }}
                  src="assets/images/logos/EQlogo.png" alt="Logo" />
                </a>
              </Link>
            </div>
            <p>
            EquinoxDevs, provider of comprehensive IT solutions tailored to meet your unique needs.
           Our team of seasoned experts combines technical excellence with creative thinking to deliver exceptional results. 
           We empower businesses across industries to thrive in today's digital landscape. 
           Explore our services and discover how we can elevate your organization to new heights.
            </p>
            <div className="social-style-two pt-5">
               <a href="https://www.facebook.com/equinoxdevs" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f" />
              </a>
              {/*<a href="#">
                <i className="fab fa-twitter" />
</a>*/}
              <a href="https://www.linkedin.com/company/equinoxdevs/posts" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in" />
              </a>
              {/*<a href="#">
                <i className="fab fa-behance" />
</a>*/}
            </div>
          </div>
        </div>
        <div className="col-xl-5 col-md-7">
        <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="list-style-two">
              <li>
                <Link href="/WebDev">Web App Development </Link>
              </li>
              <li>
                <Link href="/MobileDev">Mobile App Development</Link>
              </li>
            
              <li>
                <Link href="/SEO">SEO Optimization</Link>
              </li>
              <li>
                <Link href="/DevOps">DevOps Services</Link>
              </li>
              <li>
                <Link href="/CustomEnterprise">Enterprise Solutions</Link>
              </li>
             {/* <li>
                <Link href="/blog">Latest News</Link>
              </li>*/}
              <li>
                <Link href="/#featured">Explore Services</Link>
              </li>
              <li>
                <Link href="/contactus">Contact</Link>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-8">
         {/* <div className="footer-widget widget_newsletter wow fadeInUp delay-0-6s">
            <h4 className="footer-title">Newsletter</h4>
            <p>Sing up to get more every updates</p>
            <form onSubmit={(e) => e.preventDefault()} action="#">
              <input type="email" placeholder="Enter email" required="" />
              <button className="theme-btn">
                Subscribe Now <i className="fas fa-angle-double-right" />
              </button>
            </form>
            </div>*/}
</div>
      </div>
    </div>
    <div className="footer-bottom mt-30 pt-25 pb-10">
      <div className="container">
        <div className="copyright-text text-center">
          <p>© Copyright 2023 EquinoxDevs LLP. All right reserved</p>
        </div>
      </div>
    </div>
  </footer>
);


const DefaultFooter = () => (
  <footer className="main-footer footer-two pt-80 bgc-lighter">
    <div className="container">
      <div className="row justify-content-xl-between justify-content-center">
        <div className="col-xl-4 col-lg-5 col-md-6">
          <div className="footer-widget widget_about me-md-5 wow fadeInUp delay-0-2s">
            <div className="footer-logo mb-25">
              <Link href="/">
                <a>
                  <img style={{ width: "205px", height: "120px" }}
                  src="assets/images/logos/EQlogo.png" alt="Logo" />
                </a>
              </Link>
            </div>
            <p>
            EquinoxDevs, provider of comprehensive IT solutions tailored to meet your unique needs.
           Our team of seasoned experts combines technical excellence with creative thinking to deliver exceptional results. 
           We empower businesses across industries to thrive in today's digital landscape. 
           Explore our services and discover how we can elevate your organization to new heights.
            </p>
            <div className="social-style-two pt-5">
              <a href="https://www.facebook.com/equinoxdevs">
                <i className="fab fa-facebook-f" />
              </a>
              {/*<a href="#">
                <i className="fab fa-twitter" />
</a>*/}
              <a href="https://www.linkedin.com/company/equinoxdevs/posts">
                <i className="fab fa-linkedin-in" />
              </a>
              {/*<a href="#">
                <i className="fab fa-behance" />
</a>*/}
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="list-style-two">
              <li>
                <Link href="/WebDev">Wed App Development </Link>
              </li>
              <li>
                <Link href="/MobileDev">Mobile App Development</Link>
              </li>
             {/* <li>
                <Link href="/team">Meet our teams</Link>
              </li>*/}
              <li>
                <Link href="/SEO">Search Engine Optimization</Link>
              </li>
              <li>
                <Link href="/DevOps">DevOps Services</Link>
              </li>
              <li>
                <Link href="/CustomEnterprise">Enterprise Solutions</Link>
              </li>
             {/* <li>
                <Link href="/blog">Latest News</Link>
              </li>*/}
              <li>
                <Link href="/#featured">Explore Services</Link>
              </li>
              <li>
                <Link href="/contactus">Contact</Link>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-8">
          <div className="footer-widget widget_newsletter wow fadeInUp delay-0-6s">
            <h4 className="footer-title">Newsletter</h4>
            <p>Sing up to get more every updates</p>
            <form onSubmit={(e) => e.preventDefault()} action="#">
              <input type="email" placeholder="Enter email" required="" />
              <button className="theme-btn">
                Subscribe Now <i className="fas fa-angle-double-right" />
              </button>
            </form>
          </div>
</div>
      </div>
    </div>
    <div className="footer-bottom mt-30 pt-25 pb-10">
      <div className="container">
        <div className="copyright-text text-center">
          <p>© Copyright 2023 EquinoxDevs LLP. All right reserved</p>
        </div>
      </div>
    </div>
  </footer>
);
