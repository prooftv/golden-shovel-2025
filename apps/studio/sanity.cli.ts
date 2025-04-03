import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "7nzu9cpw",  // Your actual project ID
    dataset: "production",  // Your actual dataset
  },
  // Explicitly set the hostname (without additional suffixes)
  studioHost: "goldenshovel2025",  
  autoUpdates: false,
});
