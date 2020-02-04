const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addFilter("debug", obj => console.log(obj));
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.setTemplateFormats(["md", "njk", "html"]);
  eleventyConfig.addPassthroughCopy("assets");
  return {
    passthroughFileCopy: true
  };
};
