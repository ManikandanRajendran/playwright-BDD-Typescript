module.exports = {
  default: {
    tags: process.env.npm_config_TAGS || "",
    paths: ["tests/features/**/*.feature"],
    require: ["tests/steps/**/*.ts", "./hooks/hooks.ts"],
    formatOptions: { snippetInterface: "async-await" },
    requireModule: ["ts-node/register"],
    format: [
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "rerun:@rerun.txt",
    ],
    parallel: 1,
    retry: 0,
  },
  rerun: {
    require: ["tests/steps/**/*.ts", "./hooks/hooks.ts"],
    formatOptions: { snippetInterface: "async-await" },
    requireModule: ["ts-node/register"],
    format: [
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "rerun:@rerun.txt",
    ],
    parallel: 2,
  },
};
