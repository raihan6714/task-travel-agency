import React from 'react';
import { Link } from 'react-router-dom';

const Help = () => {
    return (
        <div>
            <section className="hero_in general">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="fadeInUp"><span></span>How we can help?</h1>
                        <form className="fadeInUp">
                            <div id="custom-search-input">
                                <div className="input-group">
                                    <input type="text" className=" search-query" placeholder="Ask a question..." />
                                    <input type="submit" className="btn_search" value="Search" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <div className="container margin_60_35">
                <div className="main_title_2">
                    <span><em></em></span>
                    <h2>Select a topic</h2>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <Link className="box_topic text-decoration-none" to="#0">
                            <span><i className="pe-7s-wallet"></i></span>
                            <h3>Payments</h3>
                            <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris.</p>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <Link className="box_topic text-decoration-none" to="#0">
                            <i className="pe-7s-users"></i>
                            <h3>Account</h3>
                            <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris.</p>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <Link className="box_topic text-decoration-none" to="#0">
                            <i className="pe-7s-help2"></i>
                            <h3>General help</h3>
                            <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris.</p>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <Link className="box_topic text-decoration-none" to="#0">
                            <i className="pe-7s-global"></i>
                            <h3>International</h3>
                            <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris.</p>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <Link className="box_topic text-decoration-none" to="#0">
                            <i className="pe-7s-note2"></i>
                            <h3>Cancellation</h3>
                            <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris.</p>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <Link className="box_topic text-decoration-none" to="#0">
                            <i className="pe-7s-comment"></i>
                            <h3>Reviews</h3>
                            <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris.</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg_color_1">
                <div className="container margin_60_35">
                    <div className="main_title_3">
                        <span><em></em></span>
                        <h2>Popular articles</h2>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    </div>
                    <div className="list_articles add_bottom_30 clearfix">
                        <ul>
                            <li><Link to="#0" className='text-decoration-none'><i className="icon_documents_alt"></i>Et dicit vidisse epicurei pri</Link></li>
                            <li><Link to="#0" className='text-decoration-none'><i className="icon_documents_alt"></i>Ad sit virtute rationibus efficiantur</Link></li>
                            <li><Link to="#0" className='text-decoration-none'><i className="icon_documents_alt"></i>Partem vocibus omittam pri ne</Link></li>
                            <li><Link to="#0" className='text-decoration-none'><i className="icon_documents_alt"></i>Case debet appareat duo cu</Link></li>
                            <li><Link to="#0" className='text-decoration-none'><i className="icon_documents_alt"></i>Impedit torquatos quo in</Link></li>
                            <li><Link to="#0" className='text-decoration-none'><i className="icon_documents_alt"></i>Nec omnis alienum no</Link></li>
                            <li><Link to="#0" className='text-decoration-none'><i className="icon_documents_alt"></i>Quo eu soleat facilisi menandri</Link></li>
                            <li><Link to="#0" className='text-decoration-none'><i className="icon_documents_alt"></i>Et dicit vidisse epicurei pri</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;