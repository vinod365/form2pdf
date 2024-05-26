import React from "react";
import "./style.css";
import { useSelector } from "react-redux";

import { allClasses } from "../../allClasses";

const Table = React.forwardRef(({ index }, ref) => {
  const savedData = useSelector((state) => state.formData);

  function generateRandomNumber(length) {
    let randomNumber = "";

    // Generate random digits and concatenate them
    for (let i = 0; i < length; i++) {
      randomNumber += Math.floor(Math.random() * 10); // Generate random digit (0-9)
    }

    return randomNumber;
  }

  return (
    <div className="table" ref={ref}>
      <p className="title">FORM TM- A</p>
      <p className="title">The Trade Marks Act, 1999</p>
      <p className="title">Application For Registration Of a Trademark</p>
      <p className="subtitle">
        On application to register a trade mark for a specification of goods or
        services included in one class [section 18(1)]
      </p>
      <p className="subtitle" style={{ textAlign: "left", marginTop: "10px" }}>
        Temp. Ref. No: {generateRandomNumber(8)}
      </p>
      <table>
        <tr>
          <td>NATURE OF APPLICATION:</td>
          <td>A TRADE MARKS APPLICATION</td>
        </tr>
        <tr>
          <td>APPLICATION FILED AS:</td>
          <td>{savedData[index]?.applicationFiledAs.replaceAll("_", " ")}</td>
        </tr>
        <tr>
          <td>FEE:</td>
          <td>4500</td>
        </tr>

        <tr>
          <td colSpan={2}>APPLICANT</td>
        </tr>

        <tr>
          <td>Applicant No. </td>
          <td>1</td>
        </tr>

        <tr>
          <td>Name </td>

          {savedData[index]?.firmName && <td>{savedData[index]?.firmName}</td>}
          {!savedData[index]?.firmName && <td>{savedData[index]?.name}</td>}
        </tr>

        {savedData[index]?.partnerName && (
          <tr>
            <td>Partners </td>
            <td>{savedData[index]?.partnerName}</td>
          </tr>
        )}

        <tr>
          <td>Address</td>
          <td>{savedData[index]?.address}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>India</td>
        </tr>
        <tr>
          <td>Jurisdiction</td>
          <td>AHMEDABAD</td>
        </tr>
        <tr>
          <td>Address for Service</td>
          <td>
            140 SHRINATH NAGAR SOC, NEAR PANCHDEV MAHADEV TEMPLE, KARAMCHARI
            SCHOOL ROAD, RANNAPARK, GHATLODIA, AHMEDABAD-380061
          </td>
        </tr>
        <tr>
          <td>Mobile No.</td>
          <td>{savedData[index]?.mobile}</td>
        </tr>
        <tr>
          <td>Email Address</td>
          <td>{savedData[index]?.email}</td>
        </tr>
        <tr>
          <td>Nature of Applicant</td>
          <td>{savedData[index]?.natureOfApplicant}</td>
        </tr>
        <tr>
          <td>Legal Status</td>
          <td> {savedData[index]?.legalStatus}</td>
        </tr>
        <tr>
          <td colSpan={2}>APPLICANT'S AGENT (If Any):</td>
        </tr>
        <tr>
          <td>Name:</td>
          <td>DHARMIK THAKAR</td>
        </tr>
        <tr>
          <td>Address:</td>
          <td>
            140 SHRINATH NAGAR SOC, NEAR PANCHDEV MAHADEV TEMPLE, KARAMCHARI
            SCHOOL ROAD, RANNAPARK, GHATLODIA, AHMEDABAD-380061
          </td>
        </tr>
        <tr>
          <td>Nature of Agent</td>
          <td>Advocate</td>
        </tr>
        <tr>
          <td>Registration No.</td>
          <td>29517</td>
        </tr>
        <tr>
          <td colSpan={2}>MARK DETAILS</td>
        </tr>
        <tr>
          <td>Category of Mark</td>
          <td>{savedData[index]?.categoryOfMark}</td>
        </tr>
        <tr>
          <td>Trade Mark</td>
          <td>{savedData[index]?.tradeMarkWord}</td>
        </tr>
        {savedData[index]?.categoryOfMark == "device" && (
          <tr>
            <td>Image Description</td>
            <td>Image contains artistic device and fonts</td>
          </tr>
        )}

        {savedData[index]?.categoryOfMark == "device" && (
          <tr>
            <td
              style={{
                textAlign: "center",
              }}
              colSpan={2}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    fontFamily: "Times new roman",
                    fontSize: "16px",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  Trademark Image:
                </p>
                {/* <div
                  style={{
                    marginTop: "100px",
                    marginBottom: "20px",
                    marginLeft: "35%",
                    height: "20px",
                    width: "20px",
                    backgroundColor: "white",
                  }}
                ></div> */}
                {/* <img
                  width={"200px"}
                  style={{
                    marginBottom: "20px",
                    marginLeft: "35%",
                    height: "200px",
                    objectFit: "contain",
                    padding: "5px",
                  }}
                  src={savedData[index]?.imgFile}
                /> */}

                <img
                  width={"200px"}
                  style={{
                    marginBottom: "20px",
                    marginLeft: "38%",
                    width: "150px",
                    height: "150px",
                    objectFit: "contain",
                    padding: "5px",
                  }}
                  src={savedData[index]?.imgFile}
                />
              </div>
            </td>
          </tr>
        )}

        <tr>
          <td colSpan={2}>IF MARK IN A LANGUAGE OTHER THAN HINDI OR ENGLISH</td>
        </tr>

        <tr>
          <td>Language</td>
          <td>English</td>
        </tr>
        <tr>
          <td colSpan={2}>
            CONDITIONS OR LIMITATIONS TO USE THE TRADEMARK, IF ANY
          </td>
        </tr>
        <tr>
          <td colSpan={2}></td>
        </tr>
        <tr>
          <td colSpan={2}>CLASS OF GOODS OR SERVICE</td>
        </tr>

        <tr>
          <td> Class: {savedData[index]?.class}</td>
          <td>
            Description:
            {savedData[index]?.classDesc}&nbsp;included in class{" "}
            {savedData[index]?.class}
          </td>
        </tr>
        <tr>
          <td>STATEMENT AS TO USE OF MARK</td>
          {savedData[index]?.statement == "Proposed_to_be_used" && (
            <td>Proposed to be used</td>
          )}

          {savedData[index]?.statement == "Backdated" && (
            <td>
              The mark is used by the applicant or its predecessor in title
              since {savedData[index]?.backDate} in respect of the goods and
              service mentioned in the application.
            </td>
          )}
        </tr>
        <tr>
          <td colSpan={2}>ANY OTHER IMPORTANT INFORMATION OR STATEMENT</td>
        </tr>
        <tr>
          <td colSpan={2}></td>
        </tr>
        <tr>
          <td>VERIFICATION</td>
          <td>
            I hereby verify that above mentioned facts are true to best of my
            knowledge and belief.
          </td>
        </tr>
        <tr>
          <td>Date</td>
          <td> {savedData[index]?.date.replaceAll("/", "-")}</td>
        </tr>
      </table>
      <div className="footer">
        <p className="header">Attachment Detail</p>
        <p className="subheader">No Attachment.</p>
      </div>
    </div>
  );
});

export default Table;
