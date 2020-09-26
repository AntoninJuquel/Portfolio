import React, { useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
import pdf from "../../assets/documents/CV.pdf";

function CurriculumPage({ goToContent }) {

    const canvasRef = useRef(null);

    const { pdfDocument } = usePdf({
        file: pdf,
        page: 1,
        canvasRef,
        onPageRenderSuccess: () => window.scrollTo({top: canvasRef.current.offsetTop, behavior: 'smooth'}),
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