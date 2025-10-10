import { useLanguage } from "./shared/LanguageContext";
import "../assets/css/tech.css";

export default function Technologies() {
  const { txt } = useLanguage();

  return (
    <section className="technologiesSection relative z-1 flex justify-center py-16 text-[var(--text-primary)]">
      <h1 className="techTitle text-3xl">{txt.tech.title}</h1>
      <div className="mt-100"></div>
    </section>
  );
}
