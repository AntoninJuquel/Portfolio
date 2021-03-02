import React from "react";
import { Container, Grid, TextField, Button, CircularProgress, Typography } from "@material-ui/core";
import emailjs from "emailjs-com";
import { Hero } from "./CustomComponents";
import { useModal } from "../providers/ModalContext";

function Contact(props) {
    const modal = useModal()
    const { classes } = props

    function SendEmail(e) {
        const { target } = e
        e.preventDefault()
        modal.current.setModal(<CircularProgress color="inherit" />)
        emailjs.sendForm("service_outlook", "template_contact", target, "user_l1Qb3tJvE4nAlYoJdTisr")
            .then((res) => {
                modal.current.setModal(
                    <>
                        <Typography variant="h6">Email Sent !</Typography>
                        <Button variant="contained" size="large" onClick={() => modal.current.setModal(null)}>OK</Button>
                    </>
                )
                console.log(res.text)
                target.reset()
            }, (err) => {
                console.log(err)
            })
    }

    function MyTextField(props) {
        return (
            <TextField
                color="primary"
                variant="filled"
                fullWidth
                className={classes.textField}
                {...props}
            />
        )
    }


    return (
        <Container ref={props.refProp} className={classes.container}>
            <Hero classes={classes} title="Contact Me" />
            <form onSubmit={SendEmail}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={6} >
                        <MyTextField required name="first_name" label="First Name" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <MyTextField name="last_name" label="Last Name" />
                    </Grid>
                    <Grid item xs={12}>
                        <MyTextField required name="email" label="Email" type="email" />
                    </Grid>
                    <Grid item xs={6}>
                        <MyTextField required name="subject" label="Subject" />
                    </Grid>
                    <Grid item xs={12}>
                        <MyTextField required multiline rows={10} name="message" label="Message" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="primary" type="submit" variant="contained" size="large"><strong>SEND</strong></Button>
                    </Grid>
                </Grid>
            </form>
        </Container >
    )
}

export default Contact