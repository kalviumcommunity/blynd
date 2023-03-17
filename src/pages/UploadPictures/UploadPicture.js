import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadPicture.css";
import SuccessModal from "../../components/SuccessModal/SuccessModal";

const UploadPicture = () => {
  const navigate = useNavigate();
  const [pictures, setPictures] = useState([]);
  const [pictures2, setPictures2] = useState([]);
  const [pictures3, setPictures3] = useState([]);
  const [pictures4, setPictures4] = useState([]);
  const [pictures5, setPictures5] = useState([]);
  const [pictures6, setPictures6] = useState([]);
  const fileInputRef = useRef();
  const fileInputRef2 = useRef();
  const fileInputRef3 = useRef();
  const fileInputRef4 = useRef();
  const fileInputRef5 = useRef();
  const fileInputRef6 = useRef();

  const handleSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPictures([...pictures, reader.result]);
    };
    reader.readAsDataURL(file);
  };

  const handleSelect2 = (event) => {
    const file2 = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPictures2([...pictures2, reader.result]);
    };
    reader.readAsDataURL(file2);
  };
  const handleSelect3 = (event) => {
    const file3 = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPictures3([...pictures3, reader.result]);
    };
    reader.readAsDataURL(file3);
  };
  const handleSelect4 = (event) => {
    const file4 = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPictures4([...pictures4, reader.result]);
    };
    reader.readAsDataURL(file4);
  };
  const handleSelect5 = (event) => {
    const file5 = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPictures5([...pictures5, reader.result]);
    };
    reader.readAsDataURL(file5);
  };
  const handleSelect6 = (event) => {
    const file6 = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPictures6([...pictures6, reader.result]);
    };
    reader.readAsDataURL(file6);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting form:", { pictures });
  };

  const isFormValid = pictures.length > 0 ? true : false;
  const isFormValid2 = pictures2.length > 0 ? true : false;
  const isFormValid3 = pictures3.length > 0 ? true : false;
  const isFormValid4 = pictures4.length > 0 ? true : false;
  const isFormValid5 = pictures5.length > 0 ? true : false;
  const isFormValid6 = pictures6.length > 0 ? true : false;

  let countPictures = 0;

  if (pictures.length > 0) {
    countPictures++;
  }

  if (pictures2.length > 0) {
    countPictures++;
  }

  if (pictures3.length > 0) {
    countPictures++;
  }

  if (pictures4.length > 0) {
    countPictures++;
  }

  if (pictures5.length > 0) {
    countPictures++;
  }
  if (pictures6.length > 0) {
    countPictures++;
  }

  const isButtonValid = countPictures >= 3;

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="container-namePage">
        {showModal && <SuccessModal />}

        <div className="row1" onClick={() => navigate("/interest ")}>
          <img src="/assets/Back.png" alt="" />
        </div>

        <h2>Upload your photos</h2>

        <div className="image-container">
          <div className="col1">
            <div className="big-box">
              <div className="picture-preview-enabled">
                {pictures.map((picture, index) => (
                  <img key={index} src={picture} alt={`Picture ${index}`} />
                ))}
              </div>
              <div
                className={
                  isFormValid ? "smile-addbtn-disabled" : "smile-addbtn-enabled"
                }
              >
                <img src="/assets/smile.png" alt="" />
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleSelect}
                />
                <button
                  className="add-btn"
                  onClick={(event) => {
                    event.preventDefault();
                    fileInputRef.current.click();
                  }}
                >
                  + Add
                </button>
              </div>
            </div>
            <div className="small-box-cont">
              <div className="small-box">
                <div className="picture-preview-small">
                  {pictures2.map((picture, index) => (
                    <img key={index} src={picture} alt={`Picture ${index}`} />
                  ))}
                </div>

                <div
                  className={
                    isFormValid2
                      ? "smile-addbtn-disabled"
                      : "smile-addbtn-enabled"
                  }
                >
                  <img src="/assets/smile.png" alt="" />
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef2}
                    style={{ display: "none" }}
                    onChange={handleSelect2}
                  />
                  <button
                    className="add-btn"
                    onClick={(event) => {
                      event.preventDefault();
                      fileInputRef2.current.click();
                    }}
                  >
                    + Add
                  </button>
                </div>
              </div>
              <div className="small-box">
                <div className="picture-preview-small">
                  {pictures3.map((picture, index) => (
                    <img key={index} src={picture} alt={`Picture ${index}`} />
                  ))}
                </div>

                <div
                  className={
                    isFormValid3
                      ? "smile-addbtn-disabled"
                      : "smile-addbtn-enabled"
                  }
                >
                  <img src="/assets/smile.png" alt="" />
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef3}
                    style={{ display: "none" }}
                    onChange={handleSelect3}
                  />
                  <button
                    className="add-btn"
                    onClick={(event) => {
                      event.preventDefault();
                      fileInputRef3.current.click();
                    }}
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col2">
            <div className="small-box">
              <div className="picture-preview-small">
                {pictures4.map((picture, index) => (
                  <img key={index} src={picture} alt={`Picture ${index}`} />
                ))}
              </div>

              <div
                className={
                  isFormValid4
                    ? "smile-addbtn-disabled"
                    : "smile-addbtn-enabled"
                }
              >
                <img src="/assets/smile.png" alt="" />
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef4}
                  style={{ display: "none" }}
                  onChange={handleSelect4}
                />
                <button
                  className="add-btn"
                  onClick={(event) => {
                    event.preventDefault();
                    fileInputRef4.current.click();
                  }}
                >
                  + Add
                </button>
              </div>
            </div>
            <div className="small-box">
              <div className="picture-preview-small">
                {pictures5.map((picture, index) => (
                  <img key={index} src={picture} alt={`Picture ${index}`} />
                ))}
              </div>

              <div
                className={
                  isFormValid5
                    ? "smile-addbtn-disabled"
                    : "smile-addbtn-enabled"
                }
              >
                <img src="/assets/smile.png" alt="" />
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef5}
                  style={{ display: "none" }}
                  onChange={handleSelect5}
                />
                <button
                  className="add-btn"
                  onClick={(event) => {
                    event.preventDefault();
                    fileInputRef5.current.click();
                  }}
                >
                  + Add
                </button>
              </div>
            </div>
            <div className="small-box">
              <div className="picture-preview-small">
                {pictures6.map((picture, index) => (
                  <img key={index} src={picture} alt={`Picture ${index}`} />
                ))}
              </div>

              <div
                className={
                  isFormValid6
                    ? "smile-addbtn-disabled"
                    : "smile-addbtn-enabled"
                }
              >
                <img src="/assets/smile.png" alt="" />
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef6}
                  style={{ display: "none" }}
                  onChange={handleSelect6}
                />
                <button
                  className="add-btn"
                  onClick={(event) => {
                    event.preventDefault();
                    fileInputRef6.current.click();
                  }}
                >
                  + Add
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="next-btn-cont">
          <button
            type="submit"
            disabled={!isButtonValid}
            onClick={() => {
              setShowModal(true);
            }}
          >
            <div
              className={`next-btn ${isButtonValid ? "enabled" : "disabled"}`}
            >
              <p>Next</p>
              <img src="/assets/right-arrow.png" alt="" />
            </div>
          </button>
        </div>

        <div className="progress-tracker">
          <p className="progress-number">
            <span className="process-number">4</span>
            <span className="total-number">/4</span>
          </p>
          <div className="progress-bar">
            <div className="progress-upload"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadPicture;
