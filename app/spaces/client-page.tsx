"use client";
import Navigation from "../../components/Navigation/Navigation";
import List from "../../components/List/List";
import { LanguageContext } from "../../utils/context/language";

interface SpaceEdge {
  node?: {
    _sys: {
      filename: string;
      breadcrumbs: string[];
    };
    name?: string;
    image?: string;
    alt?: string;
    aspectRatio?: string;
  };
}

interface ClientPageProps {
  props: SpaceEdge[] | undefined;
  navigation?: any;
  language?: string;
}

export default function ClientPage({
  props,
  navigation,
  language,
}: ClientPageProps) {
  const currentLang = language || "en";

  return (
    <LanguageContext.Provider value={currentLang}>
      <Navigation {...navigation?.[currentLang]} />
      <List items={props} baseUrl="/spaces" emptyMessage="No spaces found" />
    </LanguageContext.Provider>
  );
}
