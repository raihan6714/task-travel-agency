import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <section className="hero_in general">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="fadeInUp"><span></span>About Panagea</h1>
                    </div>
                </div>
            </section>
            <div className="container margin_80_55">
                <div className="main_title_2">
                    <span><em></em></span>
                    <h2>Why Choose Panagea</h2>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <Link className="box_feat text-decoration-none" to="#0">
                            <i className="pe-7s-medal"></i>
                            <h3>+ 1000 Customers</h3>
                            <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris.</p>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <Link className="box_feat text-decoration-none" to="#0">
                            <i className="pe-7s-help2"></i>
                            <h3>H24 Support</h3>
                            <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris. </p>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <Link className="box_feat text-decoration-none" to="#0">
                            <i className="pe-7s-culture"></i>
                            <h3>+ 575 Locations</h3>
                            <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris.</p>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <Link className="box_feat text-decoration-none" to="#0">
                            <i className="pe-7s-headphones"></i>
                            <h3>Help Direct Line</h3>
                            <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris. </p>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <Link className="box_feat text-decoration-none" to="#0">
                            <i className="pe-7s-credit"></i>
                            <h3>Secure Payments</h3>
                            <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris.</p>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <Link className="box_feat text-decoration-none" to="#0">
                            <i className="pe-7s-chat"></i>
                            <h3>Support via Chat</h3>
                            <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris. </p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg_color_1">
                <div className="container margin_80_55">
                    <div className="main_title_2">
                        <span><em></em></span>
                        <h2>Our Origins and Story</h2>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-lg-6 wow" data-wow-offset="150">
                            <figure className="block-reveal">
                                <div className="block-horizzontal"></div>
                                <img src="img/about_1.jpg" className="img-fluid" alt="" />
                            </figure>
                        </div>
                        <div className="col-lg-5">
                            <p>Lorem ipsum dolor sit amet, homero erroribus in cum. Cu eos <strong>scaevola probatus</strong>. Nam atqui intellegat ei, sed ex graece essent delectus. Autem consul eum ea. Duo cu fabulas nonumes contentiones, nihil voluptaria pro id. Has graeci deterruisset ad, est no primis detracto pertinax, at cum malis vitae facilisis.</p>
                            <p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore <strong>percipitur definitiones</strong> ex, nihil utinam recusabo mel no. Dolores reprehendunt no sit, quo cu viris theophrastus. Sit unum efficiendi cu.</p>
                            <p><em>CEO Marc Schumaker</em></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container margin_80_55">
                <div className="main_title_2">
                    <span><em></em></span>
                    <h2>Our founders</h2>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                </div>
                <div id="carousel" className="owl-carousel owl-theme">
                    <div className="item">
                        <Link to="#0">
                            <div className="title">
                                <h4>Julia Holmes<em>CEO</em></h4>
                            </div><img src="img/1_carousel.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="#0">
                            <div className="title">
                                <h4>Lucas Smith<em>Marketing</em></h4>
                            </div><img src="img/2_carousel.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="#0">
                            <div className="title">
                                <h4>Paul Stephens<em>Business strategist</em></h4>
                            </div><img src="img/3_carousel.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="#0">
                            <div className="title">
                                <h4>Pablo Himenez<em>Customer Service</em></h4>
                            </div><img src="img/4_carousel.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="#0">
                            <div className="title">
                                <h4>Andrew Stuttgart<em>Admissions</em></h4>
                            </div><img src="img/5_carousel.jpg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;