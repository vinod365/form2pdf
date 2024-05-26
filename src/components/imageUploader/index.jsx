import { useRef, useState } from "react";

import "./style.css";

export const ImageUploader = ({ fileName, imageFile, setImageFile }) => {
  const imageRef = useRef(null);

  function handleOnImageChange(e) {
    const { files } = e.target;
    const reader = new FileReader();
    reader.onload = function (event) {
      setImageFile(event.target.result);
    };
    reader.readAsDataURL(files[0]);
  }

  return (
    <>
      <div
        onClick={() => {
          imageRef?.current.click();
        }}
        className="image-uploader-container"
      >
        <div className="image-uploader">
          {imageFile && (
            <img
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "contain" }}
              src={imageFile}
            ></img>
          )}
          {!imageFile && <p>Click to upload image</p>}

          <p style={{ marginTop: "10px" }}>{fileName}</p>
        </div>
      </div>

      <input
        style={{
          display: "none",
        }}
        type="file"
        onChange={handleOnImageChange}
        ref={imageRef}
      ></input>
    </>
  );
};
