import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import Hero from '../components/Hero';
import Card from '../components/Card';
import Projects from '../utils/Projects';
import Categories from '../utils/Categories';

function ProjectsPage({ goToContent }) {

    useEffect(() => goToContent(), [])

    const [categories] = useState(Categories)
    const [projects, setProjects] = useState(Projects)

    const renderProjects = (categoryId) => {
        return projects.map(project => {
            if (project.categoryId === categoryId)
                return (
                    <Col key={project.id} className='my-center' xl={3} lg={6} md={6} sm={12}>
                        <Card items={projects} item={project} setItems={setProjects} />
                    </Col>
                )
            return null
        })
    }

    const renderCategories = () => {
        return categories.map(category => {
            return (
                <div key={category.id}>
                    <Hero subTitle={category.name} />
                    <Row>
                        {renderProjects(category.id)}
                    </Row>
                </div>
            )
        })
    }

    return (
        <div>
            {renderCategories()}
        </div>
    )
}

export default ProjectsPage