import "./App.css";
import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import { isMobile } from "react-device-detect";
import { Form } from "../components/form";
import Saved from "../components/saved";
import Table from "../templates/table";
import Affidavite from "../templates/affidavite";
import toast from "react-hot-toast";
import POA from "../templates/poa";
import POAnew from "../templates/poaNew";
import AffidaviteNew from "../templates/affidaviteNew";

export const Home = () => {
  const tableRef = useRef(null);
  const affidaviteRef = useRef(null);
  const poaRef = useRef(null);
  const poaNewRef = useRef(null);
  const affidaviteNewRef = useRef(null);

  const [index, setIndex] = useState(0);
  let toastID;
  const handleOnPrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => {
      console.log("before printing...");
      toastID = toast("Intializing printing...");
      setTimeout(() => {
        toast.dismiss(toastID);
      }, 400);
    },
    onAfterPrint: () => {
      console.log("after printing...");
      toast.success("Printing Completed");
    },
    onPrintError: (err) => {
      toast.error(
        "Something went wrong, send screenshot of the console to examine"
      );
      console.log(err);
    },
    removeAfterPrint: true,
  });

  function handlePrint(ref) {
    if (ref === "table") handleOnPrint(null, () => tableRef.current);
    else if (ref === "affidavite")
      handleOnPrint(null, () => affidaviteRef.current);
    else if (ref === "poa") handleOnPrint(null, () => poaRef.current);
    else if (ref === "poaNew") handleOnPrint(null, () => poaNewRef.current);
    else if (ref === "affidaviteNew")
      handleOnPrint(null, () => affidaviteNewRef.current);
  }

  return (
    <>
      <div className="homepage">
        <div className="form-container">
          <p>Form</p>
          <Form />
          <p>Available Files</p>
        </div>

        {isMobile && (
          <div className="mobile-warning">
            <p>
              Printing is not possible on mobile yet. Try opening this website
              on a destop
            </p>
          </div>
        )}

        <div className="downloaded">
          <Saved setIndex={setIndex} handleOnPrint={handlePrint} />
        </div>
      </div>
      <div style={{ display: "none" }}>
        <Table ref={tableRef} index={index} />
      </div>
      <div style={{ display: "none" }}>
        <Affidavite ref={affidaviteRef} index={index} />
      </div>
      <div style={{ display: "none" }}>
        <POA ref={poaRef} index={index} />
      </div>
      <div style={{ display: "none" }}>
        <POAnew ref={poaNewRef} index={index} />
      </div>
      <div style={{ display: "none" }}>
        <AffidaviteNew ref={affidaviteNewRef} index={index} />
      </div>
    </>
  );
};

export default Home;
