import React from "react";
import { Container, Grid, TextField, makeStyles, Button } from "@material-ui/core";
import emailjs from "emailjs-com";
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

    function SendEmail(e) {
        e.preventDefault()
        emailjs.sendForm("service_outlook", "template_contact", e.target, "user_l1Qb3tJvE4nAlYoJdTisr")
            .then((res) => {
                console.log(res.text)
            }, (err) => {
                console.log(err)
            })
    }

    return (
        <Container ref={props.refProp} className="container">
            <Hero title="Contact Me" />
            <form onSubmit={SendEmail}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={6} >
                        <TextField variant="filled" label="First Name" fullWidth className={classes.textField} name="first_name" required />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField variant="filled" label="Last Name" fullWidth className={classes.textField} name="last_name" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="filled" label="Email" fullWidth className={classes.textField} name="email" required />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField variant="filled" label="Subject" fullWidth className={classes.textField} name="subject" required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="filled" label="Message" multiline fullWidth rows={10} className={classes.textField} name="message" required />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" size="large"><strong>SEND</strong></Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default Contact