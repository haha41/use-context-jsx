import React from "react";
import { useRecoilValue } from "recoil";
import { darkModeState } from "../atoms/DarkModeState";

export default function Footer({ toggleTheme }) {
  const isDark = useRecoilValue(darkModeState);

  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={toggleTheme}>테마 변경</button>
    </footer>
  );
}
