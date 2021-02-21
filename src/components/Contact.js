import React from "react";
import { Container, Grid, TextField, makeStyles, Button } from "@material-ui/core";
import Hero from "./Hero";

const useStyles = makeStyles({
    textField: {
        background: 'linear-gradient(90deg, #cccccc 10%,#FFFFFF 40%, #cccccc 90%)',
        border: 0,
        borderRadius: 3,
        color: 'white',
    },
});

function Contact(props) {
    const classes = useStyles();
    return (
        <Container ref={props.refProp} className="container">
            <Hero title="Contact Me" />
            <Grid container spacing={3}>
                <Grid item xs={12} lg={6} >
                    <TextField variant="filled" label="First Name" fullWidth className={classes.textField} />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <TextField variant="filled" label="Last Name" fullWidth className={classes.textField} />
                </Grid>
                <Grid item xs={12}>
                    <TextField variant="filled" label="Email" fullWidth className={classes.textField} />
                </Grid>
                <Grid item xs={6}>
                    <TextField variant="filled" label="Object" fullWidth className={classes.textField} />
                </Grid>
                <Grid item xs={12}>
                    <TextField variant="filled" label="Message" multiline fullWidth rows={10} className={classes.textField} />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" size="large"><strong>SEND</strong></Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Contact