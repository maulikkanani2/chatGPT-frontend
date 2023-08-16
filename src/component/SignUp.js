import React, { useState } from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import "../component/header.css"
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom';
import Loader from './loader';

function SignUp() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [inputValues, setInpuvalues] = useState({
        username: "",
        email:"",
        password:"",
        confirm_password:""
    });
    const[validation, setValidation] = useState({})

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
      };
    

    const checkValidation = () => {
        let errors = {};
        let isvalid = true;

        if (!inputValues?.username?.trim()){
            errors.username = "Username is required";
            isvalid = false
        }
        else {
            errors.username = "";
        }
        if (!inputValues?.email?.trim()){
            errors.email = "Email is required";
            isvalid = false
        }else if (!validateEmail(inputValues.email)) {
            errors.email = 'Invalid email format';
          }
        else {
            errors.email = "";
        }

        const password = inputValues?.password;
        if (!password) {
          errors.password = "password is required";
          isvalid = false
        } else if (password.length < 8) {
          errors.password = "Password must be longer than 8 characters";
          isvalid = false
        } else if (password.length >= 20) {
          errors.password = "Password must shorter than 20 characters";
          isvalid = false
        }else {
          errors.password = "";
        }
    
        //matchPassword validation
        if (!inputValues?.confirm_password) {
          errors.confirm_password = "Password confirmation is required";
          isvalid = false
        } else if (inputValues.confirm_password !== inputValues.password) {
          errors.confirm_password = "Password does not match confirmation password";
          isvalid = false
        } else {
          errors.confirm_password = "";
        }

        setValidation(errors);
        return isvalid
    };

    function handleonchange(event){
        const { name, value} = event.target
        setInpuvalues({ ...inputValues, [name]: value });
        setValidation({...validation, [name]: ""})
    }

    const savedata = () => {
        let errors = validation;

        if (checkValidation()){
            setLoading(true);
            fetch("http://127.0.0.1:5001/signup", {
                method:"POST",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(inputValues)
            }).then((result) => {
                setLoading(false);
                setInpuvalues({
                    username:"",
                    email:"",
                    password:"",
                    conform_password:""
                })
             if (result.status === 201){
             result.json().then((res) => {
                toast.success("Register Successfully",{
                    position: toast.POSITION.TOP_RIGHT
                });
                let token = res.token;
                localStorage.setItem("token", token)
                navigate('/payment');
             })
             }
             else if(result.status === 400){
                result.json().then((res) => {
                    if ("password" in res){
                         toast.error(res.message, {
                            position: toast.POSITION.TOP_RIGHT
                         });
                    }
                    toast.error(res.message,{
                        position: toast.POSITION.TOP_RIGHT
                    });
                })
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
        <div>
        { loading &&
            <Loader />
        }
        <div className='bg_color'>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12} className='signup_img'>
                        <img src="young-woman-enjoy.png" alt="" />
                    </Col>
                    <Col md={8} lg={6} xs={12} className='signup_form'>
                        <Card className="px-4 sign_up">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-center text-uppercase text_color">
                                        Sign Up
                                    </h2>
                                    <div className="mb-3">
                                        <Form>
                                            <Form.Group className="mb-3" controlId="Name">
                                                <Form.Label className="text-center text_color">User Name</Form.Label>
                                                <Form.Control type="text" name='username' value={inputValues.username} onChange={(e) => handleonchange(e)} placeholder="Enter Name" />
                                                {validation.username && <p style={{"color":"red"}}>{validation.username}</p>}
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center text_color">
                                                    Email address
                                                </Form.Label>
                                                <Form.Control type="email" name='email' value={inputValues.email} onChange={(e) => handleonchange(e)} placeholder="Enter email" />
                                                {validation.email && <p style={{"color":"red"}}>{validation.email}</p>}
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label className='text_color'>Password</Form.Label>
                                                <Form.Control type="password" name='password' value={inputValues.password} onChange={(e) => handleonchange(e)} placeholder="Password" />
                                                {validation.password && <p style={{"color":"red"}}>{validation.password}</p>}
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label className='text_color'>confirm Password</Form.Label>
                                                <Form.Control type="password" name='confirm_password' value={inputValues.confirm_password} onChange={(e) => handleonchange(e)} placeholder="confirm Password" />
                                                {validation.confirm_password && <p style={{"color":"red"}}>{validation.confirm_password}</p>}

                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            ></Form.Group>
                                            <div className="d-grid">
                                                <Button variant="primary" type="button" onClick={savedata}>
                                                    Create Account
                                                </Button>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Already have an account?{' '}
                                                <Link to="/login" className="text-light fw-bold">
                                                    Sign In
                                                </Link>
                                            </p>
                                            <ToastContainer />
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    )
}

export default SignUp