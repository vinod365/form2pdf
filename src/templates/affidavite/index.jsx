import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { allClasses } from "../../allClasses";

export const Affidavite = React.forwardRef(({ index }, ref) => {
  const savedData = useSelector((state) => state.formData);

  return (
    <div className="affidavite" ref={ref}>
      <h2> THE TRADEMARK ACT,1999</h2>
      <h2> AFFIDAVIT</h2>
      <p>
        I, <strong>{savedData[index]?.name} </strong>,
        {savedData[index]?.applicationFiledAs != "individual_sole_properiter" &&
          `AUTHORISED SIGNATORY OF ${savedData[index]?.firmName + " "}`}
        AND AN INDIAN ADULT, HAVING PLACE OF BUSINESS IS AT AT C/O{" "}
        <strong>{savedData[index]?.address + " "}</strong>
        DO HEREBY SOLEMNLY AND SINCERELY DECLARE AND STATE AS FOLLOWS:-
      </p>
      <ol>
        <li>
          I am the proprietor of the applicant’s concern whose principle place
          of business is at {savedData[index]?.address + " "}
          (herein after referred to as my concern). I am authorized and
          competent to make this affidavit.
        </li>

        <li>
          The statement made herein under are partly based on my personal
          knowledge, partly information derived by me from the records of my
          concern to which I have full access and which I believe to be true and
          partly these are my submissions.
        </li>
        <li>
          My concern has been engaged in the business of .
          {savedData[index]?.class >= "35" ? (
            <strong>
              {savedData[index]?.classDesc}
              &nbsp; included in class {savedData[index]?.class}
            </strong>
          ) : (
            <strong>{savedData[index]?.classDesc}</strong>
          )}
        </li>

        <li>
          The trade mark “
          {savedData[index]?.imgFile && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "flex-end",
                width: "150px",
                marginTop: "10px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "contain",
                }}
                src={savedData[index]?.imgFile}
              />
            </div>
          )}
          {savedData[index]?.categoryOfMark == "word" &&
            savedData[index]?.tradeMarkWord}
          ”{" "}
          {savedData[index]?.class >= "35" ? (
            <strong>
              {savedData[index]?.classDesc}
              &nbsp; included in class {savedData[index]?.class}
            </strong>
          ) : (
            <strong>{savedData[index]?.classDesc}</strong>
          )}{" "}
          of the trademark act,1999 was concurrently and honestly used since
          FROM DATE {savedData[index]?.backDate || "Proposed to be used"} in
          connection with the said goods/service and by reason of such bonafide
          use the said goods/service bearing the trade mark “
          {savedData[index]?.imgFile && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "flex-end",
                width: "150px",
                marginTop: "10px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "contain",
                }}
                src={savedData[index]?.imgFile}
              />
            </div>
          )}
          {savedData[index]?.categoryOfMark == "word" &&
            savedData[index]?.tradeMarkWord}
          ” have come to be understood as being goods/service
          manufacture/provided and/or marketed by my concern, excluding others.
        </li>

        <li>
          My concern has spent enormous amount of labor to develop the product
          right from its inception and has acquired good reputation and goodwill
          in this competitive market. The trademark “
          {savedData[index]?.imgFile && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "flex-end",
                width: "150px",
                marginTop: "10px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "contain",
                }}
                src={savedData[index]?.imgFile}
              />
            </div>
          )}
          {savedData[index]?.categoryOfMark == "word" &&
            savedData[index]?.tradeMarkWord}
          ” becomes the HOUSE MARK. As my concern has bonafidely and honestly
          adopted and used the Trade Mark “
          {savedData[index]?.imgFile && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "flex-end",
                width: "150px",
                marginTop: "10px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "contain",
                }}
                src={savedData[index]?.imgFile}
              />
            </div>
          )}
          {savedData[index]?.categoryOfMark == "word" &&
            savedData[index]?.tradeMarkWord}
          ” continuously since{" "}
          <strong>
            {" "}
            {savedData[index]?.backDate || "Proposed to be used"}{" "}
          </strong>
          in respect of aforementioned trademark. Hence, my concern’s trademark
          \ is a distinctive trademark and it has capacity to distinguish the
          service of my concern.
        </li>

        <li>
          My concern has spent enormous amount of labor after sales promotional
          activities and quality control. My concern’s turnover figure has
          increased day by day as a result of quality control. My concern has
          honestly adopted and continuously used the Trade Mark “
          {savedData[index]?.imgFile && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "flex-end",
                width: "150px",
                marginTop: "10px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "contain",
                }}
                src={savedData[index]?.imgFile}
              />
            </div>
          )}
          {savedData[index]?.categoryOfMark == "word" &&
            savedData[index]?.tradeMarkWord}
          ” from
          <strong>
            {" "}
            {savedData[index]?.backDate || "Proposed to be used"}{" "}
          </strong>
        </li>

        <li>
          My {savedData[index]?.legalStatus} is having the bill/invoices showing
          that the goods/service bearing the trademark “
          {savedData[index]?.imgFile && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "flex-end",
                width: "150px",
                marginTop: "10px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "contain",
                }}
                src={savedData[index]?.imgFile}
              />
            </div>
          )}
          {savedData[index]?.categoryOfMark == "word" &&
            savedData[index]?.tradeMarkWord}
          ” have been supplied to our valuable purchaser/customer.
        </li>
        {/* <div className="page-break"></div> */}
        <li>
          My concern’s({savedData[index]?.legalStatus}) said goods/service are
          of a very high standard of quality and by the use of the trade mark in
          relation to the said goods/service, the trade mark denote to those in
          the trade a distinctive trade mark of the goods/service
          manufacture/provided and/or marketed by my concern. I believe that my
          concern is entitled to the registration of the said trade mark in
          respect of the aforementioned service.
        </li>
      </ol>
      {/* <p className="footer-text">{savedData[index]?.name}</p>
      <p className="footer-text">PROPRIETOR</p> */}
      <div className="page-break"></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <p style={{ textAlign: "center", marginTop: "30px" }}>VERIFICATION</p>

        <p>
          The statement made in fore going paragraphs are true to my knowledge
          and the extracts in paragraph 3 to 7 are according to the available
          records of my {savedData[index]?.legalStatus},
        </p>

        <div>
          <p>Declared at AHMEDABAD.</p>
          <p>Date {savedData[index]?.date} </p>
          {/* <p>Dated this ____th day of February ,2024.</p> */}
        </div>

        <div>
          <div className="signature">
            <img src={savedData[index]?.userProfile}></img>
          </div>
          <p className="varification-footer-text">{savedData[index]?.name}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img
              style={{
                opacity: 0.1,
              }}
              width="100px"
              src={savedData[index]?.signature}
              alt=""
            />
          </div>

          <p className="varification-footer-text"> deponent</p>
        </div>
        <div>
          <p> To, </p>
          <p> The Registrar of Trade Marks,</p>
          <p> The office of Trade Marks Registry,</p>
          <p> At Ahmedabad and/or Mumbai.</p>
        </div>
      </div>
      <div className="page-break"></div>

      <div className="imgs">
        <img width={"100%"} src={savedData[index]?.aadhaarFront}></img>
      </div>
      <div className="imgs">
        <img width={"100%"} src={savedData[index]?.aadhaarBack}></img>
      </div>
      <div className="imgs">
        <img width={"100%"} src={savedData[index]?.pan}></img>
        <img
          style={{
            opacity: 0.1,
          }}
          width="100px"
          src={savedData[index]?.signature}
          alt=""
        />
      </div>
    </div>
  );
});

export default Affidavite;
