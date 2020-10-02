import React from "react";
import { Col, Row } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import Hero from "./Hero";

function MonitoringRender({presentation, definition,timeline}) {
    return(
        <div style={{ backgroundColor: "#ddd" }}>
                    <div className="my-center">
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
                    </div>
                    <VerticalTimeline>
                        {
                           timeline.map(el => {
                                    return (
                                        <VerticalTimelineElement
                                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                            date={el.date}
                                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                        >
                                            <h3>{el.title}</h3>
                                            <h4>{el.subTitle}</h4>
                                            <p>{el.description}</p>
                                        </VerticalTimelineElement>
                                    )
                                })}

                    </VerticalTimeline>
                </div>
    )
}

export default MonitoringRender;