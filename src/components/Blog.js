import { Container } from "@material-ui/core";
import React from "react";

import Hero from "./Hero";

function Blog(props) {
    return (
        <Container ref={props.refProp}>
            <Hero title="Blog" />
        </Container>
    )
}

export default Blog