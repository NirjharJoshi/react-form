import React from "react";
import { useState } from "react";
import Details from "./Details";

const Info = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowDetails((prevState) => !prevState)}
        className="btn btn-warning"
      >
        <i class="fa-solid fa-circle-info fs-2"></i>
      </button>
      {showDetails && <Details />}
    </>
  );
};

export default Info;
