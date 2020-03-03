const pluginRss = require("@11ty/eleventy-plugin-rss");
// const markdownIt = require("markdown-it");
const CleanCSS = require("clean-css");
const { DateTime } = require("luxon")
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addFilter("debug", obj => console.log(obj));
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.addFilter("parseInt", function(str) {
    return parseInt(str, 10);
  });
  eleventyConfig.addFilter("limit", function(arr, num) {
    return arr.slice(0, num);
  });
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  })
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.setTemplateFormats(["md", "njk", "html"]);
  eleventyConfig.addPassthroughCopy("assets");
  return {
    passthroughFileCopy: true
  };
};
