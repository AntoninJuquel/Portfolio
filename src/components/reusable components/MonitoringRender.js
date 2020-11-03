import { Box } from "@material-ui/core";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Hero from "./Hero";
import MyTimeline from "./MyTimeline";

function MonitoringRender({ title, subTitle, sentence, presentation, definition, content, timeline }) {
    return (
        <Box style={{ backgroundColor: "#ddd"}}>
            <Box textAlign="center">
                <Hero subTitle={subTitle} sentence={sentence} />
                <Row>
                    <Col md={6}>
                        <p>Présentation :</p>
                        <p>{presentation}</p>
                    </Col>
                    <Col md={6}>
                        <p>Définition :</p>
                        <p>{definition}</p>
                    </Col>
                </Row>
                {
                    content &&
                    content.map((el, i) => {
                        return (
                            <Box>
                                <Row>
                                    <Col>
                                        {i % 2 === 0 ? <p>{el.text}</p> : <img alt={el.text} src={el.imgSrc} />}
                                    </Col>
                                    <Col>
                                        {i % 2 !== 0 ? <p>{el.text}</p> : <img alt={el.text} src={el.imgSrc} />}
                                    </Col>
                                </Row>
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