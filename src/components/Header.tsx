import brand from "../assets/brand/brand_full_blue.png";
import { useState } from "react";
import {
  Translate,
  SunFill,
  MoonStarsFill,
  List,
  XLg,
} from "react-bootstrap-icons";
import "../assets/css/header.css";

export default function Header() {
  const root: HTMLElement = document.querySelector("#root")!;
  const [isDark, setIsDark] = useState(true);

  const toggleDark = () => {
    root.classList.toggle("dark");
    setIsDark(isDark ? false : true);
  };

  const [isNavbarSupportedContentShown, setIsNavbarSupportedContentShown] =
    useState(false);

  const toggleNavbarSupportedContent = () => {
    if (isNavbarSupportedContentShown) setIsNavbarSupportedContentShown(false);
    else setIsNavbarSupportedContentShown(true);
  };

  return (
    <>
      <header className="grid grid-cols-12 sticky top-0 py-2">
        <nav className="grid grid-cols-12 col-span-10 col-start-2 items-center">
          <a href="#" className="col-span-4 sm:col-span-3 md:col-span-2">
            <img src={brand} alt="brand" className="w-full lg:w-[75%]" />
          </a>
          <div className="col-span-8 sm:col-span-9 md:col-span-10 flex justify-end items-center gap-3">
            <button
              onClick={toggleDark}
              className="text-[var(--text-primary)] text-xl hover:text-amber-300 cursor-pointer transition-colors duration-200"
            >
              {isDark ? <SunFill /> : <MoonStarsFill />}
            </button>
            <button className="translateBtn flex gap-1 border-1 py-1 px-1.5 rounded-md items-center text-[var(--text-primary)] hover:text-[var(--bg-primary)] hover:bg-[var(--text-primary)] transition-colors duration-200 cursor-pointer">
              <Translate />
              <span className="hidden md:block">English</span>
            </button>

            <button
              onClick={toggleNavbarSupportedContent}
              className="toggleNavBtn text-2xl text-[var(--text-primary)] md:hidden"
            >
              <List />
            </button>

            <div
              className={`navbarSuppendedContent absolute top-0 h-[100vh] border-2 border-[var(--highlight-primary)] ${
                isNavbarSupportedContentShown ? "left-0" : "left-[-100%]"
              } w-60 z-2 md:w-fit md:static md:border-none md:h-fit bg-[var(--bg-primary)] transition-all duration-200`}
            >
              <button
                onClick={toggleNavbarSupportedContent}
                className="closeBtn text-xl absolute top-3 right-3 text-[var(--text-primary)] md:hidden"
              >
                <XLg />
              </button>
              <ul className="flex flex-col gap-3 pt-12 items-center md:pt-0 md:flex-row text-[var(--text-primary)]">
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
              </ul>
            </div>
            <div
              onClick={toggleNavbarSupportedContent}
              className={`dimmer absolute top-0 left-0 h-[100vh] w-full z-1 bg-black opacity-75 ${
                isNavbarSupportedContentShown ? "" : "hidden"
              } md:hidden`}
            ></div>
          </div>
        </nav>
      </header>
    </>
  );
}
