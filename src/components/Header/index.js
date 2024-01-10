import { CiHeart, CiMobile3 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiMenuFries } from "react-icons/ci";
import { MdLogin, MdOutlineMenu } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import "./index.css";

const Header = () => (
  <nav className="nav-bar-con">
    <div className="header-logo">
      <img
        src="https://prod-static-assets.amberstudent.com/images/amber-hd.svg?auto=format"
        alt="amber"
        className="amber-logo"
      />
    </div>
    <div className="menu">
      <CiMenuFries size={25} color="#ffffff" />
    </div>
    <div className="header-right-side-section">
      <div className="section">
        <CiMobile3 size={25} className="icon" />
        <button type="button" className="header-heading-button">
          DownLoad App
        </button>
      </div>
      <div className="section">
        <BiSupport size={25} className="icon" />
        <button type="button" className="header-heading-button">
          Support
        </button>
      </div>
      <div className="section">
        <CiHeart size={25} className="icon" />
        <button type="button" className="header-heading-button">
          Shortlist
        </button>
      </div>
      <div className="login-section">
        <MdLogin size={25} className="icon" />
        <button type="button" className="login-btn">
          Login
        </button>
      </div>
      <div className="menu-section">
        <CgProfile size={25} className="icon" />
        <MdOutlineMenu size={25} className="icon" />
      </div>
    </div>
  </nav>
);

export default Header;
