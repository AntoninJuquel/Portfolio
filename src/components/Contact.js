import React, { useState } from "react";
import { Container, Grid, TextField, Button, Modal, CircularProgress } from "@material-ui/core";
import emailjs from "emailjs-com";
import Hero from "./Hero";

function Contact(props) {
    const [open, setOpen] = useState(null)
    const { classes } = props

    function SendEmail(e) {
        const { target } = e
        e.preventDefault()
        setOpen(<CircularProgress color="inherit" />)
        emailjs.sendForm("service_outlook", "template_contact", target, "user_l1Qb3tJvE4nAlYoJdTisr")
            .then((res) => {
                setOpen(
                    <>
                        <p>Email Sent !</p>
                        <Button variant="contained" size="large" onClick={() => setOpen(null)}>OK</Button>
                    </>
                )
                console.log(res.text)
                target.reset()
            }, (err) => {
                console.log(err)
            })
    }

    const MyTextField = (props) =>
        <TextField
            variant="filled"
            fullWidth
            className={classes.textField}
            {...props}
        />

    const MyModal = () =>
        <Modal open={open !== null} onClose={() => setOpen(null)}>
            <Container className={classes.modal}>
                {open}
            </Container>
        </Modal>

    return (
        <Container ref={props.refProp} className={classes.container}>
            <MyModal />
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