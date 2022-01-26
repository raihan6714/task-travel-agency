import React from 'react';
import { Link } from 'react-router-dom';

const Payments = () => {
    return (
        <div>
            <section className="hero_in general">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="fadeInUp"><span></span>Faq Section</h1>
                    </div>
                </div>
            </section>
            <div className="container margin_60_35">
                <div className="row">
                    <aside className="col-lg-3" id="sidebar">
                        <div className="box_style_cat" id="faq_box">
                            <ul id="cat_nav">
                                <li><Link to="#payment" className="active text-decoration-none"><i className="icon_document_alt"></i>Payments</Link></li>
                                <li><Link to="#tips" className='text-decoration-none'><i className="icon_document_alt"></i>Suggestions</Link></li>
                                <li><Link to="#reccomendations" className='text-decoration-none'><i className="icon_document_alt"></i>Reccomendations</Link></li>
                                <li><Link to="#terms" className='text-decoration-none'><i className="icon_document_alt"></i>Terms&amp;conditons</Link></li>
                                <li><Link to="#booking" className='text-decoration-none'><i className="icon_document_alt"></i>Booking</Link></li>
                            </ul>
                        </div>
                        <p><Link to="#0" className="btn_1 text-decoration-none" data-toggle="modal" data-target="#exampleModal">Launch demo modal</Link></p>
                        <div className="menu_fixed modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <div className="col-lg-9" id="faq">
                        <h4 className="nomargin_top">Payments</h4>
                        <div role="tablist" className="add_bottom_45 accordion_2" id="payment">
                            <div className="card">
                                <div className="card-header" role="tab">
                                    <h5 className="mb-0">
                                        <Link data-toggle="collapse" className='text-decoration-none' to="#collapseOne_payment" aria-expanded="true"><i className="indicator ti-minus"></i>Introdocution</Link>
                                    </h5>
                                </div>

                                <div id="collapseOne_payment" className="collapse show" role="tabpanel" data-parent="#payment">
                                    <div className="card-body">
                                        <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" role="tab">
                                    <h5 className="mb-0">
                                        <Link className="collapsed text-decoration-none" data-toggle="collapse" to="#collapseTwo_payment" aria-expanded="false">
                                            <i className="indicator ti-plus"></i>Generative Modeling Review
                                        </Link>
                                    </h5>
                                </div>
                                <div id="collapseTwo_payment" className="collapse" role="tabpanel" data-parent="#payment">
                                    <div className="card-body">
                                        <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" role="tab">
                                    <h5 className="mb-0">
                                        <Link className="collapsed text-decoration-none" data-toggle="collapse" to="#collapseThree_payment" aria-expanded="false">
                                            <i className="indicator ti-plus"></i>Variational Autoencoders
                                        </Link>
                                    </h5>
                                </div>
                                <div id="collapseThree_payment" className="collapse" role="tabpanel" data-parent="#payment">
                                    <div className="card-body">
                                        <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h4 className="nomargin_top">Suggestions</h4>
                        <div role="tablist" className="add_bottom_45 accordion_2" id="tips">
                            <div className="card">
                                <div className="card-header" role="tab">
                                    <h5 className="mb-0">
                                        <Link data-toggle="collapse" className='text-decoration-none' to="#collapseOne_tips" aria-expanded="true"><i className="indicator ti-plus"></i>Introdocution</Link>
                                    </h5>
                                </div>

                                <div id="collapseOne_tips" className="collapse" role="tabpanel" data-parent="#tips">
                                    <div className="card-body">
                                        <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" role="tab">
                                    <h5 className="mb-0">
                                        <Link className="collapsed text-decoration-none" data-toggle="collapse" to="#collapseTwo_tips" aria-expanded="false">
                                            <i className="indicator ti-plus"></i>Generative Modeling Review
                                        </Link>
                                    </h5>
                                </div>
                                <div id="collapseTwo_tips" className="collapse" role="tabpanel" data-parent="#tips">
                                    <div className="card-body">
                                        <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" role="tab">
                                    <h5 className="mb-0">
                                        <Link className="collapsed text-decoration-none" data-toggle="collapse" to="#collapseThree_tips" aria-expanded="false">
                                            <i className="indicator ti-plus"></i>Variational Autoencoders
                                        </Link>
                                    </h5>
                                </div>
                                <div id="collapseThree_tips" className="collapse" role="tabpanel" data-parent="#tips">
                                    <div className="card-body">
                                        <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h4 className="nomargin_top">Reccomendations</h4>
                        <div role="tablist" className="add_bottom_45 accordion_2" id="reccomendations">
                            <div className="card">
                                <div className="card-header" role="tab">
                                    <h5 className="mb-0">
                                        <Link data-toggle="collapse" className='text-decoration-none' to="#collapseOne_reccomendations" aria-expanded="true"><i className="indicator ti-plus"></i>Introdocution</Link>
                                    </h5>
                                </div>

                                <div id="collapseOne_reccomendations" className="collapse" role="tabpanel" data-parent="#reccomendations">
                                    <div className="card-body">
                                        <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" role="tab">
                                    <h5 className="mb-0">
                                        <Link className="collapsed text-decoration-none" data-toggle="collapse" to="#collapseTwo_reccomendations" aria-expanded="false">
                                            <i className="indicator ti-plus"></i>Generative Modeling Review
                                        </Link>
                                    </h5>
                                </div>
                                <div id="collapseTwo_reccomendations" className="collapse" role="tabpanel" data-parent="#reccomendations">
                                    <div className="card-body">
                                        <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" role="tab">
                                    <h5 className="mb-0">
                                        <Link className="collapsed text-decoration-none" data-toggle="collapse" to="#collapseThree_reccomendations" aria-expanded="false">
                                            <i className="indicator ti-plus"></i>Variational Autoencoders
                                        </Link>
                                    </h5>
                                </div>
                                <div id="collapseThree_reccomendations" className="collapse" role="tabpanel" data-parent="#reccomendations">
                                    <div className="card-body">
                                        <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h4 className="nomargin_top">Terms&amp;conditons</h4>
                        <div role="tablist" className="add_bottom_45 accordion_2" id="terms">
                            <div className="card">
                                <div className="card-header" role="tab">
                                    <h5 className="mb-0">
                                        <Link data-toggle="collapse" className='text-decoration-none' to="#collapseOne_terms" aria-expanded="true"><i className="indicator ti-plus"></i>Introdocution</Link>
                                    </h5>
                                </div>

                                <div id="collapseOne_terms" className="collapse" role="tabpanel" data-parent="#terms">
                                    <div className="card-body">
                                        <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" role="tab">
                                    <h5 className="mb-0">
                                        <Link className="collapsed text-decoration-none" data-toggle="collapse" to="#collapseTwo_terms" aria-expanded="false">
                                            <i className="indicator ti-plus"></i>Generative Modeling Review
                                        </Link>
                                    </h5>
                                </div>
                                <div id="collapseTwo_terms" className="collapse" role="tabpanel" data-parent="#terms">
                                    <div className="card-body">
                                        <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" role="tab">
                                    <h5 className="mb-0">
                                        <Link className="collapsed text-decoration-none" data-toggle="collapse" to="#collapseThree_terms" aria-expanded="false">
                                            <i className="indicator ti-plus"></i>Variational Autoencoders
                                        </Link>
                                    </h5>
                                </div>
                                <div id="collapseThree_terms" className="collapse" role="tabpanel" data-parent="#terms">
                                    <div className="card-body">
                                        <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h4 className="nomargin_top">Booking</h4>
                        <div role="tablist" className="add_bottom_45 accordion_2" id="booking">
                            <div className="card">
                                <div className="card-header" role="tab">
                                    <h5 className="mb-0">
                                        <Link data-toggle="collapse" className='text-decoration-none' to="#collapseOne_booking" aria-expanded="true"><i className="indicator ti-plus"></i>Introdocution</Link>
                                    </h5>
                                </div>

                                <div id="collapseOne_booking" className="collapse" role="tabpanel" data-parent="#booking">
                                    <div className="card-body">
                                        <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" role="tab">
                                    <h5 className="mb-0">
                                        <Link className="collapsed text-decoration-none" data-toggle="collapse" to="#collapseTwo_booking" aria-expanded="false">
                                            <i className="indicator ti-plus"></i>Generative Modeling Review
                                        </Link>
                                    </h5>
                                </div>
                                <div id="collapseTwo_booking" className="collapse" role="tabpanel" data-parent="#booking">
                                    <div className="card-body">
                                        <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" role="tab">
                                    <h5 className="mb-0">
                                        <Link className="collapsed text-decoration-none" data-toggle="collapse" to="#collapseThree_booking" aria-expanded="false">
                                            <i className="indicator ti-plus"></i>Variational Autoencoders
                                        </Link>
                                    </h5>
                                </div>
                                <div id="collapseThree_booking" className="collapse" role="tabpanel" data-parent="#booking">
                                    <div className="card-body">
                                        <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payments;