import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container margin_60_35">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 p-r-5">
                            <p><img src="img/logo.svg" width="150" height="36" alt="" /></p>
                            <p>Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id placerat tacimates
                                definitionem sea, prima quidam vim no. Duo nobis persecuti cu. Nihil facilisi indoctum an
                                vix, ut delectus expetendis vis.</p>
                            <div className="follow_us">
                                <ul>
                                    <li>Follow us</li>
                                    <li><Link to="/" className='text-decoration-none'><i className="ti-facebook"></i></Link></li>
                                    <li><Link to="/" className='text-decoration-none'><i className="ti-twitter-alt"></i></Link></li>
                                    <li><Link to="/" className='text-decoration-none'><i className="ti-google"></i></Link></li>
                                    <li><Link to="/" className='text-decoration-none'><i className="ti-pinterest"></i></Link></li>
                                    <li><Link to="/" className='text-decoration-none'><i className="ti-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 ml-lg-auto">
                            <h5>Useful links</h5>
                            <ul className="links">
                                <li><Link to="about.html" className='text-decoration-none'>About</Link></li>
                                <li><Link to="login.html" className='text-decoration-none'>Login</Link></li>
                                <li><Link to="register.html" className='text-decoration-none'>Register</Link></li>
                                <li><Link to="blog.html" className='text-decoration-none'>News &amp; Events</Link></li>
                                <li><Link to="contacts.html" className='text-decoration-none'>Contacts</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5>Contact with Us</h5>
                            <ul className="contacts">
                                <li><Link to="tel://61280932400" className='text-decoration-none'><i className="ti-mobile"></i> + 61 23 8093 3400</Link></li>
                                <li><Link to="mailto:info@Panagea.com" className='text-decoration-none'><i className="ti-email"></i> info@Panagea.com</Link></li>
                            </ul>
                            <div id="newsletter">
                                <h6>Newsletter</h6>
                                <div id="message-newsletter"></div>
                                <form method="post" action="" name="newsletter_form"
                                    id="newsletter_form">
                                    <div className="form-group">
                                        <input type="email" name="email_newsletter" id="email_newsletter"
                                            className="form-control" placeholder="Your email" />
                                        <input type="submit" defaultValue={'Submit'} id="submit-newsletter" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <!--/row--> */}
                    <hr />
                    <div className="row">
                        <div className="col-lg-6">
                            <ul id="footer-selector">
                                <li>
                                    <div className="styled-select" id="lang-selector">
                                        <select>
                                            <option defaultValue={"English"} selected>English</option>
                                            <option defaultValue={"French"}>French</option>
                                            <option defaultValue={"Spanish"}>Spanish</option>
                                            <option defaultValue={"Russian"}>Russian</option>
                                        </select>
                                    </div>
                                </li>
                                <li>
                                    <div className="styled-select" id="currency-selector">
                                        <select>
                                            <option defaultValue={"US Dollars"} selected>US Dollars</option>
                                            <option defaultValue={"Euro"}>Euro</option>
                                        </select>
                                    </div>
                                </li>
                                <li><img src="img/cards_all.svg" alt="" /></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul id="additional_links">
                                <li><Link to="#0" className='text-decoration-none'>Terms and conditions</Link></li>
                                <li><Link to="#0" className='text-decoration-none'>Privacy</Link></li>
                                <li><span>© 2022 Panagea</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="toTop"></div>
            </footer>
        </>
    );
};

export default Footer;