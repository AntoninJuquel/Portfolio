import React from "react";
import { Container, Grid, Button } from "@material-ui/core";

import Hero from "./Hero";

function About(props) {
    const { classes } = props
    return (
        <Container ref={props.refProp} className={classes.container}>
            <Hero classes={classes} title="About me" subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
            <Grid container spacing={10} className={classes.buttonWrapper}>
                <Grid item>
                    <Button color="primary" variant="contained" size="large" onClick={() => window.scrollTo({ top: props.contactRef.current.offsetTop - 64 })}>
                        <strong>HIRE ME</strong>
                    </Button>
                </Grid>
                <Grid item>
                    <Button color="primary" variant="contained" size="large"><strong>DOWNLOAD CV</strong></Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About