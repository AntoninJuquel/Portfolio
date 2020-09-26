import React, { useEffect, useRef } from 'react';

import { ScrollToRef } from "../../functions/Utilities";

import Hero from '../../components/Hero';

import Projects from '../../utils/Projects';
import Categories from '../../utils/Categories';
import Carousel from '../../components/Carousel';

function ProjectsPage({goToContent}) {

    const contentRef = useRef(null);

    useEffect(() =>  ScrollToRef(contentRef), [])
    
    const SortedProjects = [];
    
    function sortProjects() {
        const uniqueID = []
        Projects.forEach(project => {
            if (uniqueID.includes(project.categoryId)) {
                SortedProjects[uniqueID.indexOf(project.categoryId)].push(project)
            } else {
                uniqueID.push(project.categoryId)
                SortedProjects.push([project])
            }
        });
    }

    const renderCategories = () => {
        sortProjects()
        return SortedProjects.map((projectsList,index) => {
            return (
                <div key={index}>
                    <Hero subTitle={Categories[projectsList[0].categoryId].name} />
                    <Carousel itemsList={SortedProjects[Categories[projectsList[0].categoryId].id]} />
                </div>
            )
        })
    }

    return (
        <div ref={contentRef}>
            {renderCategories()}
        </div>
    )
}

export default ProjectsPage