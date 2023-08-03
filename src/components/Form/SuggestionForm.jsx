import { useEffect, useRef, useState } from "react";
import InputField from "./InputField";

const SuggestionForm = ({ state, onClick }) => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const inputref = useRef(null);

  // useEffect(() => {
  //   inputref.current.focus();
  // });

  const [errorStatus, setErrorStatus] = useState({
    allEmpty: false,
    invalidEmail: false,
    success: false,
  });

  const handleEnquiryForm = (e) => {
    e.preventDefault();

    const emailTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (value.name.trim() === "" || value.email.trim() === "") {
      setErrorStatus({
        ...errorStatus,
        allEmpty: true,
        success: false,
      });
    } else if (!emailTest.test(value.email)) {
      setErrorStatus({
        ...errorStatus,
        invalidEmail: true,
      });
    } else {
      setErrorStatus({
        ...errorStatus,
        invalidEmail: false,
        allEmpty: false,
        success: true,
      });
      setValue({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className={state ? "suggestion active" : "suggestion"}>
      <form className="suggestion__form" onSubmit={handleEnquiryForm}>
        <button type="button" className="btn__back" onClick={onClick}>
          Cancel
        </button>
        <InputField
          label={"Name"}
          fieldType={"input"}
          inputType={"text"}
          value={value.name}
          onChange={(e) => setValue({ ...value, name: e.target.value })}
        />
        <InputField
          label={"Email"}
          fieldType={"input"}
          inputType={"email"}
          value={value.email}
          onChange={(e) => setValue({ ...value, email: e.target.value })}
        />
        <InputField
          label={"Suggestion"}
          fieldType={"textarea"}
          rows={5}
          value={value.message}
          onChange={(e) => setValue({ ...value, message: e.target.value })}
        />
        <InputField fieldType={"input"} inputType={"submit"} value={"Submit"} />

        <div className={!errorStatus.success ? "error__message alert alert-warning" : "error__message alert alert-success"}>
          <h5 className="text-center">Error Messages Will be shown here</h5>
          <p className={errorStatus.allEmpty ? "d-block" : "d-none"}>Input Fields Cannot be Empty</p>
          <p className={errorStatus.invalidEmail ? "d-block" : "d-none"}>Please Check Your Email</p>
          <p className={errorStatus.invalidNumber ? "d-block" : "d-none"}>Please Check Your Phone Number</p>
          <p className={errorStatus.success ? "d-block success" : "d-none"}>Response Submitted Successfully</p>
        </div>
      </form>
    </div>
  );
};

export default SuggestionForm;
