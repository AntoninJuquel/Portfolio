import React from "react";
import { Container, Grid } from "@material-ui/core";

import Hero from "./Hero";

import projects from "../json/projects.json";

function Projects(props) {

    const { classes, isMobile } = props

    const ProjectsCategory = ({ category }) => projects[category].map((project, i) =>
        <Grid item lg={3} md={6} sm={12} key={i} style={{ textAlign: "center" }}>
            <img src={project.img} width="250" alt={project.title} />
            <Hero classes={classes} subTitle={project.title} center />
        </Grid>
    )

    const MyProjects = () => Object.keys(projects).map((project, i) =>
        <Container key={i}>
            <Hero classes={classes} title={project} />
            <Grid style={{ justifyContent: isMobile ? "center" : "normal" }} container>
                <ProjectsCategory category={project} />
            </Grid>
        </Container>
    )

    return (
        <Container ref={props.refProp} className={classes.container}>
            <Hero classes={classes} title="My Projects" />
            <MyProjects />
        </Container>
    )
}

export default Projects