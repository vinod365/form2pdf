import { useEffect, useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { addData } from "../../features/formData.slice";

import { allClasses } from "../../allClasses";

import toast, { Toaster } from "react-hot-toast";
import { ImageUploader } from "../imageUploader";

export const Form = () => {
  const [applicationFiledAs, setApplicationFiledAs] = useState("");
  const [name, setName] = useState("");

  const [firmName, setFirmName] = useState("");

  const [partnerName, setPartnerName] = useState("");

  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const [natureOfApplicant, setNatureOfApplicant] = useState("");
  const [legalStatus, setLegalStatus] = useState("");
  const [categoryOfMark, setCategoryOfMark] = useState("");

  const [tradeMarkWord, setTradeMarkWord] = useState("");

  const [imgFile, setImgFile] = useState("");

  const [classNumber, setClassNumber] = useState("");

  const [classDesc, setclassDesc] = useState(allClasses[classNumber]);

  const [statement, setStatement] = useState("");

  const [backDate, setBackDate] = useState("");

  const [userProfile, setUserProfile] = useState("");

  const [directorName, setDirectorName] = useState("");

  const [stamp, setStamp] = useState("");
  const [signature, setSignature] = useState("");
  const [aadhaarFront, setAadhaarFront] = useState("");
  const [aadhaarBack, setAadhaarBack] = useState("");
  const [pan, setPan] = useState("");

  const [currentView, setCurrentView] = useState(true);

  useEffect(() => {
    setclassDesc(allClasses[classNumber - 1]);
  }, [classNumber]);

  function handleOnBackdateChange(dateString) {
    const date = new Date(dateString);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    setBackDate(formattedDate);
  }

  function handleOnclassDescChange(value) {
    setclassDesc(value);
  }

  const dispatch = useDispatch();

  function handleSubmit() {
    if (
      !applicationFiledAs ||
      !name ||
      !address ||
      !mobile ||
      !email ||
      !natureOfApplicant ||
      !legalStatus ||
      !classNumber
    ) {
      toast.error("ALL the fields are mandatory");

      return;
    }

    function convertDate(date) {
      console.log("date", date);
      const currentDate = new Date(date);

      const day = currentDate.getDate().toString().padStart(2, "0"); // Ensure two digits, padding with zero if necessary
      const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based, so add 1
      const year = currentDate.getFullYear();

      const formattedDate = `${day}/${month}/${year}`;

      return formattedDate;
    }

    dispatch(
      addData({
        applicationFiledAs,
        name,
        firmName,
        address,
        mobile,
        email,
        natureOfApplicant,
        legalStatus,
        categoryOfMark,
        tradeMarkWord,
        imgFile,
        class: classNumber,
        classDesc,
        date: convertDate(Date.now()),
        statement,
        backDate,
        partnerName,
        stamp,
        signature,
        aadhaarFront,
        aadhaarBack,
        directorName,
        pan,
        userProfile,
      })
    );

    toast.success("Added new file");
    // reset();
  }

  console.log("d", applicationFiledAs == "individual_sole_properiter");
  function reset() {
    setApplicationFiledAs("");
    setName("");
    setAddress("");
    setMobile("");
    setEmail("");
    setNatureOfApplicant("");
    setLegalStatus("");
    setCategoryOfMark("");
    setTradeMarkWord("");
    setImgFile("");
    setClassNumber("");
    setPartnerName("");
    toast.error("Data cleared");
  }

  function handleOnClassNumberChange(num) {
    if (num === "") setClassNumber(num);
    if (num > 45 || num < 1) return;
    setClassNumber(num);
  }

  function handleOndirectorNameChange(e) {
    setDirectorName(e);
  }

  return (
    <>
      {currentView === true && (
        <div className="form">
          <div className="left">
            <select
              style={{
                color: applicationFiledAs && "black",
              }}
              value={applicationFiledAs}
              onChange={(e) => setApplicationFiledAs(e.target.value)}
            >
              <option disabled value="">
                Application Filed AS
              </option>
              <option value="small_enterprise">Small Enterprise</option>
              <option value="individual_sole_properiter">
                Individual / Sole properiter
              </option>

              <option value="Body_Incorporate">Body Incorporate</option>
            </select>

            <p> Applicant</p>

            {applicationFiledAs == "individual_sole_properiter" && (
              <input
                placeholder="Properiter"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}

            {applicationFiledAs != "individual_sole_properiter" && (
              <input
                placeholder="Authorised partner"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}

            <input
              placeholder="Firm name"
              value={firmName}
              onChange={(e) => setFirmName(e.target.value)}
            />

            <input
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              placeholder="Mobile No."
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              type="number"
            />

            <input
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />

            <select
              style={{
                color: natureOfApplicant && "black",
              }}
              value={natureOfApplicant}
              onChange={(e) => setNatureOfApplicant(e.target.value)}
            >
              <option disabled value="">
                Nature of Applicant
              </option>
              <option value="single firm">Single Firm</option>
              <option value="body incorporate">Body Incorporate</option>
              <option value="association of persons">
                Association of persons
              </option>
              <option value="Government Department">
                Government Department
              </option>

              <option value="Joint Applicant">Joint Applicant</option>

              <option value="Joint Firm">Joint Firm</option>

              <option value="Limited Liability Partnership(LLP)">
                Limited Liability Partnership(LLP)
              </option>

              <option value="other">Other</option>
              <option value="Partnership Firm">Partnership Firm</option>
              <option value="Single Firm">Single Firm</option>

              <option value="Society Firm">Society Firm</option>

              <option value="Statutory Body">Statutory Body</option>

              <option value="Trust">Trust</option>
            </select>

            {natureOfApplicant == "Limited Liability Partnership(LLP)" && (
              <input
                placeholder="Partner name"
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
              />
            )}

            {natureOfApplicant == "Partnership Firm" && (
              <input
                placeholder="Partner name"
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
              />
            )}

            <select
              style={{
                color: legalStatus && "black",
              }}
              value={legalStatus}
              onChange={(e) => setLegalStatus(e.target.value)}
            >
              <option disabled value="">
                Legal status
              </option>
              <option value="Individual">Individual</option>
              <option value="Private Limited company">
                Private Limited company
              </option>
              <option value="Limited Liability partnership">
                Limited Liability partnership
              </option>
              <option value="Partnership">Partnership</option>
            </select>

            {legalStatus == "Private Limited company" && (
              <input
                placeholder="Director Name"
                value={directorName}
                onChange={(e) => handleOndirectorNameChange(e.target.value)}
                type="text"
              />
            )}

            <input
              placeholder="Enter class number ( 1 - 45 )"
              value={classNumber}
              onChange={(e) => handleOnClassNumberChange(e.target.value)}
              type="number"
            />

            {classNumber && (
              <input
                placeholder="Class Description"
                value={classDesc}
                onChange={(e) => handleOnclassDescChange(e.target.value)}
                type="text"
              />
            )}
          </div>
          <div className="right">
            <p>Mark details</p>

            <select
              style={{
                color: statement && "black",
              }}
              value={statement}
              onChange={(e) => setStatement(e.target.value)}
            >
              <option disabled value="">
                Statement as to use of mark
              </option>
              <option value="Proposed_to_be_used">Proposed to be used</option>
              <option value="Backdated">Backdated</option>
            </select>

            {statement === "Backdated" && (
              <input
                type="date"
                onChange={(e) => handleOnBackdateChange(e.target.value)}
              ></input>
            )}

            <select
              style={{
                color: categoryOfMark && "black",
              }}
              value={categoryOfMark}
              onChange={(e) => {
                setCategoryOfMark(e.target.value);
                setImgFile("");
                categoryOfMark === "" ? setTradeMarkWord("") : "";
              }}
            >
              <option disabled value="">
                Category of mark
              </option>
              <option value="word">Word</option>
              <option value="device">Device</option>
            </select>

            {(categoryOfMark === "word" || categoryOfMark === "device") && (
              <input
                placeholder="Mark word"
                value={tradeMarkWord}
                onChange={(e) => setTradeMarkWord(e.target.value)}
                type="email"
              />
            )}

            <div
              style={{
                display: "flex",
              }}
            >
              <button
                className="secondary-btn"
                onClick={() => {
                  setCurrentView((prev) => !prev);
                }}
              >
                Attach Images
              </button>
            </div>

            <div className="btns">
              <button className="save-btn" onClick={handleSubmit}>
                Save
              </button>
              <button onClick={reset} className="clear-btn">
                Clear
              </button>
            </div>
          </div>
        </div>
      )}

      {currentView === false && (
        <div className="image-uploader-form">
          <div className="image-uploader-box">
            <ImageUploader
              fileName={"stamp"}
              imageFile={stamp}
              setImageFile={setStamp}
            ></ImageUploader>

            <ImageUploader
              fileName={"userProfile"}
              imageFile={userProfile}
              setImageFile={setUserProfile}
            ></ImageUploader>

            <ImageUploader
              fileName={"Device Image"}
              imageFile={imgFile}
              setImageFile={setImgFile}
            ></ImageUploader>
            <ImageUploader
              fileName={"Signature"}
              imageFile={signature}
              setImageFile={setSignature}
            ></ImageUploader>

            <ImageUploader
              fileName={"Aadhaar Front Side"}
              imageFile={aadhaarFront}
              setImageFile={setAadhaarFront}
            ></ImageUploader>

            <ImageUploader
              fileName={"Aadhaar Back Side"}
              imageFile={aadhaarBack}
              setImageFile={setAadhaarBack}
            ></ImageUploader>

            <ImageUploader
              fileName={"Pan"}
              imageFile={pan}
              setImageFile={setPan}
            ></ImageUploader>
          </div>
          <button
            className="secondary-btn"
            onClick={() => {
              setCurrentView((prev) => !prev);
            }}
          >
            Go back
          </button>
        </div>
      )}
    </>
  );
};
