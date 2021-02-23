import React from "react";
import { Typography } from "@material-ui/core";

function Hero({ title, subTitle, center, classes }) {
    return (
        <>
            <Typography variant="h1" className={classes.title} style={center && { textAlign: "center" }}>{title}</Typography>
            <Typography variant="h4" paragraph  style={center && { textAlign: "center" }}>{subTitle}</Typography>
        </>
    )
}

export default Hero