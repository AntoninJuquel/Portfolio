import React from "react";

import { Container, Grid } from "@material-ui/core";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaItchIo, FaGithub, FaInstagram } from "react-icons/fa";

import { Hero } from "./CustomComponents";
import { useLanguage } from "../providers/LanguageContext";

function Introduction(props) {
    const { classes } = props
    const { GetLanguageFile } = useLanguage()
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
            icon: (props) => <FaGithub {...props} />,
            url: "https://github.com/AntoninJuquel"
        },
        {
            icon: (props) => <FaFacebook {...props} />,
            url: "https://www.facebook.com/AntoninJuquel/"
        },
        {
            icon: (props) => <FaTwitter {...props} />,
            url: "https://twitter.com/Somindras"
        },
        {
            icon: (props) => <FaInstagram {...props} />,
            url: "https://www.instagram.com/antoninjuquel/"
        },
        {
            icon: (props) => <FaYoutube {...props} />,
            url: "https://www.youtube.com/channel/UCsgdfHWgax10z-av8KwzLlw"
        }
    ]

    function SocialButtons() {
        return (
            socials.map((social, i) =>
                <a style={{ margin: "0px 5px 15px" }} key={i} target="_blank" href={social.url} rel="noopener noreferrer">
                    <social.icon style={{ fontSize: 28, color: "white" }} />
                </a>
            )
        )
    }

    return (
        <Container className={classes.container}>
            <Grid container>
                <Grid item sm={12} lg={6}>
                    <Hero classes={classes} title={GetLanguageFile().introduction.title} subTitle={GetLanguageFile().introduction.subTitle} />
                    <Grid container>
                        <SocialButtons />
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