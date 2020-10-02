import React from "react";
import MonitoringRender from "../components/MonitoringRender";

export const Monitorings =
    [
        {
            id: 0,
            title: "La simulation informatique 3D",
            subTitle: "Focus sur la technologie du Ray Tracing",
            imgSrc: "https://dailytech.page/wp-content/uploads/2019/01/download-1-14.png",

            render:
                <MonitoringRender
                    presentation="J'ai choisi ce sujet de veille technologique car je trouve intéressant de savoir comment fonctionne les différentes techniques de rendu 3D. Parmi ces techniques, le ray tracing permet de rendre les scènes plus réalistes au niveau de l'éclairage. Cette technique utilisée pour la première fois en 1968 [voir infos], est depuis utilisée majoritairement dans le domaine du cinéma."
                    definition="Le ray tracing est fondamentalement une nouvelle manière de travailler la lumière dans nos jeux vidéo (mais pas que). Ce « traçage de rayon » est en fait le nom donné à une technologie de rendu de la lumière dans une image de synthèse"
                    timeline={
                        [
                            {
                                title: "Ray tracing",
                                subTitle: "C STYLé",
                                description: "HOP HOP ",
                                date: "2020"
                            },
                            {
                                title: "",
                                subTitle: "",
                                description: "",
                                date: ""
                            },
                        ]
                    }
                />
        }
    ]