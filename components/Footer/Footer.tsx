"use client";

import { Flex, Select, Text } from "@radix-ui/themes";
import { useContext } from "react";
import { LanguageContext } from "../../utils/context/language";
import { languages } from "../helpers";

const languageLabels: Record<string, string> = {
  de: "Deutsch",
  en: "English",
};

export default function Footer() {
  const language = useContext(LanguageContext);

  const handleLanguageChange = (newLanguage: string) => {
    // Set language cookie with proper attributes
    document.cookie = `language=${newLanguage}; path=/; max-age=${
      60 * 60 * 24 * 365
    }; SameSite=Lax`;
    // Reload page to apply language change
    window.location.reload();
  };

  return (
    <Flex p={"4"} justify={"between"} align={"center"}>
      <Text size="2">© 2025</Text>
      <Select.Root value={language} onValueChange={handleLanguageChange}>
        <Select.Trigger aria-label="Select language" />
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

