import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Outlet />
      <div className="w-full bg-secondary text-white">
        <div className="w-11/12 mx-auto pt-28 pb-16">
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2  text-white/60 leading-7">
            <div className="mb-8">
              <p className="text-lg text-white/80 font-montserrat mb-2">
                Best Tutorials
              </p>
              <p>How to Start a Blog</p>
              <p>How to Start a Podcast</p>
              <p>How to Choose a Domain Name</p>
              <p>How To Write an About Me Page</p>
            </div>
            <div>
              <p className="text-lg text-white/80 font-montserrat mb-2">
                Hosting For Bloggers
              </p>
              <p>Best Blog Hosting Sites</p>
              <p>Bluehost Review</p>
              <p>Kinsta Review</p>
              <p>Best Podcast Hosting</p>
            </div>
          </div>
          <hr className="w-full my-20 mx-auto text-white/30" />
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 text-white/60 text-sm tracking-[0.25em] leading-7">
            <div className="mb-8">
              <p>Blog</p>
              <p>About us</p>
              <p>What We Recommend</p>
            </div>
            <div className="mb-8">
              <p>Free Themes</p>
              <p>Documentation</p>
              <p>Support</p>
            </div>
            <div>
              <p>Terms and Conditions</p>
              <p>Privacy Policy</p>
              <p>Support Policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
