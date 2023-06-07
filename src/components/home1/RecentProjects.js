import Link from "next/link";
import Slider from "react-slick";
import { projectThreeActive } from "../../sliderProps";

const RecentProjects = () => {
  return (
    <section className="project-area-three py-130 rel z-1" id="project">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg10">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Recent Projects</span>
              <h2>Look at latest works gallery</h2>
            </div>
          </div>
        </div>
      </div>
      <Slider {...projectThreeActive} className="project-three-active">
        <div className="project-item style-two wow fadeInUp delay-0-2s">
          <div className="project-iamge">
            <img
              src="assets/images/projects/s1.png"
              alt="Project"
            />
            <div className="project-over">
              <Link href="/Dstage">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
              </a>
              </Link>
            </div>
          </div>
          <div className="project-content">
            <h4>
              <Link href="/project-details">NFT Marketplace</Link>
            </h4>
            <span className="category">React.js Web3 </span>
          </div>
        </div>
        <div className="project-item style-two wow fadeInUp delay-0-4s">
          <div className="project-iamge">
            <img
              src="assets/images/projects/s2.png"
              alt="Project"
            />
            <div className="project-over">
              <Link href="/Nftes-Collection">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-content">
            <h4>
              <Link href="/project-details">NFT Marketplace</Link>
            </h4>
            <span className="category">React.js Web3</span>
          </div>
        </div>
        <div className="project-item style-two wow fadeInUp delay-0-6s">
          <div className="project-iamge">
            <img
              src="assets/images/projects/s4.png"
              alt="Project"
            />
            <div className="project-over">
              <Link href="/Coin-Tossing-Game">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-content">
            <h4>
              <Link href="/project-details">Coin Tossing Game </Link>
            </h4>
            <span className="category">BlockChain</span>
          </div>
        </div>
        <div className="project-item style-two wow fadeInUp delay-0-8s">
          <div className="project-iamge">
            <img
              src="assets/images/projects/s5.png"
              alt="Project"
            />
            <div className="project-over">
              <Link href="/school-room-chat">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-content">
            <h4>
              <Link href="/project-details">School Room Help</Link>
            </h4>
            <span className="category">Chat App</span>
          </div>
        </div>
      </Slider>
    </section>
  );
};
export default RecentProjects;
