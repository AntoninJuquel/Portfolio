import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ScrollToRef } from "../../functions/Utilities";

import Card from "./Card";

function Carousel({itemsList}) {

    const renderRef = useRef(null);

    const [items, setItems] = useState(itemsList)

    const [render, setRender] = useState()

    const mySetRender = (render) => {
        setRender(render)
        setTimeout(() => {
            ScrollToRef(renderRef)
          }, 100);
    }

    const renderItems = (items) => {
        return items.map((item,index) => {
            return (
                <Col key={index} className='my-center' xl={3} lg={6} md={6} sm={12}>
                    <Card items={items} item={item} setItems={setItems} setRender={mySetRender}/>
                </Col>
            )
        })
    }

    return (
        <Container fluid={true}>
            <Row>
                {renderItems(items)}
            </Row>
            <div ref={renderRef}>
                {render}
            </div>
        </Container>
    )
}

export default Carousel