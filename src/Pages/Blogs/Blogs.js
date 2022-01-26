import React from 'react';
// import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div>
            <section className="hero_in general">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="fadeInUp"><span></span>Panagea blog</h1>
                    </div>
                </div>
            </section>
            {/* <div className="container margin_60_35">
                <div className="row">
                    <div className="col-lg-9">
                        <article className="blog wow fadeIn">
                            <div className="row no-gutters">
                                <div className="col-lg-7">
                                    <figure>
                                        <Link to="blog-post.html"><img src="img/blog-1.jpg" alt="" />
                                            <div className="preview"><span>Read more</span></div>
                                        </Link>
                                    </figure>
                                </div>
                                <div className="col-lg-5">
                                    <div className="post_info">
                                        <small>20 Nov. 2017</small>
                                        <h3><Link to="blog-post.html">Nec nihil menandri appellantur ut</Link></h3>
                                        <p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit
                                            salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
                                        <ul>
                                            <li>
                                                <div className="thumb"><img src="img/thumb_blog.jpg" alt="" /></div> Jessica
                                                Hoops
                                            </li>
                                            <li><i className="icon_comment_alt"></i> 20</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="blog wow fadeIn">
                            <div className="row no-gutters">
                                <div className="col-lg-7">
                                    <figure>
                                        <Link to="blog-post.html"><img src="img/blog-2.jpg" alt="" />
                                            <div className="preview"><span>Read more</span></div>
                                        </Link>
                                    </figure>
                                </div>
                                <div className="col-lg-5">
                                    <div className="post_info">
                                        <small>20 Nov. 2017</small>
                                        <h3><Link to="blog-post.html">Nec nihil menandri appellantur ut</Link></h3>
                                        <p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit
                                            salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
                                        <ul>
                                            <li>
                                                <div className="thumb"><img src="img/thumb_blog.jpg" alt="" /></div> Jessica
                                                Hoops
                                            </li>
                                            <li><i className="icon_comment_alt"></i> 20</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="blog wow fadeIn">
                            <div className="row no-gutters">
                                <div className="col-lg-7">
                                    <figure>
                                        <Link to="blog-post.html"><img src="img/blog-3.jpg" alt="" />
                                            <div className="preview"><span>Read more</span></div>
                                        </Link>
                                    </figure>
                                </div>
                                <div className="col-lg-5">
                                    <div className="post_info">
                                        <small>20 Nov. 2017</small>
                                        <h3><Link to="blog-post.html">Nec nihil menandri appellantur ut</Link></h3>
                                        <p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit
                                            salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
                                        <ul>
                                            <li>
                                                <div className="thumb"><img src="img/thumb_blog.jpg" alt="" /></div> Jessica
                                                Hoops
                                            </li>
                                            <li><i className="icon_comment_alt"></i> 20</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="blog wow fadeIn">
                            <div className="row no-gutters">
                                <div className="col-lg-7">
                                    <figure>
                                        <Link to="blog-post.html"><img src="img/blog-4.jpg" alt="" />
                                            <div className="preview"><span>Read more</span></div>
                                        </Link>
                                    </figure>
                                </div>
                                <div className="col-lg-5">
                                    <div className="post_info">
                                        <small>20 Nov. 2017</small>
                                        <h3><Link to="blog-post.html">Nec nihil menandri appellantur ut</Link></h3>
                                        <p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit
                                            salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
                                        <ul>
                                            <li>
                                                <div className="thumb"><img src="img/thumb_blog.jpg" alt="" /></div> Jessica
                                                Hoops
                                            </li>
                                            <li><i className="icon_comment_alt"></i> 20</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <nav aria-label="...">
                            <ul className="pagination pagination-sm">
                                <li className="page-item disabled">
                                    <Link className="page-link" to="#" tabindex="-1">Previous</Link>
                                </li>
                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" to="#">Next</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <aside className="col-lg-3">
                        <div className="widget">
                            <form>
                                <div className="form-group">
                                    <input type="text" name="search" id="search" className="form-control"
                                        placeholder="Search..." />
                                </div>
                                <button type="submit" id="submit" className="btn_1 rounded"> Search</button>
                            </form>
                        </div>
                        <div className="widget">
                            <div className="widget-title">
                                <h4>Recent Posts</h4>
                            </div>
                            <ul className="comments-list">
                                <li>
                                    <div className="alignleft">
                                        <Link to="#0"><img src="img/blog-5.jpg" alt="" /></Link>
                                    </div>
                                    <small>11.08.2016</small>
                                    <h3><Link to="#" title="">Verear qualisque ex minimum...</Link></h3>
                                </li>
                                <li>
                                    <div className="alignleft">
                                        <Link to="#0"><img src="img/blog-6.jpg" alt="" /></Link>
                                    </div>
                                    <small>11.08.2016</small>
                                    <h3><Link to="#" title="">Verear qualisque ex minimum...</Link></h3>
                                </li>
                            </ul>
                        </div>
                        <div className="widget">
                            <div className="widget-title">
                                <h4>Blog Categories</h4>
                            </div>
                            <ul className="cats">
                                <li><Link to="#">Admissions <span>(12)</span></Link></li>
                                <li><Link to="#">News <span>(21)</span></Link></li>
                                <li><Link to="#">Events <span>(44)</span></Link></li>
                                <li><Link to="#">Focus in the lab <span>(31)</span></Link></li>
                            </ul>
                        </div>
                        <div className="widget">
                            <div className="widget-title">
                                <h4>Popular Tags</h4>
                            </div>
                            <div className="tags">
                                <Link to="#">Information tecnology</Link>
                                <Link to="#">Students</Link>
                                <Link to="#">Community</Link>
                                <Link to="#">Carreers</Link>
                                <Link to="#">Literature</Link>
                                <Link to="#">Seminars</Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div> */}
        </div>
    );
};

export default Blogs;