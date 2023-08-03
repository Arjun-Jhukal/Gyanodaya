import { useContext, useEffect, useRef, useState } from "react";
import InputField from "./InputField";
import { AiOutlineClose } from "react-icons/ai";

const Form = () => {
  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const [value, setValue] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errorStatus, setErrorStatus] = useState({
    allEmpty: false,
    invalidEmail: false,
    invalidNumber: false,
    success: false,
  });

  const handleEnquiryForm = (e) => {
    e.preventDefault();

    const emailTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneTest = /[a-zA-Z]/;

    setErrorStatus({
      allEmpty: false,
      invalidEmail: false,
      invalidNumber: false,
      success: false,
    });

    if (value.name.trim() === "" || value.phone.trim() === "" || value.email.trim() === "") {
      setErrorStatus({
        ...errorStatus,
        allEmpty: true,
        success: false,
      });
    } else if (!emailTest.test(value.email.trim())) {
      setErrorStatus({
        ...errorStatus,
        invalidEmail: true,
      });
    } else if (phoneTest.test(value.phone.trim())) {
      setErrorStatus({
        ...errorStatus,
        invalidNumber: true,
      });
    } else {
      setErrorStatus({
        ...errorStatus,
        invalidEmail: false,
        allEmpty: false,
        invalidNumber: false,
        success: true,
      });
      setValue({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div className="enquiry">
      <form className="enquiry__form" onSubmit={(e) => handleEnquiryForm(e)}>
        <div className="row">
          <div className=" col-12">
            <InputField
              fieldType={"input"}
              inputType={"text"}
              label={"Full Name"}
              onChange={(e) => setValue({ ...value, name: e.target.value })}
              value={value.name}
              placeholder={"Eg. Arjun Jhukal"}
            />
          </div>
          <div className="col-md-6 col-12">
            <InputField
              fieldType={"input"}
              inputType={"email"}
              label={"Email Address"}
              onChange={(e) => setValue({ ...value, email: e.target.value })}
              value={value.email}
              placeholder={"example@gmail.com"}
            />
          </div>
          <div className="col-md-6 col-12">
            <InputField
              fieldType={"input"}
              inputType={"Phone"}
              label={"Phone Number"}
              onChange={(e) => setValue({ ...value, phone: e.target.value })}
              value={value.phone}
              placeholder={"98XXXXXXXX"}
            />
          </div>

          <div className="col-12">
            <InputField
              fieldType={"textarea"}
              rows={6}
              cols={5}
              label={"Subject"}
              onChange={(e) => setValue({ ...value, message: e.target.value })}
              value={value.message}
            />
          </div>
          <div className="col-12">
            <InputField fieldType={"input"} inputType={"submit"} value={"Submit"} />
          </div>
          <div className="col-12">
            <div className={!errorStatus.success ? "error__message alert alert-warning" : "error__message alert alert-success"}>
              <h5 className="text-center">Error Messages Will be shown here</h5>
              <p className={errorStatus.allEmpty ? "d-block" : "d-none"}>Input Fields Cannot be Empty</p>
              <p className={errorStatus.invalidEmail ? "d-block" : "d-none"}>Please Check Your Email</p>
              <p className={errorStatus.invalidNumber ? "d-block" : "d-none"}>Please Check Your Phone Number</p>
              <p className={errorStatus.success ? "d-block success" : "d-none"}>Response Submitted Successfully</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
