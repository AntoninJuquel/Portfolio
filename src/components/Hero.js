import React from "react";
import { Container } from "@material-ui/core";

function Hero({ title, subTitle }) {
    return (
        <>
            <h1 className="title">{title}</h1>
            <p className="subTitle">{subTitle}</p>
        </>
    )
}

export default Hero