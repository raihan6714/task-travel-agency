import React from 'react';
import { Link } from 'react-router-dom';

const HotelDetails = () => {
    return (
        <div className='datepicker_mobile_full'>
            <div className='theia-exception'>
                <section className="hero_in hotels_detail">
                    <div className="wrapper">
                        <div className="container">
                            <h1 className="fadeInUp"><span></span>Hotel detail page</h1>
                        </div>
                        <span className="magnific-gallery">
                            <Link to="img/gallery/ghotel_list_1.jp" className="btn_photos text-decoration-none" title="Photo title" data-effect="mfp-zoom-in">View photos</Link>
                            <Link to="img/gallery/hotel_list_2.jpg" title="Photo title" data-effect="mfp-zoom-in"></Link>
                            <Link to="img/gallery/hotel_list_3.jpg" title="Photo title" data-effect="mfp-zoom-in"></Link>
                        </span>
                    </div>
                </section>
                <div className="bg_color_1">
                    <nav className="secondary_nav sticky_horizontal">
                        <div className="container">
                            <ul className="clearfix">
                                <li><Link to="#description" className="active">Description</Link></li>
                                <li><Link to="#reviews">Reviews</Link></li>
                                <li><Link to="#sidebar">Booking</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container margin_60_35">
                        <div className="row">
                            <div className="col-lg-8">
                                <section id="description">
                                    <h2>Description</h2>
                                    <p>Per consequat adolescens ex, cu nibh commune <strong>temporibus vim</strong>, ad sumo viris eloquentiam sed. Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
                                    <p>Cum et probo menandri. Officiis consulatu pro et, ne sea sale invidunt, sed ut sint <strong>blandit</strong> efficiendi. Atomorum explicari eu qui, est enim quaerendum te. Quo harum viris id. Per ne quando dolore evertitur, pro ad cibo commune.</p>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <ul className="bullets">
                                                <li>Dolorem mediocritatem</li>
                                                <li>Mea appareat</li>
                                                <li>Prima causae</li>
                                                <li>Singulis indoctum</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <ul className="bullets">
                                                <li>Timeam inimicus</li>
                                                <li>Oportere democritum</li>
                                                <li>Cetero inermis</li>
                                                <li>Pertinacia eum</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr />
                                    <h3>Pictures from our users</h3>
                                    <div className="pictures_grid magnific-gallery clearfix">
                                        <figure><Link to="img/detail_gallery/detail_1.jpg" title="Photo title" data-effect="mfp-zoom-in"><img src="img/detail_gallery/detail_1.jpg" alt="" /></Link></figure>
                                        <figure><Link to="img/detail_gallery/detail_2.jpg" title="Photo title" data-effect="mfp-zoom-in"><img src="img/detail_gallery/detail_2.jpg" alt="" /></Link></figure>
                                        <figure><Link to="img/detail_gallery/detail_3.jpg" title="Photo title" data-effect="mfp-zoom-in"><img src="img/detail_gallery/detail_3.jpg" alt="" /></Link></figure>
                                        <figure><Link to="img/detail_gallery/detail_4.jpg" title="Photo title" data-effect="mfp-zoom-in"><img src="img/detail_gallery/detail_4.jpg" alt="" /></Link></figure>
                                        <figure><Link to="img/detail_gallery/detail_5.jpg" title="Photo title" data-effect="mfp-zoom-in"><span className="d-flex align-items-center justify-content-center">+10</span><img src="img/detail_gallery/detail_5.jpg" alt="" /></Link></figure>
                                    </div>

                                    <hr />
                                    <div className="room_type first">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img src="img/gallery/hotel_list_1.jpg" className="img-fluid" alt="" />
                                            </div>
                                            <div className="col-md-8">
                                                <h4>Single Room</h4>
                                                <p>Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
                                                <ul className="hotel_facilities">
                                                    <li><img src="img/hotel_facilites_icon_2.svg" alt="" />Single Bed</li>
                                                    <li><img src="img/hotel_facilites_icon_4.svg" alt="" />Free Wifi</li>
                                                    <li><img src="img/hotel_facilites_icon_5.svg" alt="" />Shower</li>
                                                    <li><img src="img/hotel_facilites_icon_7.svg" alt="" />Air Condition</li>
                                                    <li><img src="img/hotel_facilites_icon_8.svg" alt="" />Hairdryer</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="room_type gray">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img src="img/gallery/hotel_list_2.jpg" className="img-fluid" alt="" />
                                            </div>
                                            <div className="col-md-8">
                                                <h4>Double Room</h4>
                                                <p>Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
                                                <ul className="hotel_facilities">
                                                    <li><img src="img/hotel_facilites_icon_3.svg" alt="" />Double Bed</li>
                                                    <li><img src="img/hotel_facilites_icon_4.svg" alt="" />Free Wifi</li>
                                                    <li><img src="img/hotel_facilites_icon_6.svg" alt="" />Bathtub</li>
                                                    <li><img src="img/hotel_facilites_icon_7.svg" alt="" />Air Condition</li>
                                                    <li><img src="img/hotel_facilites_icon_8.svg" alt="" />Hairdryer</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="room_type last">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img src="img/gallery/hotel_list_3.jpg" className="img-fluid" alt="" />
                                            </div>
                                            <div className="col-md-8">
                                                <h4>Suite Room</h4>
                                                <p>Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
                                                <ul className="hotel_facilities">
                                                    <li><img src="img/hotel_facilites_icon_3.svg" alt="" />King size Bed</li>
                                                    <li><img src="img/hotel_facilites_icon_4.svg" alt="" />Free Wifi</li>
                                                    <li><img src="img/hotel_facilites_icon_6.svg" alt="" />Bathtub</li>
                                                    <li><img src="img/hotel_facilites_icon_7.svg" alt="" />Air Condition</li>
                                                    <li><img src="img/hotel_facilites_icon_9.svg" alt="" />Swimming pool</li>
                                                    <li><img src="img/hotel_facilites_icon_3.svg" alt="" />Hairdryer</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <h3>Location</h3>
                                    <div id="map" className="map map_single add_bottom_30"></div>
                                </section>

                                <section id="reviews">
                                    <h2>Reviews</h2>
                                    <div className="reviews-container">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div id="review_summary">
                                                    <strong>8.5</strong>
                                                    <em>Superb</em>
                                                    <small>Based on 4 reviews</small>
                                                </div>
                                            </div>
                                            <div className="col-lg-9">
                                                <div className="row">
                                                    <div className="col-lg-10 col-9">
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: "90%", ariaValuenow: "90", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-3"><small><strong>5 stars</strong></small></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-10 col-9">
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: "95%", ariaValuenow: "95", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-3"><small><strong>4 stars</strong></small></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-10 col-9">
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: "60%", ariaValuenow: "60", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-3"><small><strong>3 stars</strong></small></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-10 col-9">
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: "20%", ariaValuenow: "20", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-3"><small><strong>2 stars</strong></small></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-10 col-9">
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: "0", ariaValuenow: "0", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-3"><small><strong>1 stars</strong></small></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="reviews-container">

                                        <div className="review-box clearfix">
                                            <figure className="rev-thumb"><img src="img/avatar1.jpg" alt="" />
                                            </figure>
                                            <div className="rev-content">
                                                <div className="rating">
                                                    <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                                                </div>
                                                <div className="rev-info">
                                                    Admin – April 03, 2016:
                                                </div>
                                                <div className="rev-text">
                                                    <p>
                                                        Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-box clearfix">
                                            <figure className="rev-thumb"><img src="img/avatar2.jpg" alt="" />
                                            </figure>
                                            <div className="rev-content">
                                                <div className="rating">
                                                    <i className="icon-star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                                                </div>
                                                <div className="rev-info">
                                                    Ahsan – April 01, 2016:
                                                </div>
                                                <div className="rev-text">
                                                    <p>
                                                        Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-box clearfix">
                                            <figure className="rev-thumb"><img src="img/avatar3.jpg" alt="" />
                                            </figure>
                                            <div className="rev-content">
                                                <div className="rating">
                                                    <i className="icon-star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                                                </div>
                                                <div className="rev-info">
                                                    Sara – March 31, 2016:
                                                </div>
                                                <div className="rev-text">
                                                    <p>
                                                        Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <hr />

                                <div className="add-review">
                                    <h5>Leave a Review</h5>
                                    <form>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label>Name and Lastname *</label>
                                                <input type="text" name="name_review" id="name_review" placeholder="" className="form-control" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Email *</label>
                                                <input type="email" name="email_review" id="email_review" className="form-control" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Rating </label>
                                                <div className="custom-select-form">
                                                    <select name="rating_review" id="rating_review" className="wide">
                                                        <option value="1">1 (lowest)</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5" selected>5 (medium)</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10 (highest)</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label>Your Review</label>
                                                <textarea name="review_text" id="review_text" className="form-control" style={{ height: '130px' }}></textarea>
                                            </div>
                                            <div className="form-group col-md-12 add_top_20">
                                                <input type="submit" value="Submit" className="btn_1" id="submit-review" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <aside className="col-lg-4" id="sidebar">
                                <div className="box_detail booking">
                                    <div className="price">
                                        <span>45$ <small>person</small></span>
                                        <div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div>
                                    </div>

                                    <div className="form-group input-dates">
                                        <input className="form-control" type="text" name="dates" placeholder="When.." />
                                        <i className="icon_calendar"></i>
                                    </div>

                                    <div className="panel-dropdown">
                                        <Link to="#">Guests <span className="qtyTotal">1</span></Link>
                                        <div className="panel-dropdown-content right">
                                            <div className="qtyButtons">
                                                <label>Adults</label>
                                                <input type="text" name="qtyInput" value="1" />
                                            </div>
                                            <div className="qtyButtons">
                                                <label>Childrens</label>
                                                <input type="text" name="qtyInput" value="0" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group clearfix">
                                        <div className="custom-select-form">
                                            <select className="wide">
                                                <option>Room Type</option>
                                                <option>Single Room</option>
                                                <option>Double Room</option>
                                                <option>Suite Room</option>
                                            </select>
                                        </div>
                                    </div>
                                    <Link to="cart-1.html" className=" add_top_30 btn_1 full-width purchase">Purchase</Link>
                                    <Link to="wishlist.html" className="btn_1 full-width outline wishlist"><i className="icon_heart"></i> Add to wishlist</Link>
                                    <div className="text-center"><small>No money charged in this step</small></div>
                                </div>
                                <ul className="share-buttons">
                                    <li>
                                        <Link className="fb-share text-decoration-none" to="/">
                                            <i className="social_facebook"></i> Share
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="twitter-share text-decoration-none" to="/">
                                            <i className="social_twitter"></i> Tweet
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="gplus-share text-decoration-none" to="/">
                                            <i className="social_googleplus"></i> Share
                                        </Link>
                                    </li>
                                </ul>
                            </aside>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;