import { BsFacebook, BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineYoutube } from "react-icons/ai";


import "../component/header.css"
import { useTranslation } from 'react-i18next';

function Footer() {

    const { t } = useTranslation();
    
    return (
        <div className="footer">
            <div className="wrapper container-fluid">
                <div className="sub-footer row align-items-center">
                    <div className="col-12 col-lg-4 text-center my-3 my-lg-0 text-md-left">
                    <a href="" className="comapnay_logo">
                            <img src="Logo.png" className="company-logo" alt="" />
                        </a>
                    </div>
                    <div  className="col-12 col-lg-4 text-center my-3 my-lg-0 text-lg-left">
                        <h2 className="text-light">{t('Other Platforms')}</h2>
                        <div className="d-flex flex-column">
                            <a className="text-light  text-left" href="https://ebookgenerator.ai/">{t('Ebook Generator')}</a>
                            <a className="text-light  text-left" href="https://copygenerator.ai/">{t('Copy Generator')}</a>
                            <a className="text-light  text-left" href="https://cursos.dankicode.com/">{t('Danki Code')}</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 text-center my-3 my-lg-0 text-lg-left">
                        <h2 className="text-light">{t('follow us')}</h2>
                        <div className="medias">
                            <a href="">
                                <BsFacebook className="text-light social-icon" />
                            </a>
                            <a href="">
                                <BsInstagram className="text-light social-icon" />
                            </a>
                            <a href="">
                                <BiLogoLinkedin className="text-light social-icon" />
                            </a>
                            <a href="">
                                <AiOutlineYoutube className="text-light social-icon" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;