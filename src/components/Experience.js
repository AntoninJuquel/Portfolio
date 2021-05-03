import React, { useState } from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from "@material-ui/lab";
import { Button, ButtonBase, Container, Dialog, Grid, Paper, Typography } from "@material-ui/core";
import { FaSchool, FaBuilding } from "react-icons/fa";

import { Hero } from "./CustomComponents";

import experiences from "../json/experiences.json";

import { useLanguage } from "../providers/LanguageContext";

function Experience(props) {
    const { classes } = props
    const { GetLanguageFile } = useLanguage()
    const [experience, setExperience] = useState(null)

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
                                <ButtonBase
                                    style={{ width: "100%", height: "100%" }}
                                    onClick={() => setExperience(experience)}
                                >
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
            {
                experience ?
                    <Dialog fullScreen open={true} style={{ padding: 25 }}>
                        <Button style={{ position: "fixed", width: "5%", backgroundColor: "black", fontWeight: "bold", top: 30, left: 30 }} onClick={() => setExperience(null)} color="primary">CLOSE</Button>
                        <Container>
                            {
                                experience.content.map(content => {
                                    return (
                                        <>
                                            <Hero classes={classes} title={content.title ?? ""} subTitle={content.text ?? ""} />
                                            {content.image ? <img style={{ alignSelf: "center" }} src={process.env.PUBLIC_URL + content.image} alt={content.image} /> : null}
                                        </>
                                    )
                                })
                            }
                        </Container>
                    </Dialog>
                    : null
            }
        </Container>
    )
}

export default Experience