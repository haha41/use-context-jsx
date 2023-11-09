import React from "react";
import useThemeStore from "../stores/useThemeStore";

export default function Header() {
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <header className={`header ${isDark ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
