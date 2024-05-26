import React from "react";
import "./style.css";

export const Affidavite = React.forwardRef(({ name }, ref) => {
  return (
    <div className="affidavite" ref={ref}>
      <h2> THE TRADEMARK ACT,1999</h2>
      <h2> AFFIDAVIT</h2>
      <p>
        I {name} DO HEREBY SOLEMNLY AND SINCERELY DECLARE AND STATE AS records
        of my concern to which I have full access and which I believe to be true
        and partly these are my submissions. AND STATE AS FOLLOWS:- 1. I am the
        proprietor of the applicant’s concern whose principle place of business
        is at C/O siyani nagar-2,old
        subhashnagar,end,kothariyaroad,rajkot,rajkot,bhaktinagar,gujarat-360002
        (herein after referred to as my concern). I am authorized and competent
        to make this affidavit. 2. The statement made herein under are partly
        based on my personal knowledge, partly information derived by me from
        the records of my concern to which I have full access and which I
        believe to be true and partly these are my submissions.
      </p>
    </div>
  );
});

export default Affidavite;
