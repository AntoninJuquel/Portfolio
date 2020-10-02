import { Box } from '@material-ui/core';
import React from 'react';

import Carousel from "../../components/Carousel";
import InternShips from '../../utils/Internships';

function InternshipsPage() {
    return (
        <Box>
           <Carousel itemsList={InternShips} /> 
        </Box>
    )
}

export default InternshipsPage