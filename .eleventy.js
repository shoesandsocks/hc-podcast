const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter("cdataEncode", string => {
    const md = new markdownIt();
    const info = md.render(string).trim();
    return `<![CDATA[${info}]]>`;
  })

  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.setTemplateFormats(["md", "njk", "html"]);

  return {
    passthroughFileCopy: true
  };
};
