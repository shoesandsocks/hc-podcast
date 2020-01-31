const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

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
