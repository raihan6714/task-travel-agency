import React from 'react';
import { Link } from 'react-router-dom';

const MediaGallery = () => {
    return (
        <div>
            <section className="hero_in general">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="fadeInUp"><span></span>Media Gallery</h1>
                    </div>
                </div>
            </section>
            <div className="container margin_60_35">
                <div className="main_title_2">
                    <span><em></em></span>
                    <h2>Here some pictures ...</h2>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                </div>
                <div className="grid">
                    <ul className="magnific-gallery">
                        <li>
                            <figure>
                                <img src="img/gallery/large/pic_1.jpg" alt="" />
                                <figcaption>
                                    <div className="caption-content">
                                        <Link to="img/gallery/large/pic_1.jpg" title="Photo title" data-effect="mfp-zoom-in" className='text-decoration-none'>
                                            <i className="pe-7s-albums"></i>
                                            <p>Your caption</p>
                                        </Link>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="img/gallery/large/pic_2.jpg" alt="" />
                                <figcaption>
                                    <div className="caption-content">
                                        <Link to="img/gallery/large/pic_2.jpg" title="Photo title" data-effect="mfp-zoom-in" className='text-decoration-none'>
                                            <i className="pe-7s-albums"></i>
                                            <p>Your caption</p>
                                        </Link>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="img/gallery/large/pic_3.jpg" alt="" />
                                <figcaption>
                                    <div className="caption-content">
                                        <Link to="img/gallery/large/pic_3.jpg" title="Photo title" data-effect="mfp-zoom-in" className='text-decoration-none'>
                                            <i className="pe-7s-albums"></i>
                                            <p>Your caption</p>
                                        </Link>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="img/gallery/large/pic_4.jpg" alt="" />
                                <figcaption>
                                    <div className="caption-content">
                                        <Link to="img/gallery/large/pic_1.jpg" title="Photo title" data-effect="mfp-zoom-in" className='text-decoration-none'>
                                            <i className="pe-7s-albums"></i>
                                            <p>Your caption</p>
                                        </Link>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="img/gallery/large/pic_5.jpg" alt="" />
                                <figcaption>
                                    <div className="caption-content">
                                        <Link to="img/gallery/large/pic_1.jpg" title="Photo title" data-effect="mfp-zoom-in" className='text-decoration-none'>
                                            <i className="pe-7s-albums"></i>
                                            <p>Your caption</p>
                                        </Link>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="img/gallery/large/pic_6.jpg" alt="" />
                                <figcaption>
                                    <div className="caption-content">
                                        <Link to="img/gallery/large/pic_6.jpg" title="Photo title" data-effect="mfp-zoom-in" className='text-decoration-none'>
                                            <i className="pe-7s-albums"></i>
                                            <p>Your caption</p>
                                        </Link>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="img/gallery/large/pic_7.jpg" alt="" />
                                <figcaption>
                                    <div className="caption-content">
                                        <Link to="img/gallery/large/pic_7.jpg" title="Photo title" data-effect="mfp-zoom-in" className='text-decoration-none'>
                                            <i className="pe-7s-albums"></i>
                                            <p>Your caption</p>
                                        </Link>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="img/gallery/large/pic_8.jpg" alt="" />
                                <figcaption>
                                    <div className="caption-content">
                                        <Link to="img/gallery/large/pic_8.jpg" title="Photo title" data-effect="mfp-zoom-in" className='text-decoration-none'>
                                            <i className="pe-7s-albums"></i>
                                            <p>Your caption</p>
                                        </Link>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg_color_1">
                <div className="container margin_60_35">
                    <div className="main_title_2">
                        <span><em></em></span>
                        <h2>Here some videos ...</h2>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    </div>
                    <div className="grid">
                        <ul className="magnific-gallery">
                            <li>
                                <figure>
                                    <img src="img/gallery/large/pic_4.jpg" alt="" />
                                    <figcaption>
                                        <div className="caption-content">
                                            <Link to="https://vimeo.com/45830194" className="video text-decoration-none" title="Video Vimeo" >
                                                <i className="pe-7s-film"></i>
                                                <p>Your caption</p>
                                            </Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>

                            <li>
                                <figure>
                                    <img src="img/gallery/large/pic_5.jpg" alt="" />
                                    <figcaption>
                                        <div className="caption-content">
                                            <Link to="https://www.youtube.com/watch?v=Zz5cu72Gv5Y" className="video text-decoration-none" title="Video Youtube">
                                                <i className="pe-7s-film"></i>
                                                <p>Your caption</p>
                                            </Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <img src="img/gallery/large/pic_3.jpg" alt="" />
                                    <figcaption>
                                        <div className="caption-content">
                                            <Link to="https://vimeo.com/45830194" className="video text-decoration-none" title="Video Vimeo">
                                                <i className="pe-7s-film"></i>
                                                <p>Your caption</p>
                                            </Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaGallery;