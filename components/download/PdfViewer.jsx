// import { Iframe } from 'react-iframe'

export default function PdfViewer() {
    return (
        <div className="container w-full h-full mx-auto">
      <iframe
        src="/pdf/Test_Doc.pdf"
        style={{ width: '100%', height: '65vh' }}
        frameBorder="0"
      >
        This browser does not support PDFs. Please download the PDF to view it: 
        {/* <a href="/api/pdf">Download PDF</a> */}
      </iframe></div>
    );
  }