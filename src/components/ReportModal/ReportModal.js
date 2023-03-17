import React from "react";
import "./ReportModal.css";
import { ImCross } from "react-icons/im";
import {
  BsPersonFillSlash,
  BsPersonFillExclamation,
  BsEmojiExpressionlessFill,
} from "react-icons/bs";
import { IoIosWarning } from "react-icons/io";
import { HiFlag } from "react-icons/hi";
import { FaBullhorn } from "react-icons/fa";
import { MdNotInterested } from "react-icons/md";

const ReportModal = (props) => {
  return (
    <>
      <div className="modal-wrapper">
        <div className="report-modal-cont">
          <div className="upper-modal">
            <div className="cross-row">
              <span
                onClick={() => {
                  props.setShowReportModal(false);
                }}
              >
                <ImCross fill="white" size="5px" />
              </span>
            </div>
            <h2>Block and report this person</h2>
            <p>
              Don’t worry, your feedback in anonymous and they won’t know that
              you’ve blocked or reported them.
            </p>
          </div>
          

          <div className="lower-modal">
            <div className="report-btn">
              <BsPersonFillSlash fill="#E7ACAC" />
              Fake Profile
            </div>
            <div className="report-btn">
              <IoIosWarning fill="#E7ACAC" />
              Inapropriate Content
            </div>
            <div className="report-btn">
              <HiFlag fill="#E7ACAC" />
              Scam or commercial
            </div>
            <div className="report-btn">
              <FaBullhorn fill="#E7ACAC" />
              Identity-based hate
            </div>
            <div className="report-btn">
              <MdNotInterested fill="#E7ACAC" />
              Off Blynd behaviour
            </div>
            <div className="report-btn">
              <BsPersonFillExclamation fill="#E7ACAC" />
              Underage
            </div>
            <div className="report-btn" style={{ border: "none" }}>
              <BsEmojiExpressionlessFill fill="#E7ACAC" />
              I’m just not interested
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportModal;
