import React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from "@material-ui/lab";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { FaSchool, FaBuilding } from "react-icons/fa";

import Hero from "./Hero";

function Experience(props) {

    const { classes } = props

    const school = [
        {
            name: "BTS SIO",
            location: "Lycée Louis Armand",
            year: "2019 - 2021",
        },
        {
            name: "CPGE MPSI",
            location: "Lycée Michelet",
            year: "2018 - 2019",
        },
        {
            name: "BAC S",
            location: "Lycée Politzer",
            year: "2018",
        }
    ]

    const work = [
        {
            name: "Front end dev",
            location: "WOODY",
            year: "2021 (2 months)",
        },
        {
            name: "Mobile dev",
            location: "Uballers",
            year: "2020 (2 months)",
        }
    ]

    const MyTimeLine = (props) =>
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
                            <Paper elevation={3} className={classes.paper} >
                                <Typography variant="h6" component="h1">
                                    {experience.name}
                                </Typography>
                                <Typography>{experience.location}</Typography>
                            </Paper>
                        </TimelineContent>

                    </TimelineItem>
                )}
            </Timeline>
        </Container>

    return (
        <Container ref={props.refProp} className={classes.container}>
            <Hero classes={classes} title="My Experiences" />
            <Grid container>
                <Grid item sm={12} lg={6}>
                    <MyTimeLine title="School" align="right" experiences={school} icon={<FaSchool />} />
                </Grid>
                <Grid item sm={12} lg={6}>
                    <MyTimeLine title="Pro" align="left" experiences={work} icon={<FaBuilding />} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Experience