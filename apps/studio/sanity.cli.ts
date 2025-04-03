import { defineCliConfig } from "sanity/cli";

const projectId = "7nzu9cpw";  // Replace with your actual project ID
const dataset = "production";   // Replace with your actual dataset (e.g., "development")
const host = "goldenshovel2025.vercel.app";



export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: dataset,
  },
  studioHost:
    host && host !== "main"
      ? `${host}-turbo-start-sanity`
      : "turbo-start-sanity",
  autoUpdates: false,
});
