import React from "react";
import { useSpring, animated } from "react-spring";

function CardInfo({ title, subTitle, path, link }) {

    const style = useSpring({ opacity: 1, from: { opacity: 0 } })

    return (

        <animated.div style={style}>
            <p className='my-card-title'>{title}</p>
            <p className='my-card-subTitle'>{subTitle}</p>
        </animated.div>
    )
}

export default CardInfo