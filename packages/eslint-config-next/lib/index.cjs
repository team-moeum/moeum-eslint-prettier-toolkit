module.exports = {
  env: { browser: true, es2021: true },
  extends: ["next/core-web-vitals", "@moeum/eslint-config-react"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
