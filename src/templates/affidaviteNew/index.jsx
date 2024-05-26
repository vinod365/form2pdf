import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { allClasses } from "../../allClasses";

export const AffidaviteNew = React.forwardRef(({ index }, ref) => {
  const savedData = useSelector((state) => state.formData);

  return (
    <div className="affidavite" ref={ref}>
      <h2> THE TRADEMARK ACT,1999</h2>
      <h2> AFFIDAVIT</h2>
      <p>
        {savedData[index]?.applicationFiledAs ===
          "individual_sole_properiter" &&
          savedData[index]?.firmName && (
            <p>
              I, MR {savedData[index]?.name + " "} AN INDIAN ADULT PROPRIETOR OF{" "}
              {savedData[index]?.firmName + " "}
              HAVING PLACE OF BUSINESS AT
              {" " + savedData[index]?.address + " "}. DO HEREBY SOLEMNLY AND
              SINCERELY DECLARE AND STATE AS FOLLOWS:-
            </p>
          )}
        {savedData[index]?.applicationFiledAs ===
          "individual_sole_properiter" &&
          !savedData[index]?.firmName && (
            <p>
              I, MR {savedData[index]?.name + " "} AN INDIAN ADULT HAVING PLACE
              OF BUSINESS AT
              {" " + savedData[index]?.address + " "}. DO HEREBY SOLEMNLY AND
              SINCERELY DECLARE AND STATE AS FOLLOWS:-
            </p>
          )}
        {savedData[index]?.partnerName && (
          <p>
            I, MR {savedData[index]?.name + " "} AN INDIAN ADULT AUTHORISED
            PARTNER OF {savedData[index]?.firmName} HAVING PLACE OF BUSINESS AT
            {" " + savedData[index]?.address + " "}. DO HEREBY SOLEMNLY AND
            SINCERELY DECLARE AND STATE AS FOLLOWS:-
          </p>
        )}
      </p>

      <p>
        {savedData[index]?.directorName && (
          <p>
            I, MR {savedData[index]?.name + " "} AN INDIAN ADULT AUTHORISED
            DIRECTOR OF {savedData[index]?.firmName + " "}
            HAVING PLACE OF BUSINESS AT
            {" " + savedData[index]?.address + " "}.DO HEREBY SOLEMNLY AND
            SINCERELY DECLARE AND STATE AS FOLLOWS:-
          </p>
        )}
      </p>

      <ol>
        {savedData[index]?.applicationFiledAs ===
          "individual_sole_properiter" &&
          savedData[index]?.firmName && (
            <li>
              I am the proprietor of the applicant’s individual firm namely
              {" " + savedData[index]?.firmName + " "}concern whose principle
              place of business is at {savedData[index]?.address + " "}
              (herein after referred to as my concern). I am authorized and
              competent to make this affidavit.
            </li>
          )}

        {savedData[index]?.applicationFiledAs ===
          "individual_sole_properiter" &&
          !savedData[index]?.firmName && (
            <li>
              I am the proprietor of the applicant’s individual firm concern{" "}
              {savedData[index]?.firmName + " "}
              whose principle place of business is at{" "}
              {savedData[index]?.address + " "}
              (herein after referred to as my concern). I am authorized and
              competent to make this affidavit.
            </li>
          )}

        {savedData[index]?.partnerName && (
          <li>
            <p>
              I am the authorized partner of the applicant’s partnership firm
              namely
              {" " + savedData[index]?.firmName + " "}concern whose principle
              place of business is at {savedData[index]?.address + " "}
              (herein after referred to as my concern). I am authorized and
              competent to make this affidavit.
            </p>
          </li>
        )}

        {savedData[index]?.directorName && (
          <li>
            I am the authorised director of the applicant’s private limited
            company namely
            {" " + savedData[index]?.firmName + " "}concern whose principle
            place of business is at {savedData[index]?.address + " "}
            (herein after referred to as my concern). I am authorized and
            competent to make this affidavit.
          </li>
        )}

        {savedData[index]?.applicationFiledAs ===
          "individual_sole_properiter" && (
          <li>
            The statement made herein under are partly based on my personal
            knowledge, partly information derived by me from the records of my
            proprietorship firm to which I have full access and which I believe
            to be true and partly these are my submissions.
          </li>
        )}
        {savedData[index]?.partnerName && (
          <li>
            The statement made herein under are partly based on my personal
            knowledge, partly information derived by me from the records of my
            partnership firm to which I have full access and which I believe to
            be true and partly these are my submissions.
          </li>
        )}

        {savedData[index]?.directorName && (
          <li>
            The statement made herein under are partly based on my personal
            knowledge, partly information derived by me from the records of my
            Private limited company to which I have full access and which I
            believe to be true and partly these are my submissions.
          </li>
        )}

        <li>
          My concern has been engaged in the business of
          {
            <strong>
              {" " + savedData[index]?.classDesc}
              &nbsp; included in class {savedData[index]?.class}
            </strong>
          }{" "}
          of the nice classification.
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
          {!savedData[index]?.imgFile &&
            savedData[index]?.categoryOfMark == "word" &&
            savedData[index]?.tradeMarkWord}
          ”{"in respect of "}
          {
            <strong>
              {savedData[index]?.classDesc}
              &nbsp; included in class {savedData[index]?.class}
            </strong>
          }{" "}
          was concurrently and honestly used since from date{" "}
          {savedData[index]?.backDate || "Proposed to be used"} in connection
          with the said goods/service and by reason of such bonafide use the
          said goods/service bearing the trade mark have come to be understood
          as being goods/service manufacture/provided and/or marketed by my
          concern, excluding others.
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
          {!savedData[index]?.imgFile &&
            savedData[index]?.categoryOfMark == "word" &&
            savedData[index]?.tradeMarkWord}
          ” becomes the house mark. As my concern has bonafidely and honestly
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
          {!savedData[index]?.imgFile &&
            savedData[index]?.categoryOfMark == "word" &&
            savedData[index]?.tradeMarkWord}
          ” continuously since{" "}
          <strong>
            {" "}
            {savedData[index]?.backDate || "Proposed to be used"}{" "}
          </strong>
          in respect of aforementioned trademark. Hence, my concern’s trademark
          is a distinctive trademark and it has capacity to distinguish the
          good/service of my concern.
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
          {!savedData[index]?.imgFile &&
            savedData[index]?.categoryOfMark == "word" &&
            savedData[index]?.tradeMarkWord}
          ” from
          <strong>
            {" "}
            {savedData[index]?.backDate || "Proposed to be used"}{" "}
          </strong>
        </li>

        {savedData[index]?.applicationFiledAs ==
          "individual_sole_properiter" && (
          <li>
            My
            {savedData[index]?.applicationFiledAs ==
              "individual_sole_properiter" && " proprietorship firm "}
            is having the bill/invoices showing that the goods/service bearing
            the trademark “
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
            {!savedData[index]?.imgFile &&
              savedData[index]?.categoryOfMark == "word" &&
              savedData[index]?.tradeMarkWord}
            ” have been supplied to our valuable purchaser/customer.
          </li>
        )}

        {savedData[index]?.partnerName && (
          <li>
            My partnership firm is having the bill/invoices showing that the
            goods/service bearing the trademark “
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
            {!savedData[index]?.imgFile &&
              savedData[index]?.categoryOfMark == "word" &&
              savedData[index]?.tradeMarkWord}
            ” have been supplied to our valuable purchaser/customer.
          </li>
        )}

        {savedData[index]?.directorName && (
          <li>
            My Private limited company is having the bill/invoices showing that
            the goods/service bearing the trademark “
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
            {!savedData[index]?.imgFile &&
              savedData[index]?.categoryOfMark == "word" &&
              savedData[index]?.tradeMarkWord}
            ” have been supplied to our valuable purchaser/customer.
          </li>
        )}

        {/* <div className="page-break"></div> */}

        {savedData[index]?.applicationFiledAs ==
          "individual_sole_properiter" && (
          <li>
            My concern’s({" "}
            {savedData[index]?.applicationFiledAs ==
              "individual_sole_properiter" && "proprietorship firm "}
            ) said goods/service are of a very high standard of quality and by
            the use of the trade mark in relation to the said goods/service, the
            trade mark denote to those in the trade a distinctive trade mark of
            the goods/service manufacture/provided and/or marketed by my
            concern. I believe that my concern is entitled to the registration
            of the said trade mark in respect of the aforementioned service.
          </li>
        )}

        {savedData[index]?.partnerName && (
          <li>
            My concern’s(partnership firm) said goods/service are of a very high
            standard of quality and by the use of the trade mark in relation to
            the said goods/service, the trade mark denote to those in the trade
            a distinctive trade mark of the goods/service manufacture/provided
            and/or marketed by my concern. I believe that my concern is entitled
            to the registration of the said trade mark in respect of the
            aforementioned service.{" "}
          </li>
        )}

        {savedData[index]?.directorName && (
          <li>
            My concern’s (Private limited company) said goods/service are of a
            very high standard of quality and by the use of the trade mark in
            relation to the said goods/service, the trade mark denote to those
            in the trade a distinctive trade mark of the goods/service
            manufacture/provided and/or marketed by my concern. I believe that
            my concern is entitled to the registration of the said trade mark in
            respect of the aforementioned service.{" "}
          </li>
        )}
      </ol>

      <div className="page-break"></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <p style={{ textAlign: "center", marginTop: "30px" }}>VERIFICATION</p>

        <p>
          The statement made in fore going paragraphs are true to my knowledge
          and the extracts in paragraph 3 to 7 are according to the available
          records of my{" "}
          {savedData[index]?.applicationFiledAs ==
            "individual_sole_properiter" && "proprietorship firm "}
          {savedData[index]?.partnerName && "partnership firm"}
          {savedData[index]?.directorName && "Private limited company"}
        </p>

        <div>
          <p>Declared at Surat.</p>
          <p>Date {savedData[index]?.date} </p>
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

          <p className="varification-footer-text"> Deponent</p>
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

export default AffidaviteNew;
