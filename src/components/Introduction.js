import React from "react";

import { Container, Grid } from "@material-ui/core";
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare, FaLinkedin, FaItchIo, FaGithubSquare } from "react-icons/fa";

import Hero from "./Hero";

function Introduction(props) {
    const { classes } = props
    const socials = [
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
        <a style={{ margin: "0px 5px 15px" }} key={i} target="_blank" href={social.url} rel="noopener noreferrer">
            <social.icon style={{ fontSize: 28, color: "white" }} />
        </a>
    )

    return (
        <Container className={classes.container}>
            <Grid container>
                <Grid item sm={12} lg={6}>
                    <Hero classes={classes} title="I'm Antonin" subTitle="Indie Developper" />
                    <Grid container>
                        {SocialButtons()}
                    </Grid>
                </Grid>
                <Grid item sm={12} lg={6}>
                    <img alt="MyImage" src="https://ih0.redbubble.net/image.725661211.7020/flat,1000x1000,075,f.jpg" width="100%" />
                </Grid>
            </Grid>
        </Container >
    )
}

export default Introduction