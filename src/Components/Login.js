import React from 'react'
import './Login.css'
import Register from './Register'

export default function Login() {
    return (
        <div>
            <div className="card card-login-register" style={{maxWidth:"30rem"}}>
                <img src="https://cuc.mponline.gov.in/Portal/Services/CU/newcss/images/loginbg.png" className="card-img-top" alt="img" />
                <div className="card-body">
                    {/******************** Fields ***********************/}
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <br/>
                    <div className="text-center"> 
                        <button type="button" className="btn btn-success login-btn">Success</button>
                        <br />
                        <hr />
                        <button type="button" className="btn btn-primary login-btn" data-bs-toggle="modal" data-bs-target="#registerModal">Register</button>
                    </div>
                    {/***************************************************/}
                </div>
                
                <br/>
            </div>

            {/*<!-- Modal -->*/}
            <Register />
        </div>
    )
}
