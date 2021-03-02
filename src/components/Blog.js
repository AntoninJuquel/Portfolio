import { Container } from "@material-ui/core";
import React from "react";

import { Hero } from "./CustomComponents";

function Blog(props) {
    const { classes } = props
    return (
        <Container ref={props.refProp} className={classes.container}>
            <Hero classes={classes} title="Blog" />
        </Container>
    )
}

export default Blog