import { defineCliConfig } from "sanity/cli";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET;
const host = process.env.HOST_NAME;

export default defineCliConfig({
  api: {
    projectId: "7nzu9cpw",
    dataset: "production",
  },
  studioHost:
    host && host !== "main"
      ? `${host}-turbo-start-sanity`
      : "turbo-start-sanity",
  autoUpdates: false,
});
