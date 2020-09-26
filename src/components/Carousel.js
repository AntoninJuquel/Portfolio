import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Route } from 'react-router-dom';

import Card from "./Card";

function Carousel({itemsList}) {

    const [items, setItems] = useState(itemsList)

    const [description, setDescription] = useState()

    const renderItems = (items) => {
        return items.map((item,index) => {
            return (
                <Col key={index} className='my-center' xl={3} lg={6} md={6} sm={12}>
                    <Card items={items} item={item} setItems={setItems} setDescription={setDescription}/>
                </Col>
            )
        })
    }

    const renderRoutes = () => {
        return items.map((route,index) => {
            return <Route key={index} path={route.path} render={() => route.render} />
        })
    }

    return (
        <Container fluid={true}>
            <Row>
                {renderItems(items)}
            </Row>
            <div className='my-center'>
                {renderRoutes()}
            </div>
            <div>
                {description}
            </div>
        </Container>
    )
}

export default Carousel