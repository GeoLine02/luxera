"use client";

import { useTranslations } from "next-intl";

export default function TermsAndConditions() {
  const t = useTranslations("TermsAndConditionsPage");

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      {/* Page Title */}
      <h1
        className="text-3xl font-bold mb-2"
        style={{ color: "var(--color-dark-pink)" }}
      >
        {t("title")}
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        {t("company")} · {t("website")}
      </p>

      {/* Sections */}
      {Object.keys(t.raw("sections")).map((key) => {
        const section = t.raw(`sections.${key}`);
        return (
          <section
            key={key}
            className="mb-8 p-6 rounded-lg shadow-lg bg-gradient-to-r from-[var(--color-light-pink)] to-[var(--color-very-light-pink)]"
          >
            {/* Section title */}
            <h2
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--color-dark-pink)" }}
            >
              {section.title}
            </h2>

            {/* Paragraphs */}
            {section.paragraphs &&
              section.paragraphs.map((paragraph: string, idx: number) => (
                <p
                  key={idx}
                  className="mb-3 text-gray-700 leading-relaxed"
                  style={{ lineHeight: "1.7" }}
                >
                  {paragraph}
                </p>
              ))}

            {/* Lists */}
            {section.list && (
              <ul className="list-disc pl-5 space-y-2 mb-3 text-gray-700">
                {(section.list as string[]).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            {/* Footer */}
            {section.footer && (
              <p className="mt-3 font-medium">{section.footer}</p>
            )}

            {/* Note */}
            {section.note && (
              <p className="mt-3 text-sm text-gray-600">{section.note}</p>
            )}
          </section>
        );
      })}
    </div>
  );
}
