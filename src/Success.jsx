import successLogo from "/icon-success.svg";
import successStyles from "./Success.module.css";

export default function Success({ email, onClick }) {
  return (
    <div className={successStyles.mainContainer}>
      <div className="">
        <img src={successLogo} />
      </div>
      <div className="">
        <h1>Thanks for subscribing!</h1>
      </div>
      <div className="">
        <p>
          A confirmation email has been sent to
          <span> {email}</span>. Please open it and click the button inside to
          confirm your subscription.
        </p>
      </div>
      <div className={successStyles["button-item"]}>
        <button onClick={onClick}>Dismiss message</button>
      </div>
    </div>
  );
}
