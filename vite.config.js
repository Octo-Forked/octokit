import { defineConfig } from "vite";

export default defineConfig({
  test: {
    coverage: {
      include: ["packages/**/src/**/*.ts"],
      reporter: ["json"],
      thresholds: {
        100: true,
      },
    },
    projects: ["packages/*"],
  },
});
