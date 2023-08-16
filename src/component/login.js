import { Link, useNavigate } from "react-router-dom";
import "../component/header.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useState } from "react";
import Loader from './loader';


const LoginForm = () => {
    const navigate = useNavigate();

    const [inputValues, setInpuvalues] = useState({
        username: "",
        password: "",
    });
    const [validation, setValidation] = useState({})
    const [loading, setLoading] = useState(false)

    function handleonchange(event) {
        const { name, value } = event.target
        setInpuvalues({ ...inputValues, [name]: value });
        setValidation({ ...validation, [name]: "" })
    }

    const checkValidation = () => {
        let errors = {};
        let isvalid = true;

        if (!inputValues?.username?.trim()) {
            errors.username = "Username is required";
            isvalid = false
        }
        else {
            errors.username = "";
        }
        const password = inputValues?.password;
        if (!password) {
            errors.password = "password is required";
            isvalid = false
        }
        else {
            errors.password = "";
        }

        setValidation(errors);
        return isvalid
    }

    const saveData = () => {
        if (checkValidation()) {
            setLoading(true);
            fetch("http://127.0.0.1:5001/login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(inputValues),
            })
                .then((result) => {
                    setLoading(false);
                    setInpuvalues({
                        username: "",
                        password: "",
                    })
                    if (result.status === 200) {
                        result.json().then((res) => {
                            toast.success("Login Successfully", {
                                position: toast.POSITION.TOP_RIGHT,
                            });
                            let token = res.token;
                            localStorage.setItem("token", token)
                            navigate("/mainpage");
                        });
                    }
                    else if (result.status === 401) {
                        result.json().then((res) => {
                            toast.error(res.message, {
                                position: toast.POSITION.TOP_RIGHT,
                            });
                        });
                    }
                    else if (result.status === 400) {
                        result.json().then((res) => {
                            let token = res.token;
                            localStorage.setItem("token", token)
                            navigate('/paymentstatus');
                        })
                    }
                })
                .catch((error) => {
                    setLoading(false);
                    toast.error('Something went wrong', {
                        position: toast.POSITION.TOP_RIGHT
                     });
                });
        }
    }
    return (
        <div>
            {loading &&
                <Loader />
            }
            <div className="login-wrapper">
                <div className="sidebar-login">
                    <div className="logo comapnay_logo">
                        <img src="Logo.png" className="company-logo" alt="" />
                    </div>
                    <div className="text-sidebar-login">
                        hello everyone
                    </div>
                    <img className="woman" src="" alt="" />
                </div>
                <div className="login-wraper">
                    <div title="Back to Menu" class="backArrow">
                        <Link to={'/'}>&#10140;</Link>
                    </div>
                    <div className="center-login">
                        <h2>Login</h2>
                        <br />
                        <form action="">
                            <div className="form-login">
                                <p>Username</p>
                                <input name="username" type="text" value={inputValues.username} onChange={(e) => handleonchange(e)}
                                />
                                {validation.username && <p style={{ "color": "red" }}>{validation.username}</p>}
                                <br />
                                <br />
                                <p>Password</p>
                                <input name="password" type="password" value={inputValues.password} onChange={(e) => handleonchange(e)} />
                                {validation.password && <p style={{ "color": "red" }}>{validation.password}</p>}
                                <br />
                                <br />
                                <input type="button" className="login_button" value="login" onClick={saveData} />
                            </div>
                            <ToastContainer />
                            <div className="mt-3">
                                <p className="mb-0  text-center">
                                    Don't have an account? {' '}
                                    <Link to="/signup" className="text-primery fw-bold">
                                        Sign Up
                                    </Link>
                                </p>
                                <ToastContainer />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;