import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Modal, Container } from "@material-ui/core";

const MyModal = forwardRef((props, ref) => {
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

export default MyModal
