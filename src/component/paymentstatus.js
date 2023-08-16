import React from 'react'
import { Col, Button, Row, Container, } from 'react-bootstrap';
import "../component/header.css"
import { Link } from 'react-router-dom';

function paymentstatus() {
  return (
    <div className='vh-100'>
        <Container className='h-100 d-flex flex-column justify-content-center'>
                <Row className="d-flex justify-content-center align-items-center">
                    <div className='main_page_bg'>
                        <h1>Your Plan is <span>Expired</span> <br /> or <br /> You Need To <span>Buy Plan</span> First</h1>
                        <Col md={8} lg={9} xs={12} className='m-auto'>
                            <div className="d-grid mt-4 mb-4 main_button">
                            <button type='button' class="btn btn-primary btn-block free-button px-5"><Link to="/payment" className='status_button'>Subscribe Now</Link></button>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
    </div>
  )
}

export default paymentstatus