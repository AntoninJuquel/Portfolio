import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";

import Hero from "./Hero";

import projects from "../json/projects.json";

function Projects(props) {

    const { classes, isMobile, setModal } = props

    function ProjectsRenderer() {
        return (
            Object.keys(projects).map((category, i) =>
                <Container key={i}>
                    <Hero classes={classes} title={category} />
                    <Grid style={{ justifyContent: isMobile ? "center" : "normal" }} container>
                        <ProjectsCategory category={category} />
                    </Grid>
                </Container>
            )
        )
    }

    function ProjectsCategory({ category }) {
        return (
            projects[category].map((project, i) =>
                <Grid item lg={3} md={6} sm={12} key={i} style={{ textAlign: "center" }}>
                    <img src={project.img} width="250" alt={project.title} onClick={() => setModal(<ProjectModal project={project} />)} />
                    <Hero classes={classes} subTitle={project.title} center />
                </Grid>
            )
        )
    }

    function ProjectModal({ project }) {
        return (
            <>
                <Typography>{project.title}</Typography>
                <img src={project.img} width="250" alt={project.title} />
            </>
        )
    }

    return (
        <Container ref={props.refProp} className={classes.container}>
            <Hero classes={classes} title="My Projects" />
            <ProjectsRenderer />
        </Container>
    )
}

export default Projects