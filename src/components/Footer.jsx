import React from "react";

export default function Footer({ isDark, toggleTheme }) {
  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={toggleTheme}>테마 변경</button>
    </footer>
  );
}
