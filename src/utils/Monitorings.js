import React from "react";
import MonitoringRender from "../components/reusable components/MonitoringRender";

export const Monitorings =
    [
        {
            id: 0,
            title: "Les moteurs de jeu vidéo",
            subTitle: "",
            imgSrc: "https://splashlogics.com/wp-content/uploads/2017/02/thumbnail-quel-moteur-de-jeu-choisir.png",

            render:
                <MonitoringRender
                    subTitle="Les moteurs de jeu vidéo"
                    sentence=""
                    presentation=""
                    definition=""
                    content={
                        [
                            {
                                text : "test"
                            },
                            {
                                text : "test1"
                            }
                        ]
                    }
                    timeline={
                        [
                        ]
                    }
                />
        }
    ]