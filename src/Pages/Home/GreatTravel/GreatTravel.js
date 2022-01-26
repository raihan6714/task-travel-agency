import React from 'react';
import { Link } from 'react-router-dom';
const GreatTravel = () => {
    return (
        <>

            <div className="call_section">
                <div className="container clearfix">
                    <div className="col-lg-5 col-md-6 float-right wow" data-wow-offset="250">
                        <div className="block-reveal">
                            <div className="block-vertical"></div>
                            <div className="box_1">
                                <h3>Enjoy a GREAT travel with us</h3>
                                <p>Ius cu tamquam persequeris, eu veniam apeirian platonem qui, id aliquip voluptatibus
                                    pri. Ei mea primis ornatus disputationi. Menandri erroribus cu per, duo solet congue
                                    ut. </p>
                                <Link to="#0" className="btn_1 rounded">Read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default GreatTravel;