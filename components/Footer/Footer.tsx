"use client";

import { Flex, Select, Text } from "@radix-ui/themes";
import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../../utils/context/language";
import { languages } from "../helpers";

const languageLabels: Record<string, string> = {
  de: "Deutsch",
  en: "English",
};

export default function Footer() {
  const language = useContext(LanguageContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (newLanguage: string) => {
    // Set language cookie with proper attributes
    document.cookie = `language=${newLanguage}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    // Reload page to apply language change
    window.location.reload();
  };

  if (!mounted) return null;

  return (
    <Flex
      p={"4"}
      justify={"between"}
      align={"center"}
      style={{
        borderTop: "1px solid var(--accent-8)",
        marginTop: "auto",
      }}
    >
      <Text size="2">© 2025</Text>
      <Select.Root value={language} onValueChange={handleLanguageChange}>
        <Select.Trigger />
        <Select.Content>
          {languages.map((lang) => (
            <Select.Item key={lang} value={lang}>
              {languageLabels[lang]}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </Flex>
  );
}

