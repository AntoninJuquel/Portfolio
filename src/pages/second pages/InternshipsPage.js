import React, { useEffect, useRef } from 'react';

import Carousel from "../../components/Carousel";
import InternShips from '../../utils/Internships';

import { ScrollToRef } from "../../functions/Utilities";

function InternshipsPage(params) {
    const carousel = useRef(null)
    useEffect(()=> ScrollToRef(carousel) ,[])
    return (
        <div ref={carousel}>
           <Carousel itemsList={InternShips} /> 
        </div>
    )
}

export default InternshipsPage