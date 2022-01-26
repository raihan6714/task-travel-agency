import React from 'react';
import { Link } from 'react-router-dom';

const AdventureHeader = () => {
    return (
        <>
            <section className="header-video adventure">
                <div id="hero_video">
                    <div className="wrapper">
                        <div className="container container-custom">
                            <small>Introducing</small>
                            <h3>Panagea Adventures</h3>
                            <p>Hosted journeys to extraordinary and unique places.</p>
                            <Link to="/adventureDetail" className="btn_1 text-decoration-none">Read more</Link>
                        </div>
                    </div>
                </div>
                <img src="img/video_fix.png" alt="" className="header-video--media" data-video-src="video/adventure" data-teaser-source="video/adventure" data-provider="" data-video-width="1920" data-video-height="960" />
            </section>
        </>
    );
};

export default AdventureHeader;