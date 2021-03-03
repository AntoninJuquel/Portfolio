import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Typography, Modal, Container, Box, Button, Grid } from "@material-ui/core";

export function Hero({ title, subTitle, center, classes }) {
    return (
        <Box>
            <Typography variant="h1" className={classes.title} style={center && { textAlign: "center" }}>{title}</Typography>
            <Typography variant="h4" paragraph style={center && { textAlign: "center" }}>{subTitle}</Typography>
        </Box>
    )
}

export const MyModal = forwardRef((props, ref) => {
    const [modal, setModal] = useState(null)
    const { classes } = props

    useImperativeHandle(ref, () => {
        return {
            setModal: setModal,
        }
    })

    return (
        <Modal disableEnforceFocus disableAutoFocus open={modal !== null} onClose={() => setModal(null)}>
            <Container className={classes.modal}>
                {modal}
                <Button color="primary" variant="contained" size="large" onClick={() => setModal(null)}>
                    Close
                </Button>
            </Container>
        </Modal>
    )
})

export function Carousel({ children }) {
    const [index, setIndex] = useState(0)
    const length = children && children.length

    return (
        <Grid container style={{ alignItems: "center", textAlign: "center", justifyContent: "center", alignContent: "center" }}>
            <Grid item sm={12} md={3}>
                <Button color="primary" variant="contained" size="large" onClick={() => setIndex(index === 0 ? length - 1 : index - 1)}>
                    Previous
                </Button>
            </Grid>
            <Grid item sm={12} md={6} >
                {children[index]}
            </Grid>
            <Grid item sm={12} md={3}>
                <Button color="primary" variant="contained" size="large" onClick={() => setIndex((index + 1) % length)}>
                    Next
                </Button>
            </Grid>
        </Grid>
    )
}