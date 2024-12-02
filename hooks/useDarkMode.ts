import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const isDark = localStorage.getItem("isDark");
    const isDarkParse = isDark ? JSON.parse(isDark) : false;
    if (!isDark) {
      const isSystemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (isSystemDark) {
        document.body.classList.add("theme-dark");
        localStorage.setItem("isDark", "true");
        setDarkMode(true);
      } else {
        document.body.classList.remove("theme-dark");
        localStorage.setItem("isDark", "false");

        setDarkMode(false);
      }

      return;
    }
    if (!isDarkParse) {
      document.body.classList.remove("theme-dark");
      localStorage.setItem("isDark", "false");
      setDarkMode(false);
      return;
    }
    document.body.classList.add("theme-dark");
    setDarkMode(true);
  }, []);
  const onClickDarkToggle = () => {
    if (darkMode) {
      localStorage.setItem("isDark", "false");
      document.body.classList.remove("theme-dark");
      setDarkMode(false);
    } else {
      localStorage.setItem("isDark", "true");
      document.body.classList.add("theme-dark");
      setDarkMode(true);
    }
  };

  return { darkMode, onClickDarkToggle };
};
