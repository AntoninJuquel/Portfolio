import React, { useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';

import pdf from "../../assets/documents/CV.pdf";
import { ScrollToRef } from '../../functions/Utilities';
import MyTimeline from '../../components/MyTimeline';
import { Col, Row } from 'react-bootstrap';
import { Box, Button } from '@material-ui/core';
import { CloudDownloadRounded } from '@material-ui/icons';

function CurriculumPage({ goToContent }) {

    const canvasRef = useRef(null);

    const { pdfDocument } = usePdf({
        file: pdf,
        page: 1,
        canvasRef,
        onPageRenderSuccess: () => ScrollToRef(canvasRef),
        scale: 1.15
    });

    return (
        <Box>
            <Row>
                <Col>
                    <MyTimeline align="left" />
                </Col>
                <Col>
                    <MyTimeline align="right" />
                </Col>
            </Row>

            <Button
                variant="contained"
                color="default"
                startIcon={<CloudDownloadRounded />}
            >
                Mon CV
            </Button>
        </Box>
        // <div>
        //     {!pdfDocument && <span>Loading...</span>}
        //     <canvas ref={canvasRef} />
        // </div>
    );
}

export default CurriculumPage;