import "../component/header.css"
import { BsCheckLg } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Pricing() {

    const { t } = useTranslation();

    return (
        <div className="pricing" id="pricing">
            <div className="pricing_bg">
                <div className="pricing_heading">
                    <h2>{t('Pricing')}</h2>
                    <div className="devider"></div>
                </div>
                <div className="container-fluid">
                    <div className="pricing-box row align-items-center ">
                        <div className="single-item left-box col-12 text-center col-lg-6 d-lg-block d-none">
                            <img src="Pricing Image.png" alt="" />
                        </div>
                        <div className="single-item right-box col-12 col-lg-6 mt-5 mt-lg-0">
                            <div className="pri_bg">
                                <div className="pricing_details">
                                    <div className="pricing_price">
                                        <h1>{t('$39')}</h1>
                                        <span>{t('/monthly')}</span>
                                    </div>
                                    <p>{t('Ready to experience a new level of data clarity? Start transforming your text data today.')}</p>
                                </div>
                                <div className="Pricing_benfits">
                                    <div className="all_benfits d-flex  mb-3">
                                        <span><BsCheckLg /></span>
                                        <p className="mb-0">{t('Start Organizing Now')}</p>
                                    </div>
                                    <div className="all_benfits d-flex  mb-3">
                                        <span><BsCheckLg /></span>
                                        <p className="mb-0">{t('Monthly Unlimited Plan')}</p>
                                    </div>
                                    <div className="all_benfits d-flex  mb-3">
                                        <span><BsCheckLg /></span>
                                        <p className="mb-0">{t('Transform Your Text')}</p>
                                    </div>
                                    <div className="all_benfits d-flex  mb-3">
                                        <span><BsCheckLg /></span>
                                        <p className="mb-0">{t('Unlock Data Potential')}</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link to="/signup"><button className="col-8 pricing_btn">{t('Join us today')}</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;