import { useEffect, useState } from "react";
import axios from "axios";
import { pdfjs } from "react-pdf";
import PdfComp from "./PdfComp";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function App() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    // getPdf();
  }, []);
  const getPdf = async () => {
    
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);

  
  };
  const showPdf = (pdf) => {
    
    setPdfFile(pdf)
  };
  return (
    <div className="App">
      <form className="formStyle" onSubmit={submitImage}>
        <h4> Pdf in React</h4>
        <br />
        

        <div className="inner-div">
                    <h6>Title: view pdf</h6>
                    <button
                      className="btn btn-primary"
                      onClick={() => showPdf('http://filestore.zeal_site.com/Profile.pdf')}
                    >
                      Show Pdf
                    </button>
                  </div>
      </form>
    
      <PdfComp pdfFile={pdfFile}/>
    </div>
  );
}

export default App;
