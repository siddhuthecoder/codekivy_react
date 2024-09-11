import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Use CDN for the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

const BookReader = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pagesRead, setPagesRead] = useState(0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePageChange = (offset) => {
    const newPageNumber = pageNumber + offset;
    if (newPageNumber >= 1 && newPageNumber <= numPages) {
      setPageNumber(newPageNumber);

      if (newPageNumber > pagesRead) {
        setPagesRead(newPageNumber);
        alert(`You have read ${newPageNumber} page(s).`);
      }
    }
  };

  return (
    <div>
      <Document
        file={'../../../../../OneDrive/Documents/siddhu_resume.pdf'}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>

      <div>
        <p>
          Page {pageNumber} of {numPages}
        </p>

        <button
          disabled={pageNumber <= 1}
          onClick={() => handlePageChange(-1)}
        >
          Previous
        </button>
        <button
          disabled={pageNumber >= numPages}
          onClick={() => handlePageChange(1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookReader;
