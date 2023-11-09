import "./App.css";
import Page from "./components/Page";
import { atom, useAtom } from "jotai";

// 다크 모드 상태를 저장하는 Jotai atom 생성
const isDarkModeAtom = atom(false);

function App() {
  // Jotai의 useAtom 훅을 사용하여 상태 및 상태 업데이트 함수를 가져옴
  const [isDark, setIsDark] = useAtom(isDarkModeAtom);

  return (
    <Page isDark={isDark} toggleTheme={() => setIsDark((prev) => !prev)} />
  );
}

export default App;
