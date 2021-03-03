import React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from "@material-ui/lab";
import { ButtonBase, Container, Grid, Paper, Typography } from "@material-ui/core";
import { FaSchool, FaBuilding } from "react-icons/fa";

import { Hero } from "./CustomComponents";

import experiences from "../json/experiences.json";

import { useModal } from "../providers/ModalContext";
import { useLanguage } from "../providers/LanguageContext";

function Experience(props) {
    const modal = useModal()
    const { classes } = props
    const { GetLanguageFile } = useLanguage()

    function MyTimeLine(props) {
        return (
            <Container>
                <Typography style={{ textAlign: "center" }} variant="h4">
                    {props.title}
                </Typography>
                <Timeline {...props}>
                    {props.experiences.map((experience, i) =>
                        <TimelineItem key={i}>
                            <TimelineOppositeContent>
                                <Typography color="inherit">
                                    {experience.year}
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="inherit" variant="outlined">
                                    {props.icon}
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <ButtonBase style={{ width: "100%", height: "100%" }} onClick={() => modal.current.setModal(<ExperienceModal experience={experience} />)}>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="h6" component="h1">
                                            {experience.name}
                                        </Typography>
                                        <Typography>{experience.location}</Typography>
                                    </Paper>
                                </ButtonBase>
                            </TimelineContent>

                        </TimelineItem>
                    )}
                </Timeline>
            </Container>
        )
    }

    function ExperienceModal({ experience }) {
        return (
            <>
                {experience.name}
                {experience.location}
                {experience.year}
            </>
        )
    }

    return (
        <Container ref={props.refProp} className={classes.container}>
            <Hero classes={classes} title={GetLanguageFile().experience.title} />
            <Grid container>
                <Grid item sm={12} lg={6}>
                    <MyTimeLine title={GetLanguageFile().experience.school} align="right" experiences={experiences.school} icon={<FaSchool />} />
                </Grid>
                <Grid item sm={12} lg={6}>
                    <MyTimeLine title={GetLanguageFile().experience.pro} align="left" experiences={experiences.work} icon={<FaBuilding />} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Experience