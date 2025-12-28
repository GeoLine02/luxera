"use client";

import { useTranslations } from "next-intl";

export default function ReturnAndCancellation() {
  const t = useTranslations("ReturnAndCancellationPolicyPage");

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-dark-gray">
      <h1 className="text-3xl font-bold mb-2 text-dark-pink">{t("title")}</h1>
      <p className="text-sm text-medium-gray mb-8">
        {t("company")} · {t("website")}
      </p>

      {Object.keys(t.raw("sections")).map((key) => {
        const section = t.raw(`sections.${key}`);
        return (
          <section
            key={key}
            className="mb-8 p-6 rounded-md bg-very-light-pink shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-3 text-dark-pink">
              {section.title}
            </h2>

            {section.paragraphs &&
              (section.paragraphs as string[]).map((p, idx) => (
                <p key={idx} className="mb-3">
                  {p}
                </p>
              ))}

            {section.list && (
              <ul className="list-disc pl-6 space-y-1 mb-3">
                {(section.list as string[]).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            {section.paragraphs2 &&
              (section.paragraphs2 as string[]).map((p, idx) => (
                <p key={idx} className="mb-2">
                  {p}
                </p>
              ))}
          </section>
        );
      })}
    </div>
  );
}
