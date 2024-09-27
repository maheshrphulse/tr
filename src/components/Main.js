import { useEffect } from "react";
import { transFormatter, copyContent, clearInput } from "../utilities/Utils";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ClearIcon from "@mui/icons-material/Clear";


export default function Main() {
  
  useEffect(() => {
    const userInputDataFromLS = localStorage.getItem("userInputDataFromLS");
    document.getElementById("input-textarea").value = userInputDataFromLS || "";
  }, []);

  return (
    <main>
      <h1>XML/JSON Formatter & Converter</h1>
      <p>
        Paste your XML or JSON in the first text area, and see the formatted
        result below:
      </p>
      <section className="hero-section">
        <div className="textarea-container">
          <label htmlFor="input-textarea">Input XML/JSON:</label>
          <textarea
            id="input-textarea"
            placeholder="Paste XML or JSON here"
            onChange={(event) =>
              transFormatter(event.target.value, "format")
            }></textarea>
          <div className="icons-container">
            <button onClick={() => {
                  clearInput();
                }}>
              <ClearIcon
                className="clear-icon"
              />
            </button>
          </div>
        </div>
        <div className="buttons-container">
          <button className="btn"
            onClick={() => {
              transFormatter(document.getElementById("input-textarea").value, "format");
            }}>
            Format
          </button>
          <button className="btn"
            onClick={() => {
              transFormatter(document.getElementById("input-textarea").value, "convert");
            }}>
            Convert
          </button>
        </div>
        <div className="textarea-container">
          <label htmlFor="output-textarea">Formatted Output:</label>
          <textarea id="output-textarea" 
           readOnly>
          </textarea>
          <div className="icons-container">
            <button onClick={() => {
                  copyContent();
                }}>
              <ContentCopyIcon
                className="copy-icon"
              />
            </button>
            <span className="active tool-tip">
              copied
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};
