import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare, FaLinkedin , FaItchIo, FaGithubSquare} from "react-icons/fa";

import styles from "./Introduction.module.css";

function Introduction() {
    const socials = [
        ,
        {
            icon: (props) => <FaLinkedin {...props} />,
            url: "https://www.linkedin.com/in/antonin-juquel/"
        },
        {
            icon: (props) => <FaItchIo {...props} />,
            url: "https://somindras.itch.io"
        },
        {
            icon: (props) => <FaGithubSquare {...props} />,
            url: "https://github.com/AntoninJuquel"
        },
        {
            icon: (props) => <FaFacebookSquare {...props} />,
            url: "https://www.facebook.com/AntoninJuquel/"
        },
        {
            icon: (props) => <FaTwitterSquare {...props} />,
            url: "https://twitter.com/Somindras"
        },
        {
            icon: (props) => <FaYoutubeSquare {...props} />,
            url: "https://www.youtube.com/channel/UCsgdfHWgax10z-av8KwzLlw"
        }
    ]

    const SocialButtons = () => socials.map((social, i) =>
        <a className={styles.url} key={i} target="_blank" href={social.url} rel="noopener noreferrer">
            <social.icon className={styles.icon} />
        </a>
    )

    return (
        <Container>
            <Row>
                <Col sm={12} lg={6}>
                    <h1 className="title">I'm Antonin</h1>
                    <p className="subTitle">Indie Developper</p>
                    <Container fluid="md">
                        <Row>
                            {SocialButtons()}
                        </Row>
                    </Container >
                </Col>
                <Col sm={12} lg={6}>
                    <img src="https://ih0.redbubble.net/image.725661211.7020/flat,1000x1000,075,f.jpg" width="100%"/>
                </Col>
            </Row>
        </Container >
    )
}

export default Introduction