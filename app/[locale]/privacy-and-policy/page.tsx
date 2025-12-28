"use client";

import { useTranslations } from "next-intl";

export default function PrivacyAndPolicy() {
  const t = useTranslations("PrivacyAndPolicyPage");

  return (
    <div
      className="max-w-4xl mx-auto px-6 py-12 text-dark-brown"
      style={{ color: "var(--color-dark-brown)" }}
    >
      {/* Page Title */}
      <h1
        className="text-4xl font-bold mb-4"
        style={{ color: "var(--color-dark-pink)" }}
      >
        {t("title")}
      </h1>

      {/* Company info */}
      <p
        className="text-sm mb-12"
        style={{ color: "var(--color-medium-gray)" }}
      >
        {t("company.name")} · {t("company.website")}
      </p>

      {/* Sections */}
      {Object.keys(t.raw("sections")).map((key) => {
        const section = t.raw(`sections.${key}`);

        const paragraphs = (section.paragraphs as string[]) || [];
        const list = (section.list as string[]) || [];
        const subList = (section.subList as string[]) || [];
        const items = section.items
          ? (Object.values(section.items) as string[])
          : [];

        return (
          <section
            key={key}
            className="mb-12 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            style={{ backgroundColor: "var(--color-very-light-pink)" }}
          >
            {/* Section title */}
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: "var(--color-dark-pink)" }}
            >
              {section.title}
            </h2>

            {/* Paragraphs */}
            {paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="mb-3 leading-relaxed"
                style={{ color: "var(--color-dark-gray)" }}
              >
                {para}
              </p>
            ))}

            {/* Description */}
            {section.description && (
              <p
                className="mb-3 italic"
                style={{ color: "var(--color-medium-brown)" }}
              >
                {section.description}
              </p>
            )}

            {/* List */}
            {list.length > 0 && (
              <ul
                className="list-disc pl-6 mb-4 space-y-1"
                style={{ color: "var(--color-dark-brown)" }}
              >
                {list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            {/* Sublist with title */}
            {section.subListTitle && (
              <p
                className="mb-2 font-medium"
                style={{ color: "var(--color-medium-pink)" }}
              >
                {section.subListTitle}
              </p>
            )}
            {subList.length > 0 && (
              <ul
                className="list-disc pl-8 mb-4 space-y-1"
                style={{ color: "var(--color-dark-gray)" }}
              >
                {subList.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            {/* Items */}
            {items.map((item, idx) => (
              <p
                key={idx}
                className="mb-2"
                style={{ color: "var(--color-dark-gray)" }}
              >
                {item}
              </p>
            ))}

            {/* Footer */}
            {section.footer && (
              <p
                className="mt-4 font-semibold"
                style={{ color: "var(--color-dark-pink)" }}
              >
                {section.footer}
              </p>
            )}

            {/* Note */}
            {section.note && (
              <p
                className="mt-3 text-sm italic"
                style={{ color: "var(--color-medium-gray)" }}
              >
                {section.note}
              </p>
            )}
          </section>
        );
      })}
    </div>
  );
}
