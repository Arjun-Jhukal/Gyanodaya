import { createContext } from "react";

export const NavContext = createContext({
  navStatus: false,
  data: null,
});
