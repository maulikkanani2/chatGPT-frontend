import "../component/header.css"
import { AiFillStar } from "react-icons/ai";
import { useTranslation } from 'react-i18next';

function Reviews() {

    const { t } = useTranslation();

    return (
        <div className="reviews">
            <div className="reviews_heading">
                <h2>{t('what our customer says')}</h2>
                <div className="devider"></div>
            </div>
            <div className="container">

            
            <div className="reviews_box row gy-3 gy-lg-0">
                <div className="col-12 col-lg-5">
                    <div className="reviews_item h-100">
                        <div className="reviews_provider">
                            <img src="women.jpg" alt="" />
                            <div className="reviews_content">
                                <h4>{t('Emma J.')}</h4>
                                <span>{t('Data Analyst')}</span>
                            </div>
                        </div>
                        <div className="reviews_info">
                            <p>{t('This tool is a game-changer! I ve dealt with heaps of unorganized text data for years, and this tool transforms it into a structured format in no time. The GPT-4 integration is impressive – the headings it generates are spot on. Its saved me countless hours and boosted my productivity significantly.')}</p>
                        </div>
                        <div className="reviews_reason">
                            <h5>{t('Customer Support')}</h5>
                            <div className="reviews_rating">
                                <AiFillStar className="color" />
                                <AiFillStar className="color" />
                                <AiFillStar className="color" />
                                <AiFillStar className="color" />
                                <AiFillStar className="color" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-5">
                    <div className="reviews_item h-100">
                        <div className="reviews_provider">
                            <img src="John-K.jpg" alt="" />
                            <div className="reviews_content">
                                <h4>{t('John K.')}</h4>
                                <span>{t('Research Scientist')}</span>
                            </div>
                        </div>
                        <div className="reviews_info">
                            <p>{t('The ability to download organized data in CSV format is a real lifesaver. I deal with loads of text data in my research, and this tool has completely revolutionized my workflow. The monthly unlimited plan is worth every penny.')}
                            </p>
                        </div>
                        <div className="reviews_reason">
                            <h5>{t('Customer Support')}</h5>
                            <div className="reviews_rating">
                                <AiFillStar className="color" />
                                <AiFillStar className="color" />
                                <AiFillStar className="color" />
                                <AiFillStar className="color" />
                                <AiFillStar className="color" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Reviews;