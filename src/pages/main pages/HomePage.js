import React from 'react';

import Hero from "../../components/Hero";
import Carousel from '../../components/Carousel';

import cv from '../../assets/images/cv.png';
import monitoring from '../../assets/images/monitoring.png';
import internship from '../../assets/images/internship.png';
import projects from '../../assets/images/projects.png';

import CurriculumPage from "../second pages/CurriculumPage";
import ProjectsPage from "../second pages/ProjectsPage";
import InternshipsPage from "../second pages/InternshipsPage";
import MonitoringPage from "../second pages/MonitoringPage";

function HomePage() {
    return (
        <div>
            <Hero title="Mon portfolio" subTitle='Développeur web et applications' sentence='Prenez connaissance des mes projets ci-dessous'/>
            <Carousel itemsList={
                [
                    {
                        id: 0,
                        title: 'Curriculum vitæ',
                        subTitle: 'Mes compétences et mon parcours',
                        imgSrc: cv,
                        path: '/Portfolio/home/cv',
                        render: <CurriculumPage />,
                    },
                    {
                        id: 1,
                        title: 'Parcours professionnel',
                        subTitle: 'Mes stages et autres expériences pro',
                        imgSrc: internship,
                        path: '/Portfolio/home/internships',
                        render: <InternshipsPage />,
                    },
                    {
                        id: 2,
                        title: 'Mes projets',
                        subTitle: 'Découvrez la liste de mes projets',
                        imgSrc: projects,
                        path: '/Portfolio/home/projects',
                        render: <ProjectsPage />,
                    },
                    {
                        id: 3,
                        title: 'Veilles technologiques',
                        subTitle: 'La simulation 3D informatique',
                        imgSrc: monitoring,
                        path: '/Portfolio/home/monitoring',
                        render: <MonitoringPage />,
                    },
                ]
            } />
        </div>
    );
}

export default HomePage;