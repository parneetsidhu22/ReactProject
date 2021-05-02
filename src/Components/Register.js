import React from 'react'

export default function Register() {
    return (
        <div>
            <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="registerModalLabel">Register</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action="">
                        <div className="modal-body">
                            
                                <div class="row">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" name="firstname"/>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" name="lastname"/>
                                    </div>
                                </div><br />
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="usernameInput" placeholder="Username" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="emailInput" placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" id="cpasswordInput" placeholder="Confirm Password" />
                                </div>
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" >Register</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
