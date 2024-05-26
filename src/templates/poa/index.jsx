import React from "react";
import "./style.css";
import { useSelector } from "react-redux";

import { allClasses } from "../../allClasses";

const POA = React.forwardRef(({ index }, ref) => {
  const savedData = useSelector((state) => state.formData);

  return (
    <div ref={ref}>
      <div className="poa-attached-image">
        {savedData[index]?.stamp && <img src={savedData[index]?.stamp}></img>}
        <div className="page-break"></div>
      </div>
      <div className="poa">
        <h2 className="name"> TRADEMARK ACT,1999</h2>
        <h2> GENERAL POWER OF ATTORNEY</h2>
        <div className="poa-body">
          <p>
            I, MR {savedData[index]?.name} AUTHORISED SIGNATORY OF{" "}
            {savedData[index]?.firmName + " "}
            (NATIONALITY: INDIAN), {savedData[index]?.address + " "}.HERE BY
            AUTHORIZE ADVOCATE ILABEN JATINKUMAR PATEL & ADVOCATE D J THAKAR
            ,ADVOCATE GUJARAT HIGH COURT & TRADEMARK ATTORNY(ATTORNEY CODE:
            43302), HAVING PLACE OF BUSINESS AT 508 HIR ASHA ARCADE ,NEAE
            SAGARSANGIT CROSS ROAD ,SOLA,AHMEDABAD-380061
          </p>

          <p>
            TO ACT AS OUR AGENT/ADVOCATE FOR REGISTRATIONS, RENEWALS,
            OPPOSITIONS, RECTIFICATION AND OTHER PROCEEDINGS UNDER THE TRADE
            MARKS ACT, 1999 IN RESPECT OF OUR TRADE MARKS.
          </p>

          <p>
            WE REQUEST THAT ALL NOTICES, REQUISITIONS AND COMMUNICATIONS MAY BE
            SENT TO THE SAID AGENT/ADVOCATE AT THE ABOVE ADDRESS.
          </p>

          <p>WE HEREBY REVOKE ALL PREVIOUS AUTHORIZATIONS, IF ANY.</p>

          <p>WE RATIFY ALL ACTS DONE BY THE SAID AGENT/ADVOCATE.</p>
        </div>

        <div className="date-and-firm">
          <p> DATED THIS {savedData[index]?.date + " "}</p>
        </div>

        <div className="firmName">
          <p>
            {savedData[index]?.legalStatus == "Individual" &&
              `FOR, ${savedData[index]?.name + " "}`}{" "}
          </p>

          <p>
            {savedData[index]?.legalStatus == "Partnership" &&
              `FOR, ${savedData[index]?.firmName + " "}`}
          </p>
          <p>
            {savedData[index]?.legalStatus == "Private Limited company" &&
              `FOR, ${savedData[index]?.firmName + " "}`}
          </p>

          <p>
            {savedData[index]?.legalStatus == "Limited Liability partnership" &&
              `FOR, ${savedData[index]?.firmName + " "}`}
          </p>

          <img width="100px" src={savedData[index]?.signature} alt="" />
          {savedData[index]?.legalStatus == "Individual" && "Proprietor"}

          <p>
            {savedData[index]?.legalStatus == "Partnership" &&
              `${savedData[index]?.partnerName + " "}`}
          </p>

          <p>
            {savedData[index]?.legalStatus == "Partnership" && `Partnership`}
          </p>
          <p>
            {savedData[index]?.legalStatus == "Private Limited company" &&
              `${savedData[index]?.directorName} `}
          </p>
          <p>
            {savedData[index]?.legalStatus == "Private Limited company" &&
              `Director`}
          </p>
          <p>
            {savedData[index]?.legalStatus == "Limited Liability partnership" &&
              `${savedData[index]?.directorName}`}
          </p>
          <p>
            {savedData[index]?.legalStatus == "Limited Liability partnership" &&
              `Director`}
          </p>
        </div>
        {/* 
      {!savedData[index]?.partnerName && (
        <div className="partners">
          <p> {savedData[index]?.name}</p>
          <img width="50px" src={savedData[index]?.signature} alt="" />
          <p> {"DIRECTOR"} </p>
        </div>
      )} */}

        {/* <div className="partners">
        <p> {savedData[index]?.partnerName}</p>
        {savedData[index]?.partnerName && (
          <img width="50px" src={savedData[index]?.signature} alt="" />
        )}
        <p p> {savedData[index]?.partnerName && "PARTNER"} </p>
      </div> */}

        <div className="page-break"></div>
        <div className="footer">
          <p>ACCEPTED BY ME </p>
          <div>
            <p>ILABEN JATINKUMAR PATEL </p>
            <p>ATTORNEY CODE- 43302 </p>
          </div>
          <div>
            <p>TO, </p>

            <p>The Registrar of Trade Marks </p>

            <p>Trade Marks Registry </p>
            <p>At Ahmedabad, Chennai, Delhi, Kolkata, Mumbai </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default POA;
