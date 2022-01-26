import React from 'react';
import AdventureHeader from '../AdventureHeader/AdventureHeader';
import PlanYourTrip from '../PlanYourTrip/PlanYourTrip';
import PopularAdventures from '../PopularAdventures/PopularAdventures';
import TravelWithUs from '../TravelWithUs/TravelWithUs';

const Adventure = () => {
    return (
        <>
            <AdventureHeader />
            <PopularAdventures />
            <PlanYourTrip />
            <TravelWithUs />
        </>
    );
};

export default Adventure;