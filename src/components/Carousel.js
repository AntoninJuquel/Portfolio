import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Route } from 'react-router-dom';

import Card from "./Card";
import Hero from "./Hero";


import cv from '../assets/images/cv.png';
import monitoring from '../assets/images/monitoring.png';
import internship from '../assets/images/internship.png';
import projects from '../assets/images/projects.png';

import CurriculumPage from "../pages/CurriculumPage";
import ProjectsPage from "../pages/ProjectsPage";

function Carousel() {

    const goToContent = () => window.scrollTo({top: content.current.offsetTop, behavior: 'smooth'})

    const [items, setItems] = useState(
        [
            {
                id: 0,
                title: 'Curriculum vitæ',
                subTitle: 'Mes compétences et mon parcours',
                imgSrc: cv,
                path: '/home/cv',
                selected: false,
                render: <CurriculumPage goToContent={goToContent} />,
            },
            {
                id: 1,
                title: 'Veille technologique',
                subTitle: 'La simulation informatique',
                imgSrc: monitoring,
                path: '/home/monitoring',
                selected: false,
                render: <Hero title="Veille technologique" />,
            },
            {
                id: 2,
                title: 'Stages',
                subTitle: 'Découvrez mon parcours pro',
                imgSrc: internship,
                path: '/home/internships',
                selected: false,
                render: <Hero title="Stages" />,
            },
            {
                id: 3,
                title: 'Projets personnels',
                subTitle: 'Voici les fruits de ma passion',
                imgSrc: projects,
                path: '/home/projects',
                selected: false,
                render: <ProjectsPage goToContent={goToContent} />,
            },
        ]
    )

    const content = useRef(null);

    const renderItems = (items) => {
        return items.map(item => {
            return (
                <Col key={item.id} className='my-center' xl={3} lg={6} md={6} sm={12}>
                    <Card items={items} item={item} setItems={setItems}/>
                </Col>
            )
        })
    }

    const renderRoutes = () => {
        return items.map(route => {
            return <Route key={route.id} path={route.path} render={() => route.render} />
        })
    }

    return (
        <Container fluid={true}>
            <Row>
                {renderItems(items)}
            </Row>
            <div ref={content} className='my-center'>
                {renderRoutes()}
            </div>
        </Container>
    )
}

export default Carousel