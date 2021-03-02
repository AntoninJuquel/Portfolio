import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Typography, Modal, Container } from "@material-ui/core";

export function Hero({ title, subTitle, center, classes }) {
    return (
        <>
            <Typography variant="h1" className={classes.title} style={center && { textAlign: "center" }}>{title}</Typography>
            <Typography variant="h4" paragraph style={center && { textAlign: "center" }}>{subTitle}</Typography>
        </>
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
        <Modal open={modal !== null} onClose={() => setModal(null)}>
            <Container className={classes.modal}>
                {modal}
            </Container>
        </Modal>
    )
})