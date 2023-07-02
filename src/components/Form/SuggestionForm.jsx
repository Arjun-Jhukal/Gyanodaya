import { useEffect, useRef, useState } from "react";
import InputField from "./InputField";

const SuggestionForm = ({ state, onClick }) => {
  const [value, setValue] = useState();

  const handleInputChange = () => {};

  const inputref = useRef(null);

  useEffect(() => {
    inputref.current.focus();
  });

  return (
    <div className={state ? "suggestion active" : "suggestion"}>
      <form className="suggestion__form">
        <button type="button" className="btn__back" onClick={onClick}>
          Cancel
        </button>
        <InputField label={"Name"} fieldType={"input"} inputType={"text"} value={value} onChange={handleInputChange} reference={inputref} />
        <InputField label={"Email"} fieldType={"input"} inputType={"email"} value={value} onChange={handleInputChange} reference={inputref} />
        <InputField label={"Suggestion"} fieldType={"textarea"} rows={8} value={value} onChange={handleInputChange} />
        <InputField fieldType={"input"} inputType={"submit"} value={"Submit"} />
      </form>
    </div>
  );
};

export default SuggestionForm;
