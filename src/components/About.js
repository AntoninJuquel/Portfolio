import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import styles from "./About.module.css";

function About(props) {
    return (
        <Container ref={props.refProp}>
            <h1 className="title">About me</h1>
            <p className="subTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Row>
                <Col lg={{ span: 2, offset: 7 }} className={styles.buttonWrapper}>
                    <Button size="lg" variant="dark"><strong>HIRE ME</strong></Button>
                </Col>
                <Col lg={3} className={styles.buttonWrapper}>
                    <Button size="lg" variant="dark"><strong>DOWNLOAD CV</strong></Button>
                </Col>
            </Row>
        </Container>
    )
}

export default About