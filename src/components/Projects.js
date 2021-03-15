import React, { useEffect } from "react";
import { Container, Grid, ButtonBase, Button } from "@material-ui/core";

import { Carousel, Hero } from "./CustomComponents";

import projects from "../json/projects.json";
import { useModal } from "../providers/ModalContext";
import { useLanguage } from "../providers/LanguageContext";

function Projects(props) {
    const modal = useModal()
    const { language, GetLanguageFile } = useLanguage()
    const { classes, isMobile } = props

    useEffect(() => {
        Object.keys(projects).map(
            category => projects[category].forEach(
                project => {
                    project.carousel.fr.forEach(imgSrc => {
                        const img = new Image();
                        img.src = (imgSrc[0] === "/" ? process.env.PUBLIC_URL + imgSrc : imgSrc)
                    })
                    project.carousel.en.forEach(imgSrc => {
                        const img = new Image();
                        img.src = (imgSrc[0] === "/" ? process.env.PUBLIC_URL + imgSrc : imgSrc)
                    })
                }
            )
        )
    }, [])

    function ProjectsRenderer() {
        return (
            Object.keys(projects).map((category, i) =>
                <Container key={i}>
                    <Hero classes={classes} title={GetLanguageFile().projects[category.toLowerCase()]} />
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
                    <ButtonBase>
                        <img src={project.img} width="250" alt={project.title} onClick={() => modal.current.setModal(<ProjectModal project={project} />)} />
                    </ButtonBase>
                    <Hero classes={classes} subTitle={project.title} center />
                </Grid>
            )
        )
    }

    function ProjectModal({ project }) {
        return (
            <>
                {project.src && <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    href={project.src}
                    onClick={() => modal.current.setModal(null)}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    CODE
                </Button>}
                {project.url && <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    href={project.url}
                    onClick={() => modal.current.setModal(null)}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    VOIR
                </Button>}
                {
                    project.carousel[language].length > 0 && <Carousel>
                        {
                            project.carousel[language].map((url, i) =>
                                <img key={i} src={url[0] === "/" ? process.env.PUBLIC_URL + url : url} alt={i} width={isMobile ? "360" : "1080"} />)
                        }
                    </Carousel>
                }
                {
                    isMobile && <Button color="primary" variant="contained" size="large" onClick={() => modal.current.setModal(null)}>
                        Close
                </Button>
                }
            </>
        )
    }


    return (
        <Container ref={props.refProp} className={classes.container}>
            <Hero classes={classes} title={GetLanguageFile().projects.title} />
            <ProjectsRenderer />
        </Container>
    )
}

export default Projects