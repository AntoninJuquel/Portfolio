import React from "react";
import { Container, Grid, Button } from "@material-ui/core";
import { useLanguage } from "../providers/LanguageContext";

import Hero from "./Hero";

function About(props) {
    const { classes } = props
    const { GetLanguageFile } = useLanguage();
    return (
        <Container ref={props.refProp} className={classes.container}>
            <Hero classes={classes} title={GetLanguageFile().about.title} subTitle={GetLanguageFile().about.story} />
            <Grid container spacing={10} className={classes.buttonWrapper}>
                <Grid item>
                    <Button color="primary" variant="contained" size="large" onClick={() => window.scrollTo({ top: props.contactRef.current.offsetTop - 64 })}>
                        <strong>{GetLanguageFile().about.hire}</strong>
                    </Button>
                </Grid>
                <Grid item>
                    <Button color="primary" variant="contained" size="large"><strong>{GetLanguageFile().about.cv}</strong></Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About