import React, { useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
import pdf from "../../assets/documents/CV.pdf";
import { ScrollToRef } from '../../functions/Utilities';

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
        <div>
            {!pdfDocument && <span>Loading...</span>}
            <canvas ref={canvasRef} />
        </div>
    );
}

export default CurriculumPage;