import React from "react";

const Details = () => {
  return (
    <div className="m-2">
      <div>
        <h5>Technologies Used: </h5>
      </div>
      <div>
        <span className="badge rounded-pill bg-primary mx-1">
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            REACTJS
          </a>
        </span>
        <span className="badge rounded-pill bg-primary mx-1">
          <a
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            BOOTSTRAP
          </a>
        </span>
        <span className="badge rounded-pill bg-primary mx-1">
          <a
            href="https://formik.org/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            FORMIK
          </a>
        </span>
        <span className="badge rounded-pill bg-primary mx-1">
          <a
            href="https://www.npmjs.com/package/yup"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            YUP
          </a>
        </span>
      </div>
    </div>
  );
};

export default Details;
