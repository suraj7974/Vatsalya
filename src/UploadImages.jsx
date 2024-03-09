import React, { useState } from "react";
import "./UploadImages.css";
import { useNavigate } from "react-router-dom";

function UploadImages() {
  const [imagePreview, setImagePreview] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImagePreview(reader.result);
      setIsUploaded(true);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="upload_images">
        <input
          type="file"
          id="image-upload"
          className="upload-input"
          accept="image/*"
          onChange={handleImageChange}
        />
        <label htmlFor="image-upload" className="upload-label">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M16 10v6H8v-6H5l7-7 7 7h-3z" />
          </svg>
          <span>Choose Image</span>
        </label>
        <div className="image-preview">
          {isUploaded ? (
            <>
              <img
                src={imagePreview}
                alt="Preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
              <p className="info">Image uploaded successfully!</p>
              <div className="align">
                <button
                  onClick={(e) => {
                    navigate("/Results");
                  }}
                  className="get-result-button"
                >
                  Get Results
                </button>
              </div>
            </>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </>
  );
}

export default UploadImages;
