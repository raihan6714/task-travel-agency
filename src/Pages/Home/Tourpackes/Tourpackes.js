import React from 'react';
import './Tourpackes.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const Tourpackes = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <Carousel responsive={responsive}>
                <div className="box_grid">
                    <figure>
                        <Link to="#0" className="wish_bt liked text-decoration-none"></Link>
                        <Link to="/toursDetails"><img src="img/tour_1.jpg" className="img-fluid" alt="" width="800" height="533" /></Link>
                        <small>Historic</small>
                        <div className="read_more"><span>Read more</span></div>
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
                <div className="box_grid">
                    <figure>
                        <Link to="#0" className="wish_bt liked"></Link>
                        <Link to="/toursDetails" className='text-decoration-none'><img src="img/tour_2.jpg" className="img-fluid" alt="" width="800" height="533" /></Link>
                        <small>Churches</small>
                        <div className="read_more"><span>Read more</span></div>
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
                <div className="box_grid">
                    <figure>
                        <Link to="#0" className="wish_bt liked"></Link>
                        <Link to="/toursDetails" className='text-decoration-none'><img src="img/tour_3.jpg" className="img-fluid" alt="" width="800" height="533" /></Link>
                        <small>Historic</small>
                        <div className="read_more"><span>Read more</span></div>
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
                <div className="box_grid">
                    <figure>
                        <Link to="#0" className="wish_bt liked text-decoration-none"></Link>
                        <Link to="touDetail" className='text-decoration-none'><img src="img/tour_4.jpg" className="img-fluid" alt="" width="800" height="533" /></Link>
                        <small>Museum</small>
                        <div className="read_more"><span>Read more</span></div>
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
                <div className="box_grid">
                    <figure>
                        <Link to="#0" className="wish_bt liked"></Link>
                        <Link to="/toursDetails" className='text-decoration-none'><img src="img/tour_5.jpg" className="img-fluid" alt="" width="800" height="533" /></Link>
                        <small>Walking</small>
                        <div className="read_more"><span>Read more</span></div>
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
            </Carousel>;
            {/* <div id="reccomended" className="owl-carousel owl-theme">
                <div className="item">
                    <div className="box_grid">
                        <figure>
                            <Link to="#0" className="wish_bt"></Link>
                            <Link to="tour-detail.html"><img src="img/tour_1.jpg" className="img-fluid" alt=""
                                width="800" height="533" />
                                <div className="read_more"><span>Read more</span></div>
                            </Link>
                            <small>Historic</small>
                        </figure>
                        <div className="wrapper">
                            <h3><Link to="tour-detail.html">Arc Triomphe</Link></h3>
                            <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.
                            </p>
                            <span className="price">From <strong>$54</strong> /per person</span>
                        </div>
                        <ul>
                            <li><i className="icon_clock_alt"></i> 1h 30min</li>
                            <li>
                                <div className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <div className="box_grid">
                        <figure>
                            <Link to="#0" className="wish_bt"></Link>
                            <Link to="tour-detail.html"><img src="img/tour_2.jpg" className="img-fluid" alt=""
                                width="800" height="533" />
                                <div className="read_more"><span>Read more</span></div>
                            </Link>
                            <small>Churches</small>
                        </figure>
                        <div className="wrapper">
                            <h3><Link to="tour-detail.html">Notredam</Link></h3>
                            <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.
                            </p>
                            <span className="price">From <strong>$124</strong> /per person</span>
                        </div>
                        <ul>
                            <li><i className="icon_clock_alt"></i> 1h 30min</li>
                            <li>
                                <div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <div className="box_grid">
                        <figure>
                            <Link to="#0" className="wish_bt"></Link>
                            <Link to="tour-detail.html"><img src="img/tour_3.jpg" className="img-fluid" alt=""
                                width="800" height="533" />
                                <div className="read_more"><span>Read more</span></div>
                            </Link>
                            <small>Historic</small>
                        </figure>
                        <div className="wrapper">
                            <h3><Link to="tour-detail.html">Versailles</Link></h3>
                            <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.
                            </p>
                            <span className="price">From <strong>$25</strong> /per person</span>
                        </div>
                        <ul>
                            <li><i className="icon_clock_alt"></i> 1h 30min</li>
                            <li>
                                <div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <div className="box_grid">
                        <figure>
                            <Link to="#0" className="wish_bt"></Link>
                            <Link to="tour-detail.html"><img src="img/tour_3.jpg" className="img-fluid" alt=""
                                width="800" height="533" />
                                <div className="read_more"><span>Read more</span></div>
                            </Link>
                            <small>Historic</small>
                        </figure>
                        <div className="wrapper">
                            <h3><Link to="tour-detail.html">Versailles</Link></h3>
                            <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.
                            </p>
                            <span className="price">From <strong>$25</strong> /per person</span>
                        </div>
                        <ul>
                            <li><i className="icon_clock_alt"></i> 1h 30min</li>
                            <li>
                                <div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <div className="box_grid">
                        <figure>
                            <Link to="#0" className="wish_bt"></Link>
                            <Link to="tour-detail.html"><img src="img/tour_4.jpg" className="img-fluid" alt=""
                                width="800" height="533" />
                                <div className="read_more"><span>Read more</span></div>
                            </Link>
                            <small>Museum</small>
                        </figure>
                        <div className="wrapper">
                            <h3><Link to="tour-detail.html">Pompidue Museum</Link></h3>
                            <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.
                            </p>
                            <span className="price">From <strong>$45</strong> /per person</span>
                        </div>
                        <ul>
                            <li><i className="icon_clock_alt"></i> 2h 30min</li>
                            <li>
                                <div className="score"><span>Superb<em>350 Reviews</em></span><strong>9.0</strong></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <div className="box_grid">
                        <figure>
                            <Link to="#0" className="wish_bt"></Link>
                            <Link to="tour-detail.html"><img src="img/tour_5.jpg" className="img-fluid" alt=""
                                width="800" height="533" />
                                <div className="read_more"><span>Read more</span></div>
                            </Link>
                            <small>Walking</small>
                        </figure>
                        <div className="wrapper">
                            <h3><Link to="tour-detail.html">Tour Eiffel</Link></h3>
                            <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.
                            </p>
                            <span className="price">From <strong>$65</strong> /per person</span>
                        </div>
                        <ul>
                            <li><i className="icon_clock_alt"></i> 1h 30min</li>
                            <li>
                                <div className="score"><span>Good<em>350 Reviews</em></span><strong>7.5</strong></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>  <p className="btn_home_align"><Link to="tours-grid-isotope.html" className="btn_1 rounded">View all Tours</Link></p>
            <hr className="large" />*/}


        </>
    );
};

export default Tourpackes;