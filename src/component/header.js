import "../component/header.css"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageOption from "../component/language-dropdown";
import {MdAccountCircle} from 'react-icons/md'

function Header() {

    const { t } = useTranslation();

    return (
      <div className="header">
        <div className="wrapper">
          <div className="home d-flex flex-column flex-md-row justify-content-between">
            <a href="" className="comapnay_logo">
              <img src="Logo.png" className="company-logo" alt="" />
            </a>
           
            <div className="dropdown">
              <div className="menu">
                <img src="menu.svg" alt="" />
              </div>
              <nav className="header-buttons ">
                <Link to="/login" className="login-btn">
                  <MdAccountCircle color="white" size={"25px"}/>
                  <span className="login">{t("Login")}</span>
                </Link>
                <div className="toggler">
                  <a href="#pricing" className="button-link">
                    {t("SignUp")}
                  </a>
                  <span>
                    <LanguageOption />
                  </span>
                </div>
              </nav>
            </div>
          </div>
          <div>
            <div className="header-title">
                <h1 className="text-center">
                {t("Transform Chaos into Clarity with Our Revolutionary Data Organization Tool")}
               
                </h1>
              <p className="text-center">
                
                {t('Unlock the power of AI and bring order to your unorganized text data')} <br /> {t("with our intuitive, GPT-4 powered tool.")}
              </p>
            </div>
            <div className="sub-header d-flex justify-content-between">
              <div className="first">
                {/* <img src="from-img (2).png" alt="" /> */}
              </div>
              <div className="arrow-wrapper">
                <span className="arrow-label"> {t('From Messy to Managed')}</span>
                <img
                  src="curved-arrow (1).png"
                  alt=""
                  className="curved_image"
                />
                <span className="instantly">{t('Instantly')}</span>
              </div>
              <div className="second">
                {/* <img src="to-img2.png" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header;