import React from "react";
import CardInfo from "./CardInfo";

function Card({ items, item, setItems }) {

    const handleCardEnter = (index) => {
        let newItems = [...items];

        newItems[index].selected = true

        newItems.forEach(item => {
            if (item.id !== index) {
                item.selected = false
            }
        });

        setItems(newItems)
    }

    // const handleCardOut = (index) => {
    //     let newItems = [...items];

    //     newItems[index].selected = false

    //     setItems(newItems)
    // }

    return (
        <div className='d-inline-block my-card' onClick={(e) => handleCardEnter(item.id)} /*onMouseEnter={(e) => handleCardEnter(item.id)}*/ /*onMouseOut={(e) => out(item)}*/>
            <img className='my-card-img' src={item.imgSrc} alt={item.path} />
            {item.selected && <CardInfo title={item.title} subTitle={item.subTitle} path={item.path} link={item.link} />}
        </div>
    )
}

export default Card