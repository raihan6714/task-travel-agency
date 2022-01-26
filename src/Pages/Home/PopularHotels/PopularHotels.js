import React from 'react';
import { Link } from 'react-router-dom';

const PopularHotels = () => {
    return (
        <>
            <div className="container container-custom margin_30_95">
                <section className="add_bottom_45">
                    <div className="main_title_3">
                        <span><em></em></span>
                        <h2>Popular Hotels and Accommodations</h2>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <Link to="hotel-detail.html" className="grid_item">
                                <figure>
                                    <div className="score"><strong>8.9</strong></div>
                                    <img src="img/hotel_1.jpg" className="img-fluid" alt="" />
                                    <div className="info">
                                        <div className="cat_star"><i className="icon_star"></i><i className="icon_star"></i><i
                                            className="icon_star"></i><i className="icon_star"></i></div>
                                        <h3>Mariott Hotel</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <Link to="hotel-detail.html" className="grid_item">
                                <figure>
                                    <div className="score"><strong>7.9</strong></div>
                                    <img src="img/hotel_2.jpg" className="img-fluid" alt="" />
                                    <div className="info">
                                        <div className="cat_star"><i className="icon_star"></i><i className="icon_star"></i><i
                                            className="icon_star"></i><i className="icon_star"></i></div>
                                        <h3>Concorde Hotel </h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <Link to="hotel-detail.html" className="grid_item">
                                <figure>
                                    <div className="score"><strong>7.0</strong></div>
                                    <img src="img/hotel_3.jpg" className="img-fluid" alt="" />
                                    <div className="info">
                                        <div className="cat_star"><i className="icon_star"></i><i className="icon_star"></i><i
                                            className="icon_star"></i><i className="icon_star"></i></div>
                                        <h3>Louvre Hotel</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <Link to="hotel-detail.html" className="grid_item">
                                <figure>
                                    <div className="score"><strong>8.9</strong></div>
                                    <img src="img/hotel_4.jpg" className="img-fluid" alt="" />
                                    <div className="info">
                                        <div className="cat_star"><i className="icon_star"></i><i className="icon_star"></i><i
                                            className="icon_star"></i><i className="icon_star"></i></div>
                                        <h3>Park Yatt Hotel</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                    </div>
                    <Link to="hotels-grid-isotope.html"><strong>View all (157) <i
                        className="arrow_carrot-right"></i></strong></Link>
                </section>

                <section className="add_bottom_45">
                    <div className="main_title_3">
                        <span><em></em></span>
                        <h2>Popular Restaurants</h2>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <Link to="restaurant-detail.html" className="grid_item">
                                <figure>
                                    <div className="score"><strong>8.5</strong></div>
                                    <img src="img/restaurant_1.jpg" className="img-fluid" alt="" />
                                    <div className="info">
                                        <h3>Da Alfredo</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <Link to="restaurant-detail.html" className="grid_item">
                                <figure>
                                    <div className="score"><strong>7.9</strong></div>
                                    <img src="img/restaurant_2.jpg" className="img-fluid" alt="" />
                                    <div className="info">
                                        <h3>Slow Food</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <Link to="restaurant-detail.html" className="grid_item">
                                <figure>
                                    <div className="score"><strong>7.5</strong></div>
                                    <img src="img/restaurant_3.jpg" className="img-fluid" alt="" />
                                    <div className="info">
                                        <h3>Bella Napoli</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <Link to="restaurant-detail.html" className="grid_item">
                                <figure>
                                    <div className="score"><strong>9.0</strong></div>
                                    <img src="img/restaurant_4.jpg" className="img-fluid" alt="" />
                                    <div className="info">
                                        <h3>Marcus</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                    </div>
                    <Link to="restaurants-grid-isotope.html"><strong>View all (157) <i
                        className="arrow_carrot-right"></i></strong></Link>
                </section>

                <div className="banner mb-0">
                    <div className="wrapper d-flex align-items-center opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.3)">
                        <div>
                            <small>Adventure</small>
                            <h3>Your Perfect<br />Advenure Experience</h3>
                            <p>Activities and accommodations</p>
                            <Link to="adventure.html" className="btn_1">Read more</Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default PopularHotels;