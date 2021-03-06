import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
                <div className="small-dialog-header">
                    <h3>Sign In</h3>
                </div>
                <form>
                    <div className="sign-in-wrapper">
                        <Link to="#0" className="social_bt facebook">Login with Facebook</Link>
                        <Link to="#0" className="social_bt google">Login with Google</Link>
                        <div className="divider"><span>Or</span></div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" id="email" />
                            <i className="icon_mail_alt"></i>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" name="password" id="password" />
                            <i className="icon_lock_alt"></i>
                        </div>
                        <div className="clearfix add_bottom_15">
                            <div className="checkboxes float-left">
                                <label className="container_check">Remember me
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="float-right mt-1"><Link id="forgot" to="javascript:void(0)">Forgot Password?</Link></div>
                        </div>
                        <div className="text-center"><input type="submit" defaultValue={"Log In"} className="btn_1 full-width" /></div>
                        <div className="text-center">
                            Don???t have an account? <Link to="register.html">Sign up</Link>
                        </div>
                        <div id="forgot_pw">
                            <div className="form-group">
                                <label>Please confirm login email below</label>
                                <input type="email" className="form-control" name="email_forgot" id="email_forgot" />
                                <i className="icon_mail_alt"></i>
                            </div>
                            <p>You will receive an email containing a link allowing you to reset your password to a new
                                preferred one.</p>
                            <div className="text-center"><input type="submit" defaultValue={"Reset Password"} className="btn_1" /></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;