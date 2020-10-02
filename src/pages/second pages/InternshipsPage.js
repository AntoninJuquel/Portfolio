import React from 'react';

import Carousel from "../../components/Carousel";
import InternShips from '../../utils/Internships';

function InternshipsPage(params) {
    return (
        <div>
           <Carousel itemsList={InternShips} /> 
        </div>
    )
}

export default InternshipsPage