/// <reference types="vitest" />
import { defineConfig } from "vite"; // Ensure defineConfig is imported
import react from "@vitejs/plugin-react"; // React plugin for Vite

export default defineConfig({
  root: "./", // Set the root to the current directory
  publicDir: "frontend", // Ensure publicDir is pointing to the frontend directory
  plugins: [react()],
  server: {
    port: 5173, // Port for Vite server
  },
  test: {
    globals: true, // Allow global variables like "expect" and "test"
    environment: "jsdom", // Use jsdom for React testing
    setupFiles: "./src/__test__/setup.js", // Setup file for jest-dom
    include: ["src/__test__/*.test.jsx"], // Include all test files in the __test__ folder
  },
});
