import React from "react";
import { Link } from "react-router-dom";
import CardInfo from "./CardInfo";

function Card({ items, item, setItems }) {

    const handleCardEnter = (index) => {
        let newItems = [...items];

        newItems[index].selected = true

        newItems.forEach(item => {
            if (newItems.indexOf(item) !== index) {
                item.selected = false
            }
        });

        setItems(newItems)
    }

    return (
        <div className='d-inline-block my-card' onClick={(e) => handleCardEnter(items.indexOf(item))} onMouseEnter={(e) => handleCardEnter(items.indexOf(item))} /*onMouseOut={(e) => out(item)}*/>
            {item.path && <Link className='nav-link' to={item.path}><img className='my-card-img' src={item.imgSrc} alt={item.path} /></Link>}
            {item.link && <a href={item.link} target='_blank' rel="noopener noreferrer" ><img className='my-card-img' src={item.imgSrc} alt={item.path} /></a>}

            <div className='my-card-info'>
                {item.selected && <CardInfo title={item.title} subTitle={item.subTitle} path={item.path} link={item.link} />}
            </div>
        </div>

    )
}

export default Card