import React from "react";
import { Container, Grid, useMediaQuery, useTheme } from "@material-ui/core";

import Hero from "./Hero";
import ProjectsList from "./ProjectsList";

function Projects(props) {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const ProjectsCategory = ({ category }) => ProjectsList[category].map((project, i) =>
        <Grid item lg={3} md={6} sm={12} key={i} style={{textAlign : "center"}}>
            <img src={project.img} width="250" alt={project.title} />
            <Hero subTitle={project.title} center />
        </Grid>
    )

    const MyProjects = () => Object.keys(ProjectsList).map((project, i) =>
        <Container key={i}>
            <Hero title={project} />
            <Grid style={{ justifyContent: isMobile ? "center" : "normal" }} container>
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