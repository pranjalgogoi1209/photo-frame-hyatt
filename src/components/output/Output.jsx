import React, { useState, useEffect, useRef } from "react";
import styles from "./output.module.css";
import exportAsImage from "../../utils/exportAsImage";

import frame from "./../../assets/frame.png";

export default function Output({ capturedImg, setShowComponent }) {
  const printRef = useRef();
  const [imgToPrint, setImgToPrint] = useState();

  const handleDownload = () => {
    const today = new Date();

    const formatDateTime = (date) =>
      [
        String(date.getDate()).padStart(2, "0"),
        String(date.getMonth() + 1).padStart(2, "0"), // Months are 0-based, so we add 1
        date.getFullYear(),
        String(date.getHours()).padStart(2, "0"),
        String(date.getMinutes()).padStart(2, "0"),
        String(date.getSeconds()).padStart(2, "0"),
      ].join("-");
    const fullDateTime = formatDateTime(today);
    exportAsImage(downloadRef.current, `image-${fullDateTime}`);
  };

  return (
    <div className={`flex-col-center ${styles.Output}`}>
      <h1 className="h1Txt">Print It Out</h1>

      <div
        ref={printRef}
        className={`flex-row-center ${styles.outputImgContainer}`}
      >
        <div className={`flex-row-center ${styles.frame}`}>
          <img src={frame} alt="frame" />
        </div>

        <div className={`flex-row-center ${styles.capturedImage}`}>
          <img src={capturedImg} alt="captured-img" />
        </div>
      </div>

      <div className={`flex-row-center ${styles.footer}`}>
        <button
          onClick={() =>
            exportAsImage(printRef.current, "image-" + new Date().getTime())
          }
          className="btn"
        >
          Download
        </button>
        <button onClick={() => setShowComponent("camera")} className="btn">
          Reset
        </button>
      </div>
    </div>
  );
}
