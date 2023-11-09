import React from "react";
import { useRecoilValue } from "recoil";
import { darkModeState } from "../atoms/DarkModeState";

export default function Header() {
  const isDark = useRecoilValue(darkModeState);

  return (
    <header className={`header ${isDark ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
