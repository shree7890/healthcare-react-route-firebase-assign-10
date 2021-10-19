import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';;

const Register = () => {
    const { handleSignIn, error, githubSingnIn, changeEmailClick, changePasswordClick, handleSubmit } = useAuth();
    return (
        <div>
            <div className="container py-5 text-center">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <div>
                            <h3 style={{ color: "#081839" }} className="mb-4">Sign Up Your Account</h3>
                            <div>
                                <form onSubmit={handleSubmit} >
                                    <input onBlur={changeEmailClick} className="w-75 py-2" type="email" placeholder="Enter Your E-mail" />
                                    <br /><br />
                                    <input onBlur={changePasswordClick} className="w-75 py-2" type="password" placeholder="Enter Your Password" />
                                    <br /><br />
                                    <input className="btn-common" type="submit" value="Sign Up" />
                                </form>
                                <div className="my-4">
                                    <button onClick={handleSignIn} className="me-3 btn-common"><i className="fab fa-google"></i> Sign Up With Google</button>
                                    <button onClick={githubSingnIn} className="ms-3 btn-common"><i className="fab fa-github"></i> Sign Up With Github</button>
                                </div>

                            </div>
                            <div className="mb-3 text-danger" >{error}</div>
                            <div className="mt-4">
                                <h6>Already have an account? <Link className="text-decoration-none" to="/login"><span className="ms-3" style={{ color: "#1BBDE4" }}>Login</span></Link></h6>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Register;