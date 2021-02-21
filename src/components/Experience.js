import React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from "@material-ui/lab";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { FaSchool, FaBuilding } from "react-icons/fa";

import styles from "./Experience.module.css";

function Experience(props) {

    const school = [
        {
            name: "BTS SIO",
            location: "Lycée Louis Armand",
            year: "2019 - 2021",
            icon: <FaSchool />
            
        },
        {
            name: "CPGE MPSI",
            location: "Lycée Michelet",
            year: "2018 - 2019",
            icon: <FaSchool />
        },
        {
            name: "BAC S",
            location: "Lycée Politzer",
            year: "2018",
            icon: <FaSchool />
        }
    ]

    const work = [
        {
            name: "Front end dev",
            location: "WOODY",
            year: "2021 (2 months)",
            icon: <FaBuilding />
        },
        {
            name: "Mobile dev",
            location: "Uballers",
            year: "2020 (2 months)",
            icon: <FaBuilding />
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
                                {experience.icon && experience.icon}
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={styles.paper} >
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
        <Container ref={props.refProp}>
            <h1 className="title">Experiences</h1>
            <Grid container>
                <Grid item sm={12} lg={6}>
                    <MyTimeLine title="School" align="right" experiences={school} />
                </Grid>
                <Grid item sm={12} lg={6}>
                    <MyTimeLine title="Pro" align="left" experiences={work} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Experience