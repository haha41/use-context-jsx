import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { useRecoilState } from "recoil";
import { darkModeState } from "../atoms/DarkModeState";

export default function Page() {
  const [isDark, setIsDark] = useRecoilState(darkModeState);

  const toggleTheme = () => {
    setIsDark((prevDark) => !prevDark);
  };

  return (
    <div className="page">
      <Header />
      <Content />
      <Footer toggleTheme={toggleTheme} />
    </div>
  );
}
