import "../component/header.css"
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'react-i18next';

function Faq() {

    const { t } = useTranslation();

    return (
        <div className="faq mb-4 mt-5">
            <div className="container">
                <h2 className="text-center mt-2 faq-heading">{t('Frequently Asked Questions')}</h2>
                <div className="row justify-content-center">
                    <div className="col-12 mb-5">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{t('Q1')}</Accordion.Header>
                                <Accordion.Body>
                                    {t('Ans: Our tool uses the power of GPT-4 AI to transform unorganized text data into a structured, tabular format with custom headings, ready for download in a CSV format.')}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="col-12 mb-5">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{t('Q2')}</Accordion.Header>
                                <Accordion.Body>
                                    {t('Ans: Any kind of unorganized text data can be processed. Our tool is versatile enough to handle a wide range of data types and will structure them effectively.')}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="col-12 mb-5">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{t('Q3')}</Accordion.Header>
                                <Accordion.Body>
                                    {t('Ans: At present, we do not offer a free version of our service. We believe in delivering premium value, hence we have a single, comprehensive monthly unlimited plan that provides unrestricted access to our data organization tool.')}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="col-12 mb-5">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{t('Q4')}</Accordion.Header>
                                <Accordion.Body>
                                    {t('Ans: We have a single pricing plan that gives you unlimited access to our tool for a monthly fee. Please refer to our Pricing section for detailed information.')}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="col-12 mb-5">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{t('Q5')}</Accordion.Header>
                                <Accordion.Body>
                                    {t('Ans: Payments are handled securely online via our website. We accept all major credit cards and other popular payment methods.')}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="col-12 mb-5">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{t('Q6')}</Accordion.Header>
                                <Accordion.Body>
                                    {t('Ans: Yes, you can cancel your subscription at any time. If you cancel, you ll have access to our tool until the end of your current billing cycle.')}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;