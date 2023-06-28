import { createContext } from "react";

export const FormContext = createContext({
  status: false,
  showForm: () => {},
  hideForm: () => {},
});
