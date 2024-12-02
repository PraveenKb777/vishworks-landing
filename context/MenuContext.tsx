import { createContext, Dispatch, SetStateAction } from "react";

export const MenuContext = createContext<{
  isOpen: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
  onClickDarkToggle: () => void;
}>({
  isOpen: false,
  setIsOpen: undefined,
  darkMode: false,
  onClickDarkToggle() {},
});
