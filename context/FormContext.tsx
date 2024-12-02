import { createContext, Dispatch, SetStateAction } from "react";

export const FormContext = createContext<{
  isOpen: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: undefined,
});
