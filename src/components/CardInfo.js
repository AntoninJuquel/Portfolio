import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

function CardInfo({ title, subTitle, path, link }) {

    const style = useSpring({ opacity: 1, from: { opacity: 0 } })

    return (
        <animated.div className='my-card-info' style={style}>
            <p className='my-card-title'>{title}</p>
            <p className='my-card-subTitle'>{subTitle}</p>
            {/* {path && <Link className='nav-link' to={path}>Voir</Link>}
            {link && <a href={link} target='_blank' rel="noopener noreferrer" >Voir</a>} */}
        </animated.div>
    )
}

export default CardInfo