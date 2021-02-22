import React, { useState } from "react";
import { Container, Grid, TextField, makeStyles, Button, Modal, CircularProgress } from "@material-ui/core";
import emailjs from "emailjs-com";
import Hero from "./Hero";

import styles from "./Contact.module.css";

const useStyles = makeStyles({
    textField: {
        background: 'linear-gradient(90deg, #cccccc 10%,#FFFFFF 40%, #cccccc 90%)',
        border: 0,
        borderRadius: 3,
        color: 'white',
    },
});

function Contact(props) {
    const [open, setOpen] = useState(null)
    const classes = useStyles();

    function SendEmail(e) {
        const { target } = e
        e.preventDefault()
        setOpen(<CircularProgress color="inherit"/>)
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
            <Container className={styles.modal}>
                {open}
            </Container>
        </Modal>

    return (
        <Container ref={props.refProp} className="container">
            <MyModal />
            <Hero title="Contact Me" />
            <form onSubmit={SendEmail}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={6} >
                        <MyTextField name="first_name" label="First Name" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <MyTextField required name="last_name" label="Last Name" />
                    </Grid>
                    <Grid item xs={12}>
                        <MyTextField required name="email" label="Email" />
                    </Grid>
                    <Grid item xs={6}>
                        <MyTextField required name="subject" label="Subject" />
                    </Grid>
                    <Grid item xs={12}>
                        <MyTextField required multiline rows={10} name="message" label="Message" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" size="large"><strong>SEND</strong></Button>
                    </Grid>
                </Grid>
            </form>
        </Container >
    )
}

export default Contact