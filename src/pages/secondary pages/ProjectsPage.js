import React from 'react';

import Hero from '../../components/reusable components/Hero';
import Carousel from '../../components/reusable components/Carousel';

import { Projects, Categories } from '../../utils/Projects';

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