import React from "react";
import InternshipRender from "../components/InternshipRender";

const InternShips =
    [
        {
            id: 0,
            title: 'Uballers',
            subTitle: 'Start-up',
            imgSrc: 'https://uballers.com/assets/img/brand/BallonRouge.png',
            link: 'https://uballers.com/home',
            render: <InternshipRender title="Uballers" introduction="Mon rôle a été de réaliser une application mobile à l'image de leur site internet" sentence="Uballers est une start up dont le but est de monter un réseau social de basketeurs."
                skills={
                    [
                        "A1.2.1 Élaboration et présentation d'un dossier de choix de solution",
                        "A1.3.3 Accompagnement de la mise en place d'un nouveau service",
                        "A1.3.4 Déploiement d'un service",
                        "A1.4.1 Participation à un projet",
                        "A2.2.1 Suivi et résolution d'incidents",
                        "A2.3.1 Identification, qualification et évaluation d'un problème",
                        "A4.1.1 Proposition d'une solution applicative",
                        "A4.1.2 Conception ou adaptation de l'interface utilisateur d'une solution",
                        "A4.1.8 Réalisation des tests nécessaires à la validation d'éléments",
                        "A4.1.9 Rédaction d'une documentation technique",
                        "A4.1.1 Rédaction d'une documentation d'utilisation",
                        "A4.2.1 Analyse et correction d'un dysfonctionnement, d'un problème",
                        "A4.2.3 Réalisation des tests nécessaires à la mise en production",
                        "A4.2.4 Mise à jour d'une documentation technique",
                        "A5.1.6 Évaluation d'un investissement informatique",
                        "A5.2.3 Repérage des compléments de formation ou d'auto-formation",
                        "A5.2.4 Étude d‘une technologie, d'un composant, d'un outi",
                    ]
                } />
        }
    ]
export default InternShips