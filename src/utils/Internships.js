import React from "react";
import InternshipRender from "../components/reusable components/InternshipRender";

const InternShips =
    [
        {
            id: 0,
            title: 'Uballers',
            subTitle: 'Start-up',
            imgSrc: 'https://uballers.com/assets/img/brand/BallonRouge.png',
            link: 'https://uballers.com/home',
            render: <InternshipRender
                title="Uballers"
                introduction="Mon rôle a été de réaliser une application mobile à l'image de leur site internet"
                sentence="Uballers est une start up dont le but est de monter un réseau social de basketeurs."
                skills={
                    [
                        {
                            title: "A1.2.1 Élaboration et présentation d'un dossier de choix de solution",
                            rewording: "Une réunion pour comparer les différents framework de Material Design: Paper, ... (Faire une synthèse)",
                            imgUrl: ""
                        },
                        {
                            title: "A1.3.3 Accompagnement de la mise en place d'un nouveau service",
                            rewording: "",
                            imgUrl: ""
                        },
                        {
                            title: "A1.3.4 Déploiement d'un service",
                            rewording: "",
                            imgUrl: ""
                        },
                        {
                            title: "A1.4.1 Participation à un projet",
                            rewording: "Mettre les tâches quotidiennes sur l'outil de gestion de projet en ligne Trello. Mise au point quotidien sur ce que l'on a fait de la journée",
                            imgUrl: ""
                        },
                        {
                            title: "A2.2.1 Suivi et résolution d'incidents",
                            rewording: "",
                            imgUrl: ""
                        },
                        {
                            title: "A2.3.1 Identification, qualification et évaluation d'un problème",
                            rewording: "",
                            imgUrl: ""
                        },
                        {
                            title: "A4.1.1 Proposition d'une solution applicative",
                            rewording: "",
                            imgUrl: ""
                        },
                        {
                            title: "A4.1.2 Conception ou adaptation de l'interface utilisateur d'une solution",
                            rewording: "",
                            imgUrl: ""
                        },
                        {
                            title: "A4.1.7 Développement, utilisation ou adaptation de composants logiciels",
                            rewording: "Coder des composants informatiques dans le framework React Native",
                            imgUrl: ""
                        },
                        {
                            title: "A4.1.8 Réalisation des tests nécessaires à la validation d'éléments",
                            rewording: "",
                            imgUrl: ""
                        },
                        {
                            title: "A4.1.9 Rédaction d'une documentation technique",
                            rewording: "Ecrire dans la documentation technique l'installation du projet React Native, les méthodes de développement(règle de nommage des fichiers ...), le rôle de chaque fichier",
                            imgUrl: ""
                        },
                        {
                            title: "A4.1.1 Rédaction d'une documentation d'utilisation",
                            rewording: "",
                            imgUrl: ""
                        },
                        {
                            title: "A4.2.1 Analyse et correction d'un dysfonctionnement, d'un problème",
                            rewording: "Corriger les bugs de JavaScript",
                            imgUrl: ""
                        },
                        {
                            title: "A4.2.3 Réalisation des tests nécessaires à la mise en production",
                            rewording: "",
                            imgUrl: ""
                        },
                        {
                            title: "A4.2.4 Mise à jour d'une documentation technique",
                            rewording: "Lire la documentation du site web. Lorsqu'on développe une fonctionnalité, on consulte la documentation technique. Ainsi, on peut repèrer les éléments à compléter dans la documentation technique",
                            imgUrl: ""
                        },
                        {
                            title: "A5.1.6 Évaluation d'un investissement informatique",
                            rewording: "",
                            imgUrl: ""
                        },
                        {
                            title: "A5.2.3 Repérage des compléments de formation ou d'auto-formation",
                            rewording: "Comme je fait partie des premières personnes qui ont travaillé sur le projet React Native, Je dois identifier les chapitres importants afin de maîtriser le framework React Native",
                            imgUrl: ""
                        },
                        {
                            title: "A5.2.4 Étude d‘une technologie, d'un composant, d'un outil",
                            rewording: "Analyser la documentation en anglais de React et de React Native. Auto-formation sur le cours de React Native de l'entreprise.",
                            imgUrl: ""
                        },
                    ]
                } />
        }
    ]
export default InternShips