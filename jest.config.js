export default {
  collectCoverageFrom: ['src/*.js', '!src/_*.js'],
  projects: [
    {
      displayName: "CommonJS",
      testEnvironment: "node",
      testMatch: ["**/test/*.test.cjs"],
    },
    {
      displayName: "ES Module",
      testEnvironment: "node",
      testMatch: ["**/test/*.test.js"],
    },
    {
      displayName: "Browser",
      testEnvironment: "jsdom",
      testMatch: ["**/test/*.test.browser.js", "**/test/*.test.browser.cjs"],
    },
  ],
};