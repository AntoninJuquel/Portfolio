import React /*, { useRef }*/ from 'react';
// import { usePdf } from '@mikecousins/react-pdf';

// import pdf from "../../assets/documents/CV.pdf";
// import { ScrollToRef } from '../../functions/Utilities';
import MyTimeline from '../../components/MyTimeline';
import { Col, Row } from 'react-bootstrap';
import { Box} from '@material-ui/core';
import Hero from '../../components/Hero';

function CurriculumPage() {

    // const canvasRef = useRef(null);

    // const { pdfDocument } = usePdf({
    //     file: pdf,
    //     page: 1,
    //     canvasRef,
    //     onPageRenderSuccess: () => ScrollToRef(canvasRef),
    //     scale: 1.15
    // });

    return (
        <Box className="my-center">
            <Row>
                <Col>
                    <Hero subTitle="Scolaire" />
                    <MyTimeline align="left" items={
                        [
                            {
                                title: "BTS SIO SLAM",
                                description: "Lycée Louis Armand, (75015)",
                                date: "2019 - 2021"
                            },
                            {
                                title: "Classe Préparatoire aux Grandes Écoles MPSI",
                                description: "Lycée Michelet, Vanves (92)",
                                date: "2018 - 2019"
                            },
                            {
                                title: "BAC Scientifique",
                                description: "Lycée Romain Rolland, Ivry-sur-Seine (94)",
                                date: "2018"
                            }
                        ]
                    } />
                </Col>
                <Col>
                    <Hero subTitle="Professionnel" />
                    <MyTimeline align="right" items={
                        [
                            {
                                title: "Uballers",
                                description: "Réseau social sportif",
                                date: "Mai 2020 - Juin 2020"
                            },
                            {
                                title: "MAC GUFF",
                                description: "Vfx / Animation / Serie",
                                date: "2016"
                            },
                        ]
                    } />
                </Col>
            </Row>


            {/* <Box>
                {!pdfDocument && <span>Loading...</span>}
                <canvas ref={canvasRef} />
            </Box> */}
        </Box>
    );
}

export default CurriculumPage;