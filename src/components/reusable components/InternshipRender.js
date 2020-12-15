import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import Hero from "./Hero";
import styles from "./internshipRender.module.css";

function InternshipRender({ title, sentence, introduction, skills }) {

    const [image, setImage] = useState("");
    const [rewording, setRewording] = useState("");

    const handleImage = (imgUrl, rewording) => {
        setImage(imgUrl)
        setRewording(rewording)
    }

    return (
        <Box>
            <Hero title={title} sentence={sentence} />

            <h3>{introduction}</h3>
            <Row>
                <Col>
                    {skills.map(skill => {
                        return (
                            <p className={styles.clicker} onClick={() => handleImage(skill.imgUrl, skill.rewording)}>{skill.title}</p>
                        )
                    })}
                </Col>
                {(image !== "" && rewording !== "") && <Col className="my-center">
                    <img src={image} alt="" />
                    <p>{rewording}</p>
                </Col>}
            </Row>
        </Box>
    )
}

export default InternshipRender;