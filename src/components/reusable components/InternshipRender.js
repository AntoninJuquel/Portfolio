import React from "react";
import Hero from "./Hero";

function InternshipRender({ title, sentence, introduction, skills }) {
    return (
        <div className="my-center">
            <Hero title={title} sentence={sentence} />

            <h3>{introduction}</h3>
            {skills.map(skill => {
                return (
                    <p>{skill}</p>
                )
            })}
        </div>
    )
}

export default InternshipRender;