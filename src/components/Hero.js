import React from "react";

function Hero({ title, subTitle, center }) {
    return (
        <>
            <h1 className="title" style={center && { textAlign: "center" }}>{title}</h1>
            <p className="subTitle" style={center && { textAlign: "center" }}>{subTitle}</p>
        </>
    )
}

export default Hero