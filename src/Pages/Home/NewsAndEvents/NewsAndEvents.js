import React from 'react';
import { Link } from 'react-router-dom';

const NewsAndEvents = () => {
    return (
        <>
            <div className="bg_color_1">
                <div className="container margin_80_55">
                    <div className="main_title_2">
                        <span><em></em></span>
                        <h3>News and Events</h3>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <Link className="box_news text-decoration-none" to="#0">
                                <figure><img src="img/news_home_1.jpg" alt="" />
                                    <figcaption><strong>28</strong>Dec</figcaption>
                                </figure>
                                <ul>
                                    <li>Mark Twain</li>
                                    <li>20.11.2017</li>
                                </ul>
                                <h4>Pri oportere scribentur eu</h4>
                                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius
                                    esse ullum vidisse....</p>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link className="box_news text-decoration-none" to="#0">
                                <figure><img src="img/news_home_2.jpg" alt="" />
                                    <figcaption><strong>28</strong>Dec</figcaption>
                                </figure>
                                <ul>
                                    <li>Jhon Doe</li>
                                    <li>20.11.2017</li>
                                </ul>
                                <h4>Duo eius postea suscipit ad</h4>
                                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius
                                    esse ullum vidisse....</p>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link className="box_news text-decoration-none" to="#0">
                                <figure><img src="img/news_home_3.jpg" alt="" />
                                    <figcaption><strong>28</strong>Dec</figcaption>
                                </figure>
                                <ul>
                                    <li>Luca Robinson</li>
                                    <li>20.11.2017</li>
                                </ul>
                                <h4>Elitr mandamus cu has</h4>
                                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius
                                    esse ullum vidisse....</p>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link className="box_news text-decoration-none" to="#0">
                                <figure><img src="img/news_home_4.jpg" alt="" />
                                    <figcaption><strong>28</strong>Dec</figcaption>
                                </figure>
                                <ul>
                                    <li>Paula Rodrigez</li>
                                    <li>20.11.2017</li>
                                </ul>
                                <h4>Id est adhuc ignota delenit</h4>
                                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius
                                    esse ullum vidisse....</p>
                            </Link>
                        </div>
                    </div>
                    <p className="btn_home_align"><Link to="blog.html" className="btn_1 rounded">View all news</Link></p>
                </div>
            </div>
        </>
    );
};

export default NewsAndEvents;