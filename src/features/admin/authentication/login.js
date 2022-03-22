import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
// import openSocket from 'socket.io-client';
import './login.css'
import { PathUrl } from '../../../config/Config'
import { useHistory } from 'react-router';

// const socket = openSocket('http://localhost:4000/');
function Login() {
    const url = PathUrl().urlData.production;

    const history = useHistory();

    // socket.on('connect', function (con) {
    //     console.log(con)
    // })

   
   
    // For Staff Type Form Data 
    let [login, setLogin] = useState({
        mobile: '',
        password: '',

    });

    const loginChange = e => {

        let name = e.target.name;
        let value = e.target.value;
        login[name] = value;

        setLogin(login);

    };

    const onSubmit = e => {
        e.preventDefault();
        console.log(login);

        // Send a POST request
        axios.post(`${url}/Adminlogin`, login)
            .then((response) => {

                if (response.data.data.code === "401") {
                    swal("Bad Call!", "Credentials does not match!")
                }

                if (response.data.data.code === "404") {
                    swal("Bad Call!", "Login Failed Please Check Mobile Number..!!")
                }
                if (response.data.data.token) {
                    localStorage.setItem('token', response.data.data.token);
                    localStorage.setItem('user', JSON.stringify(response.data.data.user));
                    localStorage.setItem('user_type', response.data.data.user.type);
                    localStorage.setItem('user_id', response.data.data.user.id);
                    localStorage.setItem('status', response.data.data.user.status);
                    localStorage.setItem('first_login_flag', response.data.data.user.first_login_flag);
                    const userData = localStorage.getItem('user_type');

                    
                    if (userData === "admin") {
                        history.push('/Admin');
                    }

                }

            })
            .catch((error) => {
                console.error(error);
            });

    };
    return (
        <>
        <div className='body1'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8 login-box">
                        <div className="col-lg-12 login-key">
                            <i className="fa fa-key" aria-hidden="true"></i>
                        </div>
                        <div className="col-lg-12 login-title">
                            ADMIN PANEL
                        </div>

                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                <form onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <label className="form-control-label">MOBILE NUMBER</label>
                                        <input type="text" className="form-control" name="mobile" id='adminMobile'  onChange={loginChange} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">PASSWORD</label>
                                        <input type="password" className="form-control" name="password" id='adminPassword' onChange={loginChange}  />
                                    </div>

                                    <div className="col-lg-12 loginbttm">
                                        <div className="col-lg-6 login-btm login-text">
                                        </div>
                                        <div className="col-lg-6 login-btm login-button">
                                            <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2"></div>
                    </div>
                </div>

            </div>

            </div>

        </>
    )
}

export default Login
