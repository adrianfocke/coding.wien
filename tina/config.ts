import { defineConfig } from "tinacms";
import page from "./collections/page";
import navigation from "./collections/navigation";
import space from "./collections/space";
import event from "./collections/event";
import config from "./collections/config";
import footer from "./collections/footer";

const collections = [config, page, navigation, space, event, footer];

export default defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF,
  token: process.env.TINA_TOKEN,
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  schema: {
    collections,
  },
  client: {
    referenceDepth: 1,
  },
  cmsCallback: (cms) => {
    cms.flags.set("branch-switcher", true);
    return cms;
  },
});
