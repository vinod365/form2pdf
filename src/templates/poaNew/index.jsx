import React from "react";
import "./style.css";
import { useSelector } from "react-redux";

const POAnew = React.forwardRef(({ index }, ref) => {
  const savedData = useSelector((state) => state.formData);

  return (
    <div ref={ref}>
      <div>
        <div className="poa-attached-image">
          {savedData[index]?.stamp && (
            <img src={savedData[index]?.stamp} alt="stamp" />
          )}
          <div className="page-break"></div>
        </div>
        <div className="poa">
          <h2 className="name"> TRADEMARK ACT,1999</h2>
          <h2> GENERAL POWER OF ATTORNEY</h2>
          <div className="poa-body">
            {savedData[index]?.applicationFiledAs ===
              "individual_sole_properiter" &&
              savedData[index]?.firmName && (
                <p>
                  I, MR {savedData[index]?.name + " "} (NATIONALITY: INDIAN)
                  PROPRIETOR OF {savedData[index]?.firmName + " "}
                  HAVING PLACE OF BUSINESS AT
                  {" " + savedData[index]?.address + " "}. HERE BY AUTHORIZE
                  ADVOCATE ILABEN JATINKUMAR PATEL & ADVOCATE D J THAKAR
                  ,ADVOCATE GUJARAT HIGH COURT & TRADEMARK ATTORNY(ATTORNEY
                  CODE: 43302), HAVING PLACE OF BUSINESS AT 508 HIR ASHA ARCADE
                  ,NEAE SAGARSANGIT CROSS ROAD ,SOLA,AHMEDABAD-380061
                </p>
              )}

            {savedData[index]?.applicationFiledAs ===
              "individual_sole_properiter" &&
              !savedData[index]?.firmName && (
                <p>
                  I, MR {savedData[index]?.name + " "} (NATIONALITY: INDIAN)
                  PROPRIETOR HAVING PLACE OF BUSINESS AT
                  {" " + savedData[index]?.address + " "}.HERE BY AUTHORIZE
                  ADVOCATE ILABEN JATINKUMAR PATEL & ADVOCATE D J THAKAR
                  ,ADVOCATE GUJARAT HIGH COURT & TRADEMARK ATTORNY(ATTORNEY
                  CODE: 43302), HAVING PLACE OF BUSINESS AT 508 HIR ASHA ARCADE
                  ,NEAE SAGARSANGIT CROSS ROAD ,SOLA,AHMEDABAD-380061
                </p>
              )}

            {savedData[index]?.partnerName && (
              <p>
                I, MR {savedData[index]?.name + " "} (NATIONALITY: INDIAN)
                AUTHORISED PARTNER OF {savedData[index]?.firmName} AT
                {" " + savedData[index]?.address + " "}.HERE BY AUTHORIZE
                ADVOCATE ILABEN JATINKUMAR PATEL & ADVOCATE D J THAKAR ,ADVOCATE
                GUJARAT HIGH COURT & TRADEMARK ATTORNY(ATTORNEY CODE: 43302),
                HAVING PLACE OF BUSINESS AT 508 HIR ASHA ARCADE ,NEAE
                SAGARSANGIT CROSS ROAD ,SOLA,AHMEDABAD-380061
              </p>
            )}

            {savedData[index]?.directorName && (
              <p>
                I, MR {savedData[index]?.name + " "} (NATIONALITY: INDIAN)
                AUTHORISED DIRECTOR OF {savedData[index]?.firmName} AT
                {" " + savedData[index]?.address + " "}.HERE BY AUTHORIZE
                ADVOCATE ILABEN JATINKUMAR PATEL & ADVOCATE D J THAKAR ,ADVOCATE
                GUJARAT HIGH COURT & TRADEMARK ATTORNY(ATTORNEY CODE: 43302),
                HAVING PLACE OF BUSINESS AT 508 HIR ASHA ARCADE ,NEAE
                SAGARSANGIT CROSS ROAD ,SOLA,AHMEDABAD-380061
              </p>
            )}

            <p>
              TO ACT AS OUR AGENT/ADVOCATE FOR REGISTRATIONS, RENEWALS,
              OPPOSITIONS, RECTIFICATION AND OTHER PROCEEDINGS UNDER THE TRADE
              MARKS ACT, 1999 IN RESPECT OF OUR TRADE MARKS.
            </p>

            <p>
              WE REQUEST THAT ALL NOTICES, REQUISITIONS AND COMMUNICATIONS MAY
              BE SENT TO THE SAID AGENT/ADVOCATE AT THE ABOVE ADDRESS.
            </p>

            <p>WE HEREBY REVOKE ALL PREVIOUS AUTHORIZATIONS, IF ANY.</p>

            <p>WE RATIFY ALL ACTS DONE BY THE SAID AGENT/ADVOCATE.</p>
          </div>

          <div className="date-and-firm">
            <p> DATED THIS {savedData[index]?.date + " "}</p>
          </div>

          <div className="firmName">
            {savedData[index]?.applicationFiledAs ===
              "individual_sole_properiter" &&
              savedData[index]?.firmName &&
              `FOR ${savedData[index]?.firmName}`}

            {savedData[index]?.applicationFiledAs ===
              "individual_sole_properiter" &&
              !savedData[index]?.firmName &&
              `FOR ${savedData[index]?.name}`}

            {savedData[index]?.partnerName &&
              `FOR ${savedData[index]?.firmName}`}

            {savedData[index]?.directorName &&
              `FOR ${savedData[index]?.firmName}`}

            <img
              width="100px"
              src={savedData[index]?.signature}
              alt="signature"
            />
            {savedData[index]?.applicationFiledAs ===
              "individual_sole_properiter" && "PROPRIETOR"}

            {savedData[index]?.partnerName && savedData[index]?.name}
            <br />
            {savedData[index]?.partnerName && "PARTNER"}

            {savedData[index]?.directorName && savedData[index]?.name}
            <br />
            {savedData[index]?.directorName && `DIRECTOR`}
          </div>

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
    </div>
  );
});

export default POAnew;
