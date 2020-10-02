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
                    definition="Le ray tracing est une technique de rendu graphique qui simule le parcours des rayons lumineux et leur interaction avec divers matériaux."
                    timeline={
                        [
                            {
                                title: "Bond en avant du Ray Tracing",
                                titleColor: "primary",
                                date: "2018",
                                descriptionColor: "textPrimary",
                                description: "Une grande avancée est arrivée pour le ray tracing : la possibilité de le calculer en temps réel dans un environnement 3D. Nvidia présente un GPU capable de faire du ray tracing en temps réel, Turing est donc une architecture conçue avant tout pour la visualisation",
                            },
                            {
                                title: "Monsters University",
                                titleColor: "primary",
                                date: "2013",
                                descriptionColor: "textPrimary",
                                description: "Premier dessin animé à utiliser le Ray Tracing pour tous ses éffets lumineux et d'ombres",
                            },
                            {
                                title: "Compleat Angler",
                                titleColor: "primary",
                                date: "1979",
                                descriptionColor: "textPrimary",
                                description: "Premier film à utiliser le Ray Tracing, produit par Turner Whitted ingénieur des Bell Labs",
                            },
                            {
                                title: "Arthur Appel",
                                titleColor: "primary",
                                date: "1968",
                                descriptionColor: "textPrimary",
                                description: "Ingénieur chez IBM, il en écrivait déjà le premier algorithme",
                            },
                        ]
                    }
                />
        }
    ]