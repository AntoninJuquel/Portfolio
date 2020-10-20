import { Box } from "@material-ui/core";
import React from "react";
import Hero from "./Hero";

function InternshipRender({ title, sentence, introduction, skills }) {
    return (
        <Box>
            <Hero title={title} sentence={sentence} />

            <h3>{introduction}</h3>
            {skills.map(skill => {
                return (
                    <p>{skill.title}</p>
                )
            })}
        </Box>
    )
}

export default InternshipRender;