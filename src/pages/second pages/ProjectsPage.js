import React from 'react';

import Hero from '../../components/Hero';

import { Projects, Categories } from '../../utils/Projects';
import Carousel from '../../components/Carousel';

function ProjectsPage() {
    
    function sortedProjects() {
        const SortedProjects = [];
        const uniqueID = []
        Projects.forEach(project => {
            if (uniqueID.includes(project.categoryId)) {
                SortedProjects[uniqueID.indexOf(project.categoryId)].push(project)
            } else {
                uniqueID.push(project.categoryId)
                SortedProjects.push([project])
            }
        });
        return SortedProjects;
    }

    const renderCategories = () => {
        return sortedProjects().map((projectsList, index) => {
            return (
                <div key={index}>
                    <Hero title={Categories[projectsList[0].categoryId].name} />
                    <Carousel itemsList={sortedProjects()[Categories[projectsList[0].categoryId].id]} />
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