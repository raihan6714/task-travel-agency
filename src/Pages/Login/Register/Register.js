import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div id='register_bg'>
            <nav id="menu" className="fake_menu"></nav>

            {/* <div id="preloader">
                <div data-loader="circle-side"></div>
            </div> */}
            <div id="login">
                <aside>
                    <figure>
                        <Link to="index.html"><img src="img/logo_sticky.png" width="155" height="36" data-retina="true" alt="" className="logo_sticky" /></Link>
                    </figure>
                    <form autocomplete="off">
                        <div className="form-group">
                            <label>Your Name</label>
                            <input className="form-control" type="text" />
                            <i className="ti-user"></i>
                        </div>
                        <div className="form-group">
                            <label>Your Last Name</label>
                            <input className="form-control" type="text" />
                            <i className="ti-user"></i>
                        </div>
                        <div className="form-group">
                            <label>Your Email</label>
                            <input className="form-control" type="email" />
                            <i className="icon_mail_alt"></i>
                        </div>
                        <div className="form-group">
                            <label>Your password</label>
                            <input className="form-control" type="password" id="password1" />
                            <i className="icon_lock_alt"></i>
                        </div>
                        <div className="form-group">
                            <label>Confirm password</label>
                            <input className="form-control" type="password" id="password2" />
                            <i className="icon_lock_alt"></i>
                        </div>
                        <div id="pass-info" className="clearfix"></div>
                        <Link to="/" className="btn_1 rounded full-width add_top_30">Register Now!</Link>
                        <div className="text-center add_top_10">Already have an acccount? <strong><Link to="/login">Sign In</Link></strong></div>
                    </form>
                    <div className="copy">© 2018 Panagea</div>
                </aside>
            </div>
        </div>
    );
};

export default Register;