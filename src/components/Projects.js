import React, { useState } from "react";
import { Container, Grid, ButtonBase, Button, Dialog, Divider} from "@material-ui/core";

import { Hero } from "./CustomComponents";

import projects from "../json/projects.json";
import { useLanguage } from "../providers/LanguageContext";

function Projects(props) {
    const { GetLanguageFile } = useLanguage()
    const { classes, isMobile } = props
    const [project, setProject] = useState(null);

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
                        <img src={project.img} width="250" alt={project.title} onClick={() => setProject(project)} />
                    </ButtonBase>
                    <Hero classes={classes} subTitle={project.title} center />
                </Grid>
            )
        )
    }

    return (
        <Container ref={props.refProp} className={classes.container}>
            <Hero classes={classes} title={GetLanguageFile().projects.title} />
            <ProjectsRenderer />
            { project != null ? 
            <Dialog fullScreen open={true} style={{padding: 25}}>
                    <Hero classes={classes} title={project.title} center />
                    <Button style={{position: "fixed", width: "25%", backgroundColor: "black", fontWeight: "bold"}} onClick={() => setProject(null)} color="primary">CLOSE</Button>
                    <Container>
                    {
                        project.skills ? project.skills.map((skill) => {
                            return(
                            <>
                                <Hero classes={classes} title={skill.title} />
                                <ul>
                                {skill.subSkills.map((subSkill,i) => {
                                    return(
                                        <li key={i}><Hero classes={classes} subTitle={subSkill} /></li>
                                    )
                                })}
                                </ul>
                                {skill.reformulations.map((reformulation,i) => {
                                    return(
                                        <Hero classes={classes} subTitle={reformulation} />
                                    )
                                })}
                                {skill.images.map(image => {
                                    return(
                                        <>
                                            <img style={{alignSelf: "center"}} src={process.env.PUBLIC_URL + image.src} alt={image.legend}/>
                                            <Hero center classes={classes} subTitle={image.legend} />
                                        </>
                                    )
                                })}
                                <Hero classes={classes} subTitle={skill.conclusion} />
                                <Divider style={{height: 5,backgroundColor: "white", marginBottom: 50}}/>
                            </>
                            )
                        }) : null
                    }
                    </Container>
            </Dialog>
            : null}
        </Container>
    )
}

export default Projects