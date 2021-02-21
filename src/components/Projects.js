import React from "react";
import { Container, Grid } from "@material-ui/core";

import Hero from "./Hero";
import ProjectsList from "./ProjectsList";

import styles from "./Projects.module.css";

function Projects(props) {

    const ProjectsCategory = ({ category }) => ProjectsList[category].map((project, i) =>
        <Grid item lg={3} md={6} sm={12} key={i} className={styles.grid} >
            <img src={project.img} width="250" alt={project.title} />
            <Hero subTitle={project.title} center />
        </Grid>
    )

    const MyProjects = () => Object.keys(ProjectsList).map((project, i) =>
        <Container key={i} className={styles.container}>
            <Hero title={project} />
            <Grid container>
                <ProjectsCategory category={project} />
            </Grid>
        </Container>
    )

    return (
        <Container ref={props.refProp} className="container">
            <Hero title="My Projects" />
            <MyProjects />
        </Container>
    )
}

export default Projects