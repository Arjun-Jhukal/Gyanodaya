import { useContext, useEffect, useRef, useState } from "react";
import InputField from "./InputField";
import { AiOutlineClose } from "react-icons/ai";

const Form = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const [value, setValue] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = () => {};
  return (
    <div className="enquiry">
      <form className="enquiry__form">
        <div className="row">
          <div className=" col-12">
            <InputField
              fieldType={"input"}
              inputType={"text"}
              label={"Full Name"}
              reference={inputRef}
              onChange={(e) => handleInputChange(e)}
              value={value.name}
              placeholder={"Eg. Arjun Jhukal"}
            />
          </div>
          <div className="col-md-6 col-12">
            <InputField
              fieldType={"input"}
              inputType={"email"}
              label={"Email Address"}
              onChange={(e) => handleInputChange(e)}
              value={value.email}
              placeholder={"example@gmail.com"}
            />
          </div>
          <div className="col-md-6 col-12">
            <InputField
              fieldType={"input"}
              inputType={"Phone"}
              label={"Phone Number"}
              onChange={(e) => handleInputChange(e)}
              value={value.name}
              placeholder={"98XXXXXXXX"}
            />
          </div>

          <div className="col-12">
            <InputField fieldType={"textarea"} rows={6} cols={5} label={"Subject"} onChange={(e) => handleInputChange(e)} value={value.name} />
          </div>
          <div className="col-12">
            <InputField fieldType={"input"} inputType={"submit"} value={"Submit"} />
          </div>

          <button type="button" className="close__btn">
            <AiOutlineClose size={28} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
