import { useLanguage } from "./shared/LanguageContext.tsx";
import { useState, useEffect, useRef } from "react";
import "../assets/css/softskillsScroller.css";

export function SoftskillsListItems() {
  const { txt } = useLanguage();
  const items = txt.softskills;

  return (
    <>
      {items.map((item, i) => (
        <li className="softskillsItem relative" key={i}>
          {item}
        </li>
      ))}
    </>
  );
}

export function SoftsKillsList() {
  const [itemsRepeatCount, setItemsRepeatCount] = useState(0);
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const total_w = 2 * window.innerWidth;

    if (ref.current) {
      const comp_w = ref.current.offsetWidth;

      if (comp_w > 0) setItemsRepeatCount(Math.ceil(total_w / comp_w));
    }
  }, []);

  return (
    <>
      <ul ref={ref} className="invisible h-0 pointer-none flex text-2xl w-max">
        <SoftskillsListItems />
      </ul>

      <ul className="softskillsList flex text-2xl pt-1 pb-0.5 w-max">
        {Array.from({ length: Math.max(itemsRepeatCount, 0) }).map((_, i) => (
          <SoftskillsListItems key={i} />
        ))}
      </ul>
    </>
  );
}

export default function SoftskillsScroller() {
  return (
    <section className="softskillsScroller bg-[var(--highlight-primary)] text-white w-full overflow-x-hidden">
      <SoftsKillsList />
    </section>
  );
}
