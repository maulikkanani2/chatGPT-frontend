import "../component/header.css"
import { useTranslation } from 'react-i18next';

function Benefits() {

    const { t } = useTranslation();

    return (
        <div className="benefits">
            <div className="wrapper">
                <div className="benefits_heading">
                    <h2>{t('WHY CHOOSE US?')}</h2>
                    <div className="devider"></div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-12 my-3 my-xl-0">
                            <div className="card_details">
                                <h4>
                                    <a href="">{t('Innovative GPT-4 Integration')}</a>
                                </h4>
                                <div className="icon">
                                    <img src="icon1.png" alt="" />
                                </div>
                                <p>{t('Our data organization tool uses the latest in AI technology to intelligently parse, organize, and label your data in meaningful ways, going beyond mere structuring.')}
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-12 my-3 my-xl-0">
                            <div className="card_details">
                                <h4>
                                    <a href="">{t('Easy to Use')}</a>
                                </h4>
                                <div className="icon">
                                    <img src="icon2.png" alt="" />
                                </div>
                                <p>{t('Simply upload your unorganized text data and watch as our tool seamlessly transforms it into a structured, tabular format. Its data organization made hassle-free')}
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-12 my-3 my-xl-0">
                            <div className="card_details">
                                <h4>
                                    <a href="">{t('Custom Headings')}</a>
                                </h4>
                                <div className="icon">
                                    <img src="icon3.png" alt="" />
                                </div>
                                <p>{t('Let GPT-4 generate insightful headings that capture the essence of your data. Say goodbye to the guesswork of manual labeling')}
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-12 my-3 my-xl-0">
                            <div className="card_details">
                                <h4>
                                    <a href="">{t('Exportable Data')}</a>
                                </h4>
                                <div className="icon">
                                    <img src="icon4.png" alt="" />
                                </div>
                                <p>{t('Need to share your newly organized data? No problem! Download your data in an easy-to-use CSV format.')}
                                </p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default Benefits;