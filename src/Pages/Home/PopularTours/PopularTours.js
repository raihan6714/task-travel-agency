import React from 'react';
// import { Link } from 'react-router-dom';
import Tourpackes from '../Tourpackes/Tourpackes';

const PopularTours = () => {
    return (
        <>
            <div className="container container-custom margin_80_0">
                <div className="main_title_2">
                    <span><em></em></span>
                    <h2>Our Popular Tours</h2>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                </div>
                <Tourpackes />
            </div>
        </>
    );
};

export default PopularTours;