import React from 'react';
import TuitionBanner from '../TuitionBanner/TuitionBanner';
import TuitionDetails from '../TuitionDetails/TuitionDetails';
import useTitle from '../../../hooks/useTitle';

const TuitionComponents = () => {
    useTitle("Tuition");
    return (
        <>
            <TuitionBanner></TuitionBanner>
            <TuitionDetails></TuitionDetails>
        </>
    );
};

export default TuitionComponents;