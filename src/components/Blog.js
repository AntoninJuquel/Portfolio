import React from "react";
import { Container, ButtonBase, Grid, Typography } from "@material-ui/core";

import { Carousel, Hero } from "./CustomComponents";

import { useModal } from "../providers/ModalContext";
import { useLanguage } from "../providers/LanguageContext";

import blogs from "../json/blogs.json";

function Blog(props) {
    const modal = useModal()
    const { language} = useLanguage();
    const { classes } = props

    function Blogs() {
        return (
            blogs.map((blog, i) =>
                <Grid item lg={3} md={6} sm={12} key={i} style={{ textAlign: "center" }}>
                    <ButtonBase>
                        <img src={blog.img} width="250" alt={blog.title[language]} onClick={() => modal.current.setModal(<BlogModal blog={blog} />)} />
                    </ButtonBase>
                    <Hero classes={classes} subTitle={blog.title[language]} center />
                </Grid>
            )
        )
    }

    function BlogModal({ blog }) {
        return (
            <>
                <Typography>{blog.title[language]}</Typography>
                <Carousel>
                    {
                        blog.carousel[language].map((url, i) =>
                            <img key={i} src={process.env.PUBLIC_URL + url} alt={i} />)
                    }
                </Carousel>
            </>
        )
    }


    return (
        <Container ref={props.refProp} className={classes.container}>
            <Hero classes={classes} title="Blog" />
            <Blogs />
        </Container>
    )
}

export default Blog