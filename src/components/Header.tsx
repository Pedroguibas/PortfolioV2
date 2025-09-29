import logo from "../assets/logo/logo_full_blue.png";
import { useState } from "react";
import { Translate, SunFill, MoonFill } from "react-bootstrap-icons";
import "../assets/css/header.css";

export default function Header() {
  const root: HTMLElement = document.querySelector("#root")!;
  const [isDark, setIsDark] = useState(true);

  const toggleDark = () => {
    root.classList.toggle("dark");
    setIsDark(isDark ? false : true);
  };

  return (
    <>
      <header className="grid grid-cols-12 sticky py-5">
        <nav className="grid grid-cols-12 col-span-10 col-start-2 items-center">
          <div className="col-span-4 sm:col-span-3 md:col-span-2">
            <img src={logo} alt="logo" className="w-full" />
          </div>
          <div className="col-span-8 sm:col-span-9 md:col-span-10 flex justify-end gap-3">
            <button onClick={toggleDark} className="text-[var(--text-primary)] text-xl hover:text-amber-300 cursor-pointer transition-colors duration-200">
              {isDark ? <SunFill /> : <MoonFill />}
            </button>
            <button className="translateBtn flex gap-1 border-1 py-1 px-1.5 rounded-md items-center text-[var(--text-primary)] hover:text-[var(--bg-primary)] hover:bg-[var(--highlight-primary)] transition-colors duration-200 cursor-pointer">
              <Translate />
              <span className="hidden md:block">English</span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
