import React, { useState, useEffect } from 'react'
import "../component/header.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router';
import Loader from './loader';

function Payment() {
    const navigate = useNavigate();
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');
    const [validation, setValidation] = useState({})
    const [loading, setLoading] = useState(false)



    const formatExpiryDate = (event) => {
        const { name, value } = event.target
        let input = event.target.value.replace(/\D/g, '');
        let formattedValue = input;

        if (input.length > 2) {
            formattedValue = `${input.slice(0, 2)}/${input.slice(2, 4)}`;
            setValidation({ ...validation, [name]: "" })
            // setInpuvalues({ ...inputValues, [name]: value });
        }

        setExpiryDate(formattedValue);
    };


    const formatCardNumber = (event) => {
        const { name, value } = event.target
        let input = event.target.value.replace(/\s/g, ''); 
        let formattedValue = input.replace(/\D/g, ''); 

        if (formattedValue.length > 0) {
            formattedValue = formattedValue.match(/.{1,4}/g).join(' ');
            setValidation({ ...validation, [name]: "" })
            // setInpuvalues({ ...inputValues, [name]: value });
        }
        setCardNumber(formattedValue);
    };

    const token = localStorage.getItem('token')

    useEffect(() => {
        if(!token){
            navigate('/login')
        }

    })

    const checkValidation = () => {
        let errors = {};
        let isvalid = true;


        if (!cardNumber?.trim()) {
            errors.number = "Card number is required";
            isvalid = false
        }
        else {
            errors.number = "";
        }
        if (!expiryDate?.trim()) {
            errors.exp_date = "exp_date is required";
            isvalid = false
        }
        else {
            errors.exp_date = "";
        }

        if (!cvc?.trim()) {
            errors.cvc = "cvc is required";
            isvalid = false
        }
        else {
            errors.cvc = "";
        }
        setValidation(errors);
        return isvalid
    };

    function handleonchange(event) {
        const { name, value } = event.target
        setCvc(value)
        setValidation({ ...validation, [name]: "" })
    }
    const savedata = () => {
        let errors = validation;

        if (checkValidation()) {
            setLoading(true)
            const data = {cardNumber, expiryDate, cvc}
            fetch("http://127.0.0.1:5001/payment", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Authorization':`Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((result) => {
                setLoading(false)
                setCardNumber('')
                setCvc('')
                setExpiryDate('')

                if (result.status === 200) {
                    result.json().then((res) => {
                        toast.success("Payment Successfully", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        navigate('/login');
                    })
                }
                else if (result.status === 400) {
                    result.json().then((res) => {
                        if ("password" in res) {
                            toast.error(res.message, {
                                position: toast.POSITION.TOP_RIGHT
                            });
                        }
                        toast.error(res.message, {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    })
                }
                else if (result.status === 401){
                    navigate('/login')
                }
            }).catch((error) => {
                setLoading(false);
                toast.error('Something went wrong', {
                    position: toast.POSITION.TOP_RIGHT
                 });
            })
        }
    }
    return (
        // <div className="container mt-5">
        //   <div className="row justify-content-center">
        //     <div className="col-md-6">
        //       <div className="card">
        //         <div className="card-body">
        //           <h4 className="card-title">Payment Details</h4>
        //           <form onSubmit={handleSubmit}>
        //             <div className="form-group">
        //               <label htmlFor="cardNumber">Card Number</label>
        //               <input
        //                 type="text"
        //                 className="form-control"
        //                 id="cardNumber"
        //                 value={cardNumber}
        //                 onChange={(e) => setCardNumber(e.target.value)}
        //               />
        //             </div>
        //             <div className="form-group">
        //               <label htmlFor="expiryDate">Expiry Date</label>
        //               <input
        //                 type="text"
        //                 className="form-control"
        //                 id="expiryDate"
        //                 value={expiryDate}
        //                 onChange={(e) => setExpiryDate(e.target.value)}
        //               />
        //             </div>
        //             <div className="form-group">
        //               <label htmlFor="cvv">CVV</label>
        //               <input
        //                 type="text"
        //                 className="form-control"
        //                 id="cvv"
        //                 value={cvv}
        //                 onChange={(e) => setCvv(e.target.value)}
        //               />
        //             </div>
        //             <button type="submit" className="btn btn-primary">
        //               Pay Now
        //             </button>
        //           </form>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        // <div class="">
        //     <div class="container">


        //         <div class="row payment_form">

        //             <aside class="col-sm-12">


        //                 <article class="card">
        //                     <div class="card-body p-5">

        //                         <ul class="nav bg-light nav-pills rounded nav-fill mb-3" role="tablist">
        //                             <li class="nav-item">
        //                                 <a class="nav-link active" data-toggle="pill" href="#nav-tab-card">
        //                                     <i class="fa fa-credit-card"></i> Credit Card</a></li>
        //                         </ul>

        //                         <div class="tab-content">
        //                             <div class="tab-pane fade show active" id="nav-tab-card">
        //                                 <p class="alert alert-success">Some text success or error</p>
        //                                 <form role="form">
        //                                     <div class="form-group">
        //                                         <label for="username">Full name (on the card)</label>
        //                                         <input type="text" class="form-control" name="username" placeholder="" required="" />
        //                                     </div>

        //                                     <div class="form-group">
        //                                         <label for="cardNumber">Card number</label>
        //                                         <div class="input-group">
        //                                             <input type="text" class="form-control" name="cardNumber" placeholder="" />
        //                                             <div class="input-group-append">
        //                                                 <span class="input-group-text text-muted">
        //                                                     <i class="fab fa-cc-visa"></i>   <i class="fab fa-cc-amex"></i>
        //                                                     <i class="fab fa-cc-mastercard"></i>
        //                                                 </span>
        //                                             </div>
        //                                         </div>
        //                                     </div>

        //                                     <div class="row">
        //                                         <div class="col-sm-8">
        //                                             <div class="form-group">
        //                                                 <label><span class="hidden-xs">Expiration</span> </label>
        //                                                 <div class="input-group">
        //                                                     <input type="number" class="form-control" placeholder="MM" name="" />
        //                                                     <input type="number" class="form-control" placeholder="YY" name="" />
        //                                                 </div>
        //                                             </div>
        //                                         </div>
        //                                         <div class="col-sm-4">
        //                                             <div class="form-group">
        //                                                 <label data-toggle="tooltip" title="" data-original-title="3 digits code on back side of the card">CVV <i class="fa fa-question-circle"></i></label>
        //                                                 <input type="number" class="form-control" required="" />
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                     <button class="subscribe btn btn-primary btn-block" type="button"> Confirm  </button>
        //                                 </form>
        //                             </div>
        //                             <div class="tab-pane fade" id="nav-tab-paypal">
        //                                 <p>Paypal is easiest way to pay online</p>
        //                                 <p>
        //                                     <button type="button" class="btn btn-primary"> <i class="fab fa-paypal"></i> Log in my Paypal </button>
        //                                 </p>
        //                                 <p><strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        //                                     tempor incididunt ut labore et dolore magna aliqua. </p>
        //                             </div>
        //                             <div class="tab-pane fade" id="nav-tab-bank">
        //                                 <p>Bank accaunt details</p>
        //                                 <dl class="param">
        //                                     <dt>BANK: </dt>
        //                                     <dd> THE WORLD BANK</dd>
        //                                 </dl>
        //                                 <dl class="param">
        //                                     <dt>Accaunt number: </dt>
        //                                     <dd> 12345678912345</dd>
        //                                 </dl>
        //                                 <dl class="param">
        //                                     <dt>IBAN: </dt>
        //                                     <dd> 123456789</dd>
        //                                 </dl>
        //                                 <p><strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        //                                     tempor incididunt ut labore et dolore magna aliqua. </p>
        //                             </div>
        //                         </div>

        //                     </div>
        //                 </article>


        //             </aside>
        //         </div>
        //     </div>


        //     <br /><br />

        // </div>
        <div>
            { loading &&
                <Loader />
            }
        <div className='bg_payment'>
            <div className='min-vh-100 h-100'>
                <div className='payment_page p-3'>
                    {/* <img src="logo.png" alt="" /> */}
                    <a href="" className="comapnay_logo">
              <img src="Logo.png" className="company-logo" alt="" />
            </a>
                </div>
                <div class="container py-5 d-flex justify-content-center ">
                    <div class="row g-3 mt-3">
                        <div class="col-12 col-xl-6 text-center">
                            <span>Payment Method</span>
                            <div class="card payment_card mt-2 mx-auto">
                                <div class="accordion" id="accordionExample">

                                    {/* <div class="card">
          <div class="card-header p-0" id="headingTwo">
            <h2 class="mb-0">
              <button class="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <div class="d-flex align-items-center justify-content-between">

                  <span>Paypal</span>
                  <img src="https://i.imgur.com/7kQEsHU.png" width="30"/>
                  
                </div>
              </button>
            </h2>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
              <input type="text" class="form-control" placeholder="Paypal email"/>
            </div>
          </div>
        </div> */}

                                    <div class="card payment_card">
                                        <div class="card-header p-0">
                                            <h2 class="mb-0">
                                                <button class="btn btn-light btn-block text-left p-3 rounded-0 payment_icons" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <span>Credit card</span>
                                                        <div class="icons">
                                                            <img src="https://i.imgur.com/2ISgYja.png" width="30" />
                                                            <img src="https://i.imgur.com/W1vtnOV.png" width="30" />
                                                            <img src="https://i.imgur.com/35tC99g.png" width="30" />
                                                        </div>
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div class="card-body payment-card-body">
                                                <span class="font-weight-normal card-text">Card Number</span>
                                                <div class="input">
                                                    <i class="fa fa-credit-card"></i>
                                                    <input type="text" class="form-control" name='number' placeholder="0000 0000 0000 0000" value={cardNumber}
                        maxLength="19" onChange={(e) => formatCardNumber(e)} />
                                                    {validation.number && <p style={{"color":"red"}}>{validation.number}</p>}
                                                </div>
                                                <div class="row mt-3 mb-3">
                                                    <div class="col-md-6">
                                                        <span class="font-weight-normal card-text">Expiry Date</span>
                                                        <div class="input">
                                                            <i class="fa fa-calendar"></i>
                                                            <input type="text" name='exp_date' class="form-control" placeholder="MM/YY" value={expiryDate} onChange={(e) => formatExpiryDate(e)}/>
                                                            {validation.exp_date && <p style={{"color":"red"}}>{validation.exp_date}</p>}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <span class="font-weight-normal card-text">CVC/CVV</span>
                                                        <div class="input">
                                                            <i class="fa fa-lock"></i>
                                                            <input type="text" class="form-control" name='cvc' placeholder="000" value={cvc} maxlength="3" onChange={(e) => handleonchange(e)} />
                                                            {validation.cvc && <p style={{"color":"red"}}>{validation.cvc}</p>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <span class="text-muted certificate-text"><i class="fa fa-lock"></i> Your transaction is secured with ssl certificate</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-xl-6 text-center">
                            <span>Summary</span>
                            <div class="card payment_card mt-2 mx-auto">
                                {/* <div className='d-flex justify-content-between p-3'>
                                <p>Plans: <b>Plans Name</b></p>
                                <a href="">plans details</a>
                            </div>
                            <hr class="mt-0 line" /> */}
                                <div class="d-flex justify-content-between p-4">
                                    <div class="d-flex flex-column">
                                        <span>Pro(Billed Monthly) <i class="fa fa-caret-down"></i></span>
                                        {/* <a href="#" class="billing">Save 20% with annual billing</a> */}
                                    </div>
                                    <div class="mt-1">
                                        <sup class="super-price">$39</sup>
                                        <span class="super-month">/Month</span>
                                    </div>
                                </div>
                                <ToastContainer />
                                {/* <div class="p-3">
                                <div class="d-flex justify-content-between mb-2">
                                    <span>Refferal Bonouses</span>
                                    <span>-$2.00</span>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <span>Vat <i class="fa fa-clock-o"></i></span>
                                    <span>-20%</span>
                                </div>
                            </div> */}
                                <hr class="mt-0 line" />
                                {/* <div class="p-3 d-flex justify-content-between">
                                <div class="d-flex flex-column">
                                    <span>Today you pay(US Dollars)</span>
                                    <small>After 30 days $9.59</small>
                                </div>
                                <span>$0</span>
                            </div> */}
                                <div class="p-3">
                                    <button type='button' class="btn btn-primary btn-block free-button px-5"  onClick={savedata}>Submit</button>
                                    <div class="text-center">
                                        {/* <a href="#">Have a promo code?</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Payment