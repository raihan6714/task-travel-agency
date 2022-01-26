import React from 'react';
import { Link } from 'react-router-dom';

const Tours = () => {
    return (
        <>
            <section className="hero_in tours">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="fadeInUp"><span></span>Paris tours grid</h1>
                    </div>
                </div>
            </section>
            {/* <div className="filters_listing sticky_horizontal">
                <div className="container">
                    <ul className="clearfix">
                        <li>
                            <div className="switch-field">
                                <input type="radio" id="all" name="listing_filter" value="all" checked data-filter="*" className="selected" />
                                <label for="all">All</label>
                                <input type="radio" id="popular" name="listing_filter" value="popular" data-filter=".popular" />
                                <label for="popular">Popular</label>
                                <input type="radio" id="latest" name="listing_filter" value="latest" data-filter=".latest" />
                                <label for="latest">Latest</label>
                            </div>
                        </li>
                        <li>
                            <div className="layout_view">
                                <Link to="/" className="active"><i className="icon-th"></i></Link>
                                <Link to="tours-list-isotope.html"><i className="icon-th-list"></i></Link>
                            </div>
                        </li>
                        <li>
                            <Link className="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</Link>
                        </li>
                    </ul>
                </div>
            </div> */}
            <div className="collapse" id="collapseMap">
                <div id="map" className="map"></div>
            </div>
            <div className="container margin_60_35">
                <div className="col-lg-12">
                    <div className="row no-gutters custom-search-input-2 inner">
                        <div className="col-lg-4">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="What are you looking for..." />
                                <i className="icon_search"></i>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Where" />
                                <i className="icon_pin_alt"></i>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <select className="wide">
                                <option>All Categories</option>
                                <option>Churches</option>
                                <option>Historic</option>
                                <option>Museums</option>
                                <option>Walking tours</option>
                            </select>
                        </div>
                        <div className="col-lg-2">
                            <input type="submit" className="btn_search" value="Search" />
                        </div>
                    </div>
                </div>

                <div className="isotope-wrapper">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 isotope-item popular">
                            <div className="box_grid">
                                <figure>
                                    <Link to="/" className="wish_bt text-decoration-none"></Link>
                                    <Link to="/toursDetails"><img src="img/tour_1.jpg" className="img-fluid" alt="" width="800" height="533" /><div className="read_more"><span>Read more</span></div></Link>
                                    <small>Historic</small>
                                </figure>
                                <div className="wrapper">
                                    <h3><Link to="/toursDetails" className='text-decoration-none'>Arc Triomphe</Link></h3>
                                    <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                    <span className="price">From <strong>$54</strong> /per person</span>
                                </div>
                                <ul>
                                    <li><i className="icon_clock_alt"></i> 1h 30min</li>
                                    <li><div className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 isotope-item latest">
                            <div className="box_grid">
                                <figure>
                                    <Link to="/" className="wish_bt text-decoration-none"></Link>
                                    <Link to="/toursDetails"><img src="img/tour_2.jpg" className="img-fluid" alt="" width="800" height="533" /><div className="read_more"><span>Read more</span></div></Link>
                                    <small>Churches</small>
                                </figure>
                                <div className="wrapper">
                                    <h3><Link to="/toursDetails" className='text-decoration-none'>Notredam</Link></h3>
                                    <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                    <span className="price">From <strong>$124</strong> /per person</span>
                                </div>
                                <ul>
                                    <li><i className="icon_clock_alt"></i> 1h 30min</li>
                                    <li><div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 isotope-item popular">
                            <div className="box_grid">
                                <figure>
                                    <Link to="/" className="wish_bt text-decoration-none"></Link>
                                    <Link to="/toursDetails"><img src="img/tour_3.jpg" className="img-fluid" alt="" width="800" height="533" /><div className="read_more"><span>Read more</span></div></Link>
                                    <small>Historic</small>
                                </figure>
                                <div className="wrapper">
                                    <h3><Link to="/toursDetails" className='text-decoration-none'>Versailles</Link></h3>
                                    <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                    <span className="price">From <strong>$25</strong> /per person</span>
                                </div>
                                <ul>
                                    <li><i className="icon_clock_alt"></i> 1h 30min</li>
                                    <li><div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 isotope-item latest">
                            <div className="box_grid">
                                <figure>
                                    <Link to="/" className="wish_bt"></Link>
                                    <Link to="/toursDetails"><img src="img/tour_4.jpg" className="img-fluid" alt="" width="800" height="533" /><div className="read_more"><span>Read more</span></div></Link>
                                    <small>Museum</small>
                                </figure>
                                <div className="wrapper">
                                    <h3><Link to="/toursDetails" className='text-decoration-none'>Pompidue Museum</Link></h3>
                                    <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                    <span className="price">From <strong>$45</strong> /per person</span>
                                </div>
                                <ul>
                                    <li><i className="icon_clock_alt"></i> 2h 30min</li>
                                    <li><div className="score"><span>Superb<em>350 Reviews</em></span><strong>9.0</strong></div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 isotope-item popular">
                            <div className="box_grid">
                                <figure>
                                    <Link to="/" className="wish_bt"></Link>
                                    <Link to="/toursDetails"><img src="img/tour_5.jpg" className="img-fluid" alt="" width="800" height="533" /><div className="read_more"><span>Read more</span></div></Link>
                                    <small>Walking</small>
                                </figure>
                                <div className="wrapper">
                                    <h3><Link to="/toursDetails" className='text-decoration-none'>Tour Eiffel</Link></h3>
                                    <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                    <span className="price">From <strong>$65</strong> /per person</span>
                                </div>
                                <ul>
                                    <li><i className="icon_clock_alt"></i> 1h 30min</li>
                                    <li><div className="score"><span>Good<em>350 Reviews</em></span><strong>7.5</strong></div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 isotope-item latest">
                            <div className="box_grid">
                                <figure>
                                    <Link to="/" className="wish_bt"></Link>
                                    <Link to="/toursDetails"><img src="img/tour_6.jpg" className="img-fluid" alt="" width="800" height="533" /><div className="read_more"><span>Read more</span></div></Link>
                                    <small>Museum</small>
                                </figure>
                                <div className="wrapper">
                                    <h3><Link to="/toursDetails" className='text-decoration-none'>Louvre Museum</Link></h3>
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

                <p className="text-center"><Link to="/" className="btn_1 rounded add_top_30">Load more</Link></p>

            </div>
            <div className="bg_color_1">
                <div className="container margin_60_35">
                    <div className="row">
                        <div className="col-md-4">
                            <Link to="/" className="boxed_list text-decoration-none">
                                <i className="pe-7s-help2"></i>
                                <h4>Need Help? Contact us</h4>
                                <p>Cum appareat maiestatis interpretaris et, et sit.</p>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to="/" className="boxed_list text-decoration-none">
                                <i className="pe-7s-wallet"></i>
                                <h4>Payments</h4>
                                <p>Qui ea nemore eruditi, magna prima possit eu mei.</p>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to="/" className="boxed_list text-decoration-none">
                                <i className="pe-7s-note2"></i>
                                <h4>Cancel Policy</h4>
                                <p>Hinc vituperata sed ut, pro laudem nonumes ex.</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tours;