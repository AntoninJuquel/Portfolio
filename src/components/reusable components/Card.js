import React from "react";
import { useSpring, animated } from "react-spring";

function Card({ items, item, setItems, setRender }) {

    const handleCardEnter = (index) => {
        let newItems = [...items];

        newItems[index].hover = true

        newItems.forEach(item => {
            if (newItems.indexOf(item) !== index) {
                item.hover = false
            }
        });

        setItems(newItems)
    }

    const handleCardClick = (index) => {
        let newItems = [...items];

        newItems[index].selected = true

        newItems.forEach(item => {
            if (newItems.indexOf(item) !== index) {
                item.selected = false
            }
        });

        setItems(newItems)
        setRender(newItems[index].render)
    }

    return (
        <div className='d-inline-block my-card' onMouseEnter={(e) => handleCardEnter(items.indexOf(item))}>

            <img onClick={(e) => handleCardClick(items.indexOf(item))} className='my-card-img' src={item.imgSrc} alt={item.path} />

            <div className='my-card-info'>
                {item.hover && <CardInfo title={item.title} subTitle={item.subTitle} />}
            </div>
        </div>

    )
}

function CardInfo({ title, subTitle }) {

    const style = useSpring({ opacity: 1, from: { opacity: 0 } })

    return (

        <animated.div style={style}>
            <p className='my-card-title'>{title}</p>
            <p className='my-card-subTitle'>{subTitle}</p>
        </animated.div>
    )
}

export default Card