import { useState } from "react";
import validator from "validator";
import "./App.css";
import Form from "./Form";
import Success from "./Success";

function App() {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);

  function handleSubscribe() {
    if (validator.isEmail(email)) {
      setIsSuccessful(true);
      setHasError(false);
    } else {
      setHasError(true);
    }
  }

  function handleDismiss() {
    setIsSuccessful(false);
    setEmailValue("");
  }

  function setEmailValue(value) {
    setEmail(value);
  }

  return (
    <>
      {isSuccessful ? (
        <Success email={email} onClick={handleDismiss} />
      ) : (
        <Form
          email={email}
          setEmail={setEmailValue}
          onClick={handleSubscribe}
          hasError={hasError}
        />
      )}
    </>
  );
}

export default App;
