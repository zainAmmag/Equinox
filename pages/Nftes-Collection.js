import Link from "next/link";
import Slider from "react-slick";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import { projectThreeActive } from "../src/sliderProps";
import project1 from "../public/assets/images/projects/s1.png"
import { useRouter } from "next/router";

const ProjectsDetails = () => {
  const router = useRouter();

  // Access the passed integer prop
  const  prop =1
  const heading=["Dstage || BlockChain",
  "Nftes Collection #002 Moonwalkers || BlockChain",
  "Coin Tossing Game || BlockChain",
  "School Room Help (Chat App)"

]
  const Detail =["DStage is an NFT marketplace trading platform facilitated by a decentralized team of NFT enthusiasts. Please read these Terms of service carefully. By using the DStage marketplace, you agree that you have read and understood the terms in these Terms of Service which are applicable to you. These Terms of Service a constitute a legally binding agreement “Agreement” between you and DStage. The Agreement applies to your use of the DStage marketplace. If you do not agree to the Terms of Service please do not use or continue using the DStage marketplace.",
"The NFTs have arrived in Spain! Join the CLUB and enjoy all the surprises of NFTespaña.The users can buy random nft by minting process then he can use this nft as discount tokens and some other features.",
"Sol Big Win may choose to pay higher rewards for unusually clever or severe vulnerabilities or lower rewards for vulnerabilities that require significant or unusual user interaction.To recognize their efforts and the important role they play in keeping Sol Big Win safe for everyone, we offer a bounty for reporting certain qualifying security vulnerabilities.",
"This is MERN stack project.Its frontend was in react which is chat application and it connect all the schools students to each other. They can share there nots and take meetings between them and also then can make groups in this chat applications.Student can also discuss there slabus and me after that meeting room for there lectures."
]
const information=["This project was done in next-js,React-js and node-js with blockChain contract.DStage is the worlds first and largest Asian NFT marketplace. You can create your storefront and create your nfts and your own collections.",
"This project was done in next-js,React-js and node-js with blockChain contract.Moonwalkers is collection #002 of NFTespaña, our first digital collectibles. 1,000 unique NFTs , made up of 7 layers that bind together more than 150 different illustrations, creating an incredible piece of digital art.Each Moonwalker is unique in the world and they all serve as a VIP pass to the Moonwalkers Club , the most fun and urban area of ​​NFTespaña. They are all awesome, but some are weirder than others.",
"This project was done in next-js, react-js, and node-js with solana blockChain contract.Coin toss is a fun game on Solana and we want all of our players to play responsibly. Please only play with Sol you are comfortable parting with that won’t impact your well-being.",
"Every school students can make chat room between them and send chat and share files,notes,links,tag to each other,and received real time notifications"
]
const images=["assets/images/projects/s1.png",
"assets/images/projects/s2.png",
"assets/images/projects/s3.png",
"assets/images/projects/s5.png"
]

  return (
    <Layout>
      <PageBanner
        titleHtml={`Project D<span>etails</span>`}
        titleText="Project Details"
      />
      <section className="project-details-area pt-130 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
            <h2>{heading[parseInt(prop)]}</h2>
            </div>
          <div className="details-image mb-55 wow fadeInUp delay-0-3s">
            <img
               src={images[parseInt(prop)]}
              alt="Project Details"
            />
          </div>
          <div className="row pb-25">
            <div className="col-xl-5 col-lg-4">
              <h4 className="title mb-15 rmb-30">Project Information</h4>
            </div>
         <p>
          {
            information[parseInt(prop)]
          }
         </p>
          </div>
          <hr />
          <h4 className="title mt-55 mb-15">Project Details</h4>
          <p>
           {
            Detail[parseInt(prop)]
           }
          </p>
         
          <hr className="mt-50" />
          {/* <div className="next-prev-project py-65">
            <div className="prev-project wow fadeInLeft delay-0-2s">
              <div className="image">
                <img
                  src={images[parseInt(prop)]}
                  alt="Project"
                />
              </div>
              <div className="content">
                <h5>
                  <Link href="/project-details">Dashboard Design</Link>
                </h5>
                <span className="category">Creative, Branding</span>
                <Link href="/project-details">
                  <a className="read-more">
                    View Details <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <Link href="/projects">
              <a className="show-all">
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
              </a>
            </Link>
            <div className="next-project wow fadeInRight delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/nex-project.jpg"
                  alt="Project"
                />
              </div>
              <div className="content">
                <h5>
                  <Link href="/project-details">Creative Pattern</Link>
                </h5>
                <span className="category">Mokeup, Branding</span>
                <Link href="/project-details">
                  <a className="read-more">
                    View Details <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div> */}
          <hr />
        </div>
      </section>
      {/* Project Details Area end */}
      {/* Related Project Area start */}
  
      {/* Related Project Area end */}
    </Layout>
  );
};
export default ProjectsDetails;
