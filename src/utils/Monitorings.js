import React from "react";
import MonitoringRender from "../components/reusable components/MonitoringRender";

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
                    content={
                        [
                            {
                                text: "First text",
                                imgSrc: "https://westeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Flyceelouisarmand-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!BXXjz6cfe0mMRMwqwUulTtMOhTn8q3ZLjjneZgGjyOa_HlcSQgZJRLf9h6IV5T1M%2Fitems%2F01DWUE2KA2YWFBIEWB75ALN7OHKHMEXZA3%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbHljZWVsb3Vpc2FybWFuZC1teS5zaGFyZXBvaW50LmNvbUAzMmY5MmJlNi00NjJlLTRmZDAtOTZmNC01NDZmNTFkMGQyODkiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjA0MzA3NjAwIiwiZXhwIjoiMTYwNDMyOTIwMCIsImVuZHBvaW50dXJsIjoiK2pJaGJES0FzbGQvYm5jNENhK0JmR1NpMS82NlU4TitKSllzTDlHOU9raz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyNiIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlkyWmxNemMxTURVdE1XWmhOeTAwT1RkaUxUaGpORFF0WTJNeVlXTXhOR0poTlRSbCIsInNpZ25pbl9zdGF0ZSI6IltcImttc2lcIl0iLCJhYyI6Imx8bXxoIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfGFudG9uaW4uanVxdWVsQGV0dWRpYW50cy5sb3Vpcy1hcm1hbmQucGFyaXMiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMDY4ZGFmYjJkQGxpdmUuY29tIiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjMifQ.YlZaSnJCdXdSbVRDeTZjd3RuQzkwcjdMRlNudDRjYkQrMEpJQmRHNzU2cz0&encodeFailures=1&srcWidth=&srcHeight=&width=900&height=322&action=Access"
                            },
                            {
                                text:"Second text",
                                imgSrc: "https://westeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Flyceelouisarmand-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!BXXjz6cfe0mMRMwqwUulTtMOhTn8q3ZLjjneZgGjyOa_HlcSQgZJRLf9h6IV5T1M%2Fitems%2F01DWUE2KGXZBTVDAQDLNFIBJNXV4MQT3PM%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbHljZWVsb3Vpc2FybWFuZC1teS5zaGFyZXBvaW50LmNvbUAzMmY5MmJlNi00NjJlLTRmZDAtOTZmNC01NDZmNTFkMGQyODkiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjA0MzA3NjAwIiwiZXhwIjoiMTYwNDMyOTIwMCIsImVuZHBvaW50dXJsIjoiK2pJaGJES0FzbGQvYm5jNENhK0JmR1NpMS82NlU4TitKSllzTDlHOU9raz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyNiIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlkyWmxNemMxTURVdE1XWmhOeTAwT1RkaUxUaGpORFF0WTJNeVlXTXhOR0poTlRSbCIsInNpZ25pbl9zdGF0ZSI6IltcImttc2lcIl0iLCJhYyI6Imx8bXxoIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfGFudG9uaW4uanVxdWVsQGV0dWRpYW50cy5sb3Vpcy1hcm1hbmQucGFyaXMiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMDY4ZGFmYjJkQGxpdmUuY29tIiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjMifQ.YlZaSnJCdXdSbVRDeTZjd3RuQzkwcjdMRlNudDRjYkQrMEpJQmRHNzU2cz0&encodeFailures=1&srcWidth=&srcHeight=&width=1024&height=528&action=Access"
                            },
                            {
                                text: "Third text",
                                imgSrc: "https://westeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Flyceelouisarmand-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!BXXjz6cfe0mMRMwqwUulTtMOhTn8q3ZLjjneZgGjyOa_HlcSQgZJRLf9h6IV5T1M%2Fitems%2F01DWUE2KA6GC4PHKCW5JEZTVER5BJPVMTB%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbHljZWVsb3Vpc2FybWFuZC1teS5zaGFyZXBvaW50LmNvbUAzMmY5MmJlNi00NjJlLTRmZDAtOTZmNC01NDZmNTFkMGQyODkiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjA0MzA3NjAwIiwiZXhwIjoiMTYwNDMyOTIwMCIsImVuZHBvaW50dXJsIjoiK2pJaGJES0FzbGQvYm5jNENhK0JmR1NpMS82NlU4TitKSllzTDlHOU9raz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyNiIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlkyWmxNemMxTURVdE1XWmhOeTAwT1RkaUxUaGpORFF0WTJNeVlXTXhOR0poTlRSbCIsInNpZ25pbl9zdGF0ZSI6IltcImttc2lcIl0iLCJhYyI6Imx8bXxoIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfGFudG9uaW4uanVxdWVsQGV0dWRpYW50cy5sb3Vpcy1hcm1hbmQucGFyaXMiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMDY4ZGFmYjJkQGxpdmUuY29tIiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjMifQ.YlZaSnJCdXdSbVRDeTZjd3RuQzkwcjdMRlNudDRjYkQrMEpJQmRHNzU2cz0&encodeFailures=1&srcWidth=&srcHeight=&width=1024&height=817&action=Access"
                            },
                            {
                                text : "Fourth text",
                                imgSrc: "https://westeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Flyceelouisarmand-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!BXXjz6cfe0mMRMwqwUulTtMOhTn8q3ZLjjneZgGjyOa_HlcSQgZJRLf9h6IV5T1M%2Fitems%2F01DWUE2KFIZE7LR65CIRDK22HRCAVMEAR2%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbHljZWVsb3Vpc2FybWFuZC1teS5zaGFyZXBvaW50LmNvbUAzMmY5MmJlNi00NjJlLTRmZDAtOTZmNC01NDZmNTFkMGQyODkiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjA0MzA3NjAwIiwiZXhwIjoiMTYwNDMyOTIwMCIsImVuZHBvaW50dXJsIjoiK2pJaGJES0FzbGQvYm5jNENhK0JmR1NpMS82NlU4TitKSllzTDlHOU9raz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyNiIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlkyWmxNemMxTURVdE1XWmhOeTAwT1RkaUxUaGpORFF0WTJNeVlXTXhOR0poTlRSbCIsInNpZ25pbl9zdGF0ZSI6IltcImttc2lcIl0iLCJhYyI6Imx8bXxoIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfGFudG9uaW4uanVxdWVsQGV0dWRpYW50cy5sb3Vpcy1hcm1hbmQucGFyaXMiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMDY4ZGFmYjJkQGxpdmUuY29tIiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjMifQ.YlZaSnJCdXdSbVRDeTZjd3RuQzkwcjdMRlNudDRjYkQrMEpJQmRHNzU2cz0&encodeFailures=1&srcWidth=&srcHeight=&width=1024&height=604&action=Access"
                            },
                            {
                                text : "Fifth text",
                                imgSrc: "https://westeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Flyceelouisarmand-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!BXXjz6cfe0mMRMwqwUulTtMOhTn8q3ZLjjneZgGjyOa_HlcSQgZJRLf9h6IV5T1M%2Fitems%2F01DWUE2KFZCIPRXUTVEBE2MAX5X6RRQDZ5%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbHljZWVsb3Vpc2FybWFuZC1teS5zaGFyZXBvaW50LmNvbUAzMmY5MmJlNi00NjJlLTRmZDAtOTZmNC01NDZmNTFkMGQyODkiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjA0MzA3NjAwIiwiZXhwIjoiMTYwNDMyOTIwMCIsImVuZHBvaW50dXJsIjoiK2pJaGJES0FzbGQvYm5jNENhK0JmR1NpMS82NlU4TitKSllzTDlHOU9raz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyNiIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlkyWmxNemMxTURVdE1XWmhOeTAwT1RkaUxUaGpORFF0WTJNeVlXTXhOR0poTlRSbCIsInNpZ25pbl9zdGF0ZSI6IltcImttc2lcIl0iLCJhYyI6Imx8bXxoIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfGFudG9uaW4uanVxdWVsQGV0dWRpYW50cy5sb3Vpcy1hcm1hbmQucGFyaXMiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMDY4ZGFmYjJkQGxpdmUuY29tIiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjMifQ.YlZaSnJCdXdSbVRDeTZjd3RuQzkwcjdMRlNudDRjYkQrMEpJQmRHNzU2cz0&encodeFailures=1&srcWidth=&srcHeight=&width=882&height=396&action=Access"
                            }
                        ]
                    }
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