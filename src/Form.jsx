import { useState } from "react";
import illustrationLogo from "/illustration-sign-up-desktop.svg";
import listLogo from "/icon-list.svg";
import formStyles from "./Form.module.css";

export default function Form({ email, setEmail, onClick, hasError }) {
  const textBoxClassName = hasError ? "error-state" : "";
  const labelClassName = hasError ? "error-label" : "hide-label";

  return (
    <div className={formStyles.mainContainer}>
      <div className={formStyles.illustration}>
        <img src={illustrationLogo} />
      </div>
      <div className={formStyles.content}>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <p className={formStyles["list-item"]}>
          <img src={listLogo} />
          Product discovery and building what matters
        </p>
        <p className={formStyles["list-item"]}>
          <img src={listLogo} />
          Measuring to ensure updates are a success
        </p>
        <p className={formStyles["list-item"]}>
          <img src={listLogo} />
          And much more!
        </p>
      </div>
      <div className={formStyles.userArea}>
        <div className={formStyles.labelContainer}>
          <label htmlFor="emailText" className={formStyles["active-label"]}>
            Email address
          </label>
          <label htmlFor="emailText" className={formStyles[labelClassName]}>
            Valid email required
          </label>
        </div>
        <textarea
          className={formStyles[textBoxClassName]}
          name=""
          placeholder={"email@company.com"}
          id="emailText"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></textarea>
        <button onClick={onClick}>Subscribe to monthly newsletter</button>
      </div>
    </div>
  );
}
