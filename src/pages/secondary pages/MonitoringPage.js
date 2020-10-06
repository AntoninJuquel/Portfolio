import React from 'react';
import Carousel from '../../components/reusable components/Carousel';
import { Monitorings } from "../../utils/Monitorings";

function MonitoringPage(params) {
    return (
        <div>
            <Carousel itemsList={Monitorings} />
        </div>
    )
}

export default MonitoringPage