import React from 'react';
import { Link } from 'react-router-dom';

const PopularAdventures = () => {
    return (
        <>
            <div className="container container-custom margin_80_55">
                <section className="add_bottom_45">
                    <div className="main_title_3">
                        <span><em></em></span>
                        <h2>Popular Adventures Tours</h2>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    </div>

                    <div id="reccomended_adventure" className="owl-carousel owl-theme">

                        <div className="item">
                            <Link to="adventure-detail.html" className="grid_item_adventure">
                                <figure>
                                    <div className="score"><strong>7.9</strong></div>
                                    <img src="img/adventure_popular_1.jpg" className="img-fluid" alt="" />
                                    <div className="info">
                                        <em>3 days in Patagonia</em>
                                        <h3>Horseback ride through Valencia</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="adventure-detail.html" className="grid_item_adventure">
                                <figure>
                                    <div className="score"><strong>9.0</strong></div>
                                    <img src="img/adventure_popular_2.jpg" className="img-fluid" alt="" />
                                    <div className="info">
                                        <em>2 days in Caribbean</em>
                                        <h3>Horseback ride through Valencia</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="adventure-detail.html" className="grid_item_adventure">
                                <figure>
                                    <div className="score"><strong>9.5</strong></div>
                                    <img src="img/adventure_popular_3.jpg" className="img-fluid" alt="" />
                                    <div className="info">
                                        <em>2 days in Caribbean</em>
                                        <h3>Horseback ride through Valencia</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="adventure-detail.html" className="grid_item_adventure">
                                <figure>
                                    <div className="score"><strong>9.0</strong></div>
                                    <img src="img/adventure_popular_4.jpg" className="img-fluid" alt="" />
                                    <div className="info">
                                        <em>2 days in Canada</em>
                                        <h3>Horseback ride through Valencia</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="adventure-detail.html" className="grid_item_adventure">
                                <figure>
                                    <div className="score"><strong>9.0</strong></div>
                                    <img src="img/adventure_popular_5.jpg" className="img-fluid" alt="" />
                                    <div className="info">
                                        <em>3 days in Norway</em>
                                        <h3>Horseback ride through Valencia</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="adventure-detail.html" className="grid_item_adventure">
                                <figure>
                                    <div className="score"><strong>8.5</strong></div>
                                    <img src="img/adventure_popular_6.jpg" className="img-fluid" alt="" />
                                    <div className="info">
                                        <em>3 days in Brasil</em>
                                        <h3>Horseback ride through Valencia</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>

                    </div>
                </section>

                <div className="banner">
                    <div className="wrapper d-flex align-items-center opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.3)">
                        <div>
                            <small>Adventure</small>
                            <h3>Your Perfect<br />Advenure Experience</h3>
                            <p>Activities and accommodations</p>
                            <Link to="adventure-detail.html" className="btn_1">Read more</Link>
                        </div>
                    </div>
                </div>

                <section>
                    <div className="main_title_3">
                        <span><em></em></span>
                        <h2>Last Added Adventures Tours</h2>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <Link to="restaurant-detail.html" className="grid_item latest_adventure">
                                <figure>
                                    <div className="score"><strong>8.5</strong></div>
                                    <img src="img/adventure_latest_1.jpg" className="img-fluid" alt="" />
                                    <div className="info">
                                        <em>2 days in United States</em>
                                        <h3>Canyoning El paso</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <Link to="restaurant-detail.html" className="grid_item latest_adventure">
                                <figure>
                                    <div className="score"><strong>7.9</strong></div>
                                    <img src="img/adventure_latest_2.jpg" className="img-fluid" alt="" />
                                    <div className="info">
                                        <em>2 days in Canada</em>
                                        <h3>Camping and mountains</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <Link to="restaurant-detail.html" className="grid_item latest_adventure">
                                <figure>
                                    <div className="score"><strong>7.5</strong></div>
                                    <img src="img/adventure_latest_3.jpg" className="img-fluid" alt="" />
                                    <div className="info">
                                        <em>1 days in United States</em>
                                        <h3>Route 66 Bike Riding</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <Link to="restaurant-detail.html" className="grid_item latest_adventure">
                                <figure>
                                    <div className="score"><strong>9.0</strong></div>
                                    <img src="img/adventure_latest_4.jpg" className="img-fluid" alt="" />
                                    <div className="info">
                                        <em>2 days Belize</em>
                                        <h3>San Rafael Belize</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                    </div>
                    <Link to="#0"><strong>View all (157) <i className="arrow_carrot-right"></i></strong></Link>
                </section>
            </div>
        </>
    );
};

export default PopularAdventures;