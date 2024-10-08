import logo from "../../../assets/logo.png";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200">
      <div className="footer text-base-content p-2 md:p-4">
        <nav>
          <aside className="footer-title">
            <div className="h-20">
              <img className="h-full rounded" src={logo} alt="" />
            </div>
            <address className="text-xs md:text-base">
              <p>Danmondi, Dhaka South, Dhaka.</p>
              <p>Tell: +24772500000</p>
              <p>Phone: +880171000000</p>
            </address>
          </aside>
          <div className="grid grid-flow-col justify-center items-center gap-4 md:gap-6 text-xl md:text-2xl">
            <a href="https://twitter.com/home">
              <FaTwitter></FaTwitter>
            </a>
            <a href="https://www.youtube.com/">
              <FaYoutube></FaYoutube>
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebook></FaFacebook>
            </a>
          </div>
        </nav>

        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-24 md:w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item text-xs md:text-base"
              />
              <button className="btn btn-warning join-item text-xs md:text-base">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="footer-center text-center text-base-content rounded space-y-2 pb-2">
        
          <p className="text-xs md:text-base text-start md:text-center ps-2">
            Copyright © {new Date().getFullYear()} - All right reserved by Job
            Tracker Team
          </p>
        
      </div>
    </footer>
  );
};

export default Footer;
