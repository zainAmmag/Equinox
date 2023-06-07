import Link from "next/link";
import Slider from "react-slick";

const Hero1 = () => {
  const props = {
    infinite: true,
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToScroll: 1,
    slidesToShow: 1,
  };
  return (
    <section
      id="home"
      className="main-slider-area bgc-black-with-lighting rel z-1"
    >
      <Slider {...props} className="main-slider-active">
        <div className="slider-item">
          <div className="container">
            <div className="slider-content">
              {/* <span className="sub-title">
                25 Years of Experience in web design solutions
              </span> */}
              <h2 style={{color:"white"}}>Web Development Solutions <br/>and IT Services</h2>
              <div className="slider-btns">
                 <Link href="/contactus">
                  <a className="theme-btn">
                    Get Started Us <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <Link href="#featured">
                  <a className="theme-btn style-three">
                    Explore Services <i className="fas fa-angle-double-right" />
                  </a>
                </Link> 
              </div>
            </div>
          </div>
          <div
            className="slider-video"
            style={{height:"650px", width:"650px", 
              backgroundImage: "url(assets/images/home/home1.jpg)",
            }}
          >
         
          </div>
        </div>
        <div className="slider-item">
          <div className="container">
            <div className="slider-content">
              {/* <span className="sub-title">
                25 Years of Experience in web design solutions
              </span> */}
<h2 style={{color:"white"}}>Mobile Application Solutions <br/>and Development</h2>
              
              <div className="slider-btns">
                 <Link href="/contactus">
                  <a className="theme-btn">
                    Get Started Us <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <Link href="#featured">
                  <a className="theme-btn style-three">
                    Explore Services <i className="fas fa-angle-double-right" />
                  </a>
                </Link> 
              </div>
            </div>
          </div>
          <div
            className="slider-video"
            style={{height:"650px", width:"650px",
              backgroundImage: "url(assets/images/home/home2.jpg)",
            }}
          >
          
          </div>
        </div>
        <div className="slider-item">
          <div className="container">
            <div className="slider-content">
              {/* <span className="sub-title">
                25 Years of Experience in web design solutions
              </span> */}
             <h2 style={{color:"white"}}>DevOps Engineering and Services</h2>
               <div className="slider-btns">
               <div className="slider-btns">
                 <Link href="/contactus">
                  <a className="theme-btn">
                    Get Started Us <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <Link href="#featured">
                  <a className="theme-btn style-three">
                    Explore Services <i className="fas fa-angle-double-right" />
                  </a>
                </Link> 
              </div>
              </div>
            </div>
          </div>
          <div
            className="slider-video"
            style={{height:"650px", width:"650px",
              backgroundImage: "url(assets/images/home/home3.jpg)",
            }}
          >
          
          </div>
        </div>
      </Slider>
      <div className="container">
        <div className="main-slider-dots" />
      </div>
      <div className="slider-shapes">
        <img
          className="shape dots one"
          src="assets/images/shapes/slider-dots.png"
          alt="Shape"
        />
        <img
          className="shape dots two"
          src="assets/images/shapes/slider-dots.png"
          alt="Shape"
        />
        <img
          className="shape wave-line"
          src="assets/images/shapes/slider-wave-line.png"
          alt="Shape"
        />
        <img
          className="shape circle"
          src="assets/images/shapes/slider-circle.png"
          alt="Shape"
        />
      </div>
    </section>
  );
};
export default Hero1;
