import React, { useState } from "react";
import { Container, ButtonBase, Grid, Typography, Button, Dialog } from "@material-ui/core";

import { Hero } from "./CustomComponents";

import { useLanguage } from "../providers/LanguageContext";

import blogs from "../json/blogs.json";

function Blog(props) {
    const { language } = useLanguage();
    const { classes} = props
    const [blog, setBlog] = useState(null);

    function Blogs() {
        return (
            blogs.map((blog, i) =>
                <Grid item lg={3} md={6} sm={12} key={i} style={{ textAlign: "center" }}>
                    <ButtonBase>
                        <img src={blog.img} width="250" alt={blog.title[language]} onClick={() => setBlog(blog)}/>
                    </ButtonBase>
                    <Hero classes={classes} subTitle={blog.title[language]} center />
                </Grid>
            )
        )
    }

    return (
        <Container ref={props.refProp} className={classes.container}>
            <Hero classes={classes} title="Blog" />
            <Blogs />
            {
                blog != null ?
                    <Dialog fullScreen open={true} style={{padding: 25}}>
                        <Hero classes={classes} title={blog.title[language]} center />
                        <Button style={{position: "fixed", width: "25%", backgroundColor: "black", fontWeight: "bold"}} onClick={() => setBlog(null)} color="primary">CLOSE</Button>
                        <Container>
                        {
                            blog.sections.map(section => {
                                return(
                                    <>
                                        <div style={{margin: 50}}></div>
                                        <Hero classes={classes} title={section.title ?? ""} subTitle={section.text ?? ""}/>
                                        {section.image ? <img style={{alignSelf: "center"}} src={process.env.PUBLIC_URL + section.image} alt={section.text ?? ""}/> : null}
                                        {section.source ? <a href={section.source} target="_blank" rel="noopener noreferrer">source</a> : null}
                                        <div style={{margin: 50}}></div>
                                    </>
                                )
                            })
                        }
                        </Container>
                    </Dialog> 
                : null
            }
        </Container>
    )
}

export default Blog