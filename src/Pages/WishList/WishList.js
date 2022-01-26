import React from 'react';
import { Link } from 'react-router-dom';

const WishList = () => {
    return (
        <div>
            <section className="hero_in tours">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="fadeInUp"><span></span>Your Wishlist</h1>
                    </div>
                </div>
            </section>
            <div className="container margin_60_35">

                <div className="wrapper-grid">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="box_grid">
                                <figure>
                                    <Link to="#0" className="wish_bt liked text-decoration-none"></Link>
                                    <Link to="tourDetail"><img src="img/tour_1.jpg" className="img-fluid" alt="" width="800" height="533" /></Link>
                                    <small>Historic</small>
                                    <div className="read_more"><span>Read more</span></div>
                                </figure>
                                <div className="wrapper">
                                    <h3><Link to="tourDetail" className='text-decoration-none'>Arc Triomphe</Link></h3>
                                    <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                    <span className="price">From <strong>$54</strong> /per person</span>
                                </div>
                                <ul>
                                    <li><i className="icon_clock_alt"></i> 1h 30min</li>
                                    <li><div className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="box_grid">
                                <figure>
                                    <Link to="#0" className="wish_bt liked"></Link>
                                    <Link to="tourDetail" className='text-decoration-none'><img src="img/tour_2.jpg" className="img-fluid" alt="" width="800" height="533" /></Link>
                                    <small>Churches</small>
                                    <div className="read_more"><span>Read more</span></div>
                                </figure>
                                <div className="wrapper">
                                    <h3><Link to="tourDetail" className='text-decoration-none'>Notredam</Link></h3>
                                    <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                    <span className="price">From <strong>$124</strong> /per person</span>
                                </div>
                                <ul>
                                    <li><i className="icon_clock_alt"></i> 1h 30min</li>
                                    <li><div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="box_grid">
                                <figure>
                                    <Link to="#0" className="wish_bt liked"></Link>
                                    <Link to="tourDetail" className='text-decoration-none'><img src="img/tour_3.jpg" className="img-fluid" alt="" width="800" height="533" /></Link>
                                    <small>Historic</small>
                                    <div className="read_more"><span>Read more</span></div>
                                </figure>
                                <div className="wrapper">
                                    <h3><Link to="tourDetail" className='text-decoration-none'>Versailles</Link></h3>
                                    <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                    <span className="price">From <strong>$25</strong> /per person</span>
                                </div>
                                <ul>
                                    <li><i className="icon_clock_alt"></i> 1h 30min</li>
                                    <li><div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="box_grid">
                                <figure>
                                    <Link to="#0" className="wish_bt liked text-decoration-none"></Link>
                                    <Link to="touDetail" className='text-decoration-none'><img src="img/tour_4.jpg" className="img-fluid" alt="" width="800" height="533" /></Link>
                                    <small>Museum</small>
                                    <div className="read_more"><span>Read more</span></div>
                                </figure>
                                <div className="wrapper">
                                    <h3><Link to="tourDetail" className='text-decoration-none'>Pompidue Museum</Link></h3>
                                    <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                    <span className="price">From <strong>$45</strong> /per person</span>
                                </div>
                                <ul>
                                    <li><i className="icon_clock_alt"></i> 2h 30min</li>
                                    <li><div className="score"><span>Superb<em>350 Reviews</em></span><strong>9.0</strong></div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="box_grid">
                                <figure>
                                    <Link to="#0" className="wish_bt liked"></Link>
                                    <Link to="tourDetail" className='text-decoration-none'><img src="img/tour_5.jpg" className="img-fluid" alt="" width="800" height="533" /></Link>
                                    <small>Walking</small>
                                    <div className="read_more"><span>Read more</span></div>
                                </figure>
                                <div className="wrapper">
                                    <h3><Link to="tourDetail" className='text-decoration-none'>Tour Eiffel</Link></h3>
                                    <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                    <span className="price">From <strong>$65</strong> /per person</span>
                                </div>
                                <ul>
                                    <li><i className="icon_clock_alt"></i> 1h 30min</li>
                                    <li><div className="score"><span>Good<em>350 Reviews</em></span><strong>7.5</strong></div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="box_grid">
                                <figure>
                                    <Link to="#0" className="wish_bt liked"></Link>
                                    <Link to="tour-detail.html" className='text-decoration-none'><img src="img/tour_6.jpg" className="img-fluid" alt="" width="800" height="533" /></Link>
                                    <small>Museum</small>
                                    <div className="read_more"><span>Read more</span></div>
                                </figure>
                                <div className="wrapper">
                                    <h3><Link to="tour-detail.html" className='text-decoration-none'>Louvre Museum</Link></h3>
                                    <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                    <span className="price">From <strong>$95</strong> /per person</span>
                                </div>
                                <ul>
                                    <li><i className="icon_clock_alt"></i> 1h 30min</li>
                                    <li><div className="score"><span>Good<em>350 Reviews</em></span><strong>7.8</strong></div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg_color_1">
                <div className="container margin_60_35">
                    <div className="row">
                        <div className="col-md-4">
                            <Link to="#0" className="boxed_list text-decoration-none">
                                <i className="pe-7s-help2"></i>
                                <h4>Need Help? Contact us</h4>
                                <p>Cum appareat maiestatis interpretaris et, et sit.</p>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to="#0" className="boxed_list text-decoration-none">
                                <i className="pe-7s-wallet"></i>
                                <h4>Payments</h4>
                                <p>Qui ea nemore eruditi, magna prima possit eu mei.</p>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to="#0" className="boxed_list text-decoration-none">
                                <i className="pe-7s-note2"></i>
                                <h4>Cancel Policy</h4>
                                <p>Hinc vituperata sed ut, pro laudem nonumes ex.</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishList;