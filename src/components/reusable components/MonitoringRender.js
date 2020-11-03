import { Box } from "@material-ui/core";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Hero from "./Hero";
import MyTimeline from "./MyTimeline";

function MonitoringRender({ presentation, definition, content,timeline }) {
    return (
        <Box style={{ backgroundColor: "#ddd" }}>
            <Box textAlign="center">
                <Hero subTitle="La simulation informatique 3D" sentence="Focus sur la technologie du Ray Tracing" />
                <Row>
                    <Col>
                        <p>Présentation :</p>
                        <p>{presentation}</p>
                    </Col>
                    <Col>
                        <p>Définition :</p>
                        <p>{definition}</p>
                    </Col>
                </Row>
                {
                    content &&
                    content.map(el => {
                        return(
                            <Box>
                                <p>{el.text}</p>
                                <img alt={el.text} src={el.imgSrc} />
                            </Box>
                        )
                    })
                }
                <MyTimeline align="alternate" items={timeline} />
            </Box>

        </Box>
    )
}

export default MonitoringRender;