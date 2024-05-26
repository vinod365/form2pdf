import "./style.css";
import pdfLogo from "../../assets/pdf.png";
import { useSelector } from "react-redux";
import { isMobile } from "react-device-detect";

export const Saved = ({ setIndex, handleOnPrint }) => {
  const savedData = useSelector((state) => state.formData);

  console.log("savedData", savedData);

  function handlePrintAffidavite(index) {
    setIndex(index);
    setTimeout(() => {
      handleOnPrint("affidavite");
    }, 1000);
  }

  function hanldePrintTable(index) {
    setIndex(index);

    setTimeout(() => {
      handleOnPrint("table");
    }, 100);
  }

  function hanldePrintPoa(index) {
    setIndex(index);

    setTimeout(() => {
      handleOnPrint("poa");
    }, 100);
  }

  function handlePrintPoaNew(index) {
    setIndex(index);
    setTimeout(() => {
      handleOnPrint("poaNew");
    });
  }
  function handlePrintAffidaviteNew(index) {
    setIndex(index);
    setTimeout(() => {
      handleOnPrint("affidaviteNew");
    });
  }

  return (
    <div className="saved-container">
      {(savedData ?? []).map((savedData, index) => {
        return (
          <div className="saved" key={index}>
            <div className="details-container">
              <div className="details">
                <p className="name">{savedData.tradeMarkWord}</p>
                <p>({savedData.class})</p>
              </div>
            </div>
            {!isMobile && (
              <div className="btns">
                <button onClick={() => hanldePrintTable(index)}>Draft</button>

                {/* <button onClick={() => hanldePrintPoa(index)}>POA</button>

                <button onClick={() => handlePrintAffidavite(index)}>
                  Affidavite
                </button> */}

                <button onClick={() => handlePrintPoaNew(index)}>
                  POA (new)
                </button>
                <button onClick={() => handlePrintAffidaviteNew(index)}>
                  Affidavite (new)
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Saved;
