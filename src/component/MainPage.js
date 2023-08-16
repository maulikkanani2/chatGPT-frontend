import React, { useState, useEffect} from 'react'
import { Col, Button, Row, Container, } from 'react-bootstrap';
import "../component/header.css"
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import Loader from './loader';


function MainPage() {
    const [inputValues, setInpuvalues] = useState('')
    const [response, setResponse] = useState('')
    const navigate = useNavigate()
    const [validation, setValidation] = useState({})
    const [loading, setLoading] = useState(false)
    const [disable, setdisable] = useState(true)
    const token = localStorage.getItem('token')
    const logoutfunc = () => {
        localStorage.clear();
        navigate('/login')

    }
    const handleonchange = (event) => {
        const { name, value } = event.target
        setInpuvalues(value);
        setValidation({ ...validation, [name]: "" })
    }

    useEffect(() => {
        if(!token){
            navigate('/login')
        }

    })
    const checkValidation = () => {
        let errors = {};
        let isvalid = true;

        if (!inputValues) {
            errors.inputValues = "search something";
            isvalid = false
        }
        else {
            errors.inputValues = "";
        }
        setValidation(errors);
        return isvalid
    };

    const savedata = () => {
        let errors = validation;

        if (checkValidation()) {
            setLoading(true)
            fetch("http://127.0.0.1:5001/chatgpt", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputValues)
            }).then((result) => {
                setLoading(false)
                setdisable(false)
                setInpuvalues('')
                if (result.status === 200) {
                    result.json().then((res) => {
                        setResponse(res)
                    })
                }
                else if (result.status === 401) {
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
    
    const downloadCSV = () => {
        setLoading(true)
        axios
            .get('http://127.0.0.1:5001/download_csv', {
                responseType: 'blob', headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setLoading(false)
                const csvData = new Blob([response.data], { type: 'text/csv' });
                const url = window.URL.createObjectURL(csvData);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'data.csv';
                link.click();
                window.URL.revokeObjectURL(url);
            })
            .catch((error) => {
                setLoading(false);
                toast.error('Something went wrong', {
                    position: toast.POSITION.TOP_RIGHT
                 });
            })
    };
    const apiResponse = response
    const lines = apiResponse.split('\n');
    const dataRows = lines.slice(2).filter(line => line.trim() !== '');
    const tableData = dataRows.map(row => row.split('|').map(column => column.trim()));

    return (
      <div>
        {loading && <Loader />}

        <div className="bg_color_main">
          <div className='main-nav'>
            <div className="wrapper">
              <div className="main_logout d-flex justify-content-between align-items-center">
                <div className="main_page text-align-center p-3 comapnay_logo">
                  <img src="Logo.png" className="company-logo" alt="" />
                </div>
                <div>
                  <Button onClick={logoutfunc}>Logout</Button>
                </div>
              </div>
            </div>
          </div>
          <Container className="margin_top">
            <Row className="d-flex justify-content-center align-items-center">
              <div className="main_page_bg">
                <h1 className='main-page-title'>Organise Your Text Here! 😊</h1>
                <Col md={8} lg={9} xs={12} className="m-auto">
                  <div className="main_page">
                    <textarea
                      name="inputValues"
                      value={inputValues}
                      placeholder="Enter Your Unorganized Data"
                      onChange={(e) => handleonchange(e)}
                      id=""
                      cols="30"
                      rows="3"
                    ></textarea>
                    {validation.inputValues && (
                      <p style={{ color: "red" }}>{validation.inputValues}</p>
                    )}
                  </div>
                  <div className="d-grid mt-4 mb-4 main_button">
                    <Button type="button" onClick={savedata}>
                      Generate
                    </Button>
                  </div>
                  <div className="main_page mt-3">
                    <p className="main_page_fild">
                      <table border="2px" style={{ margin: "0 auto" }}>
                        <tbody>
                          {tableData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              {row.map((cell, cellIndex) => (
                                <td
                                  key={cellIndex}
                                  style={{ border: "1px solid black" }}
                                >
                                  <div
                                    style={{
                                      borderRadius: "10px",
                                      overflow: "hidden",
                                    }}
                                  >
                                    <span
                                      style={{
                                        display: "block",
                                        padding: "5px 10px",
                                      }}
                                    >
                                      {cell}
                                    </span>
                                  </div>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </p>
                  </div>
                  <div className="d-grid mt-2 main_button_1">
                    <Button
                      variant="primary"
                      type="button"
                      disabled={disable}
                      onClick={downloadCSV}
                    >
                      Download CSV
                    </Button>
                  </div>
                  <ToastContainer />
                </Col>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    );
}

export default MainPage