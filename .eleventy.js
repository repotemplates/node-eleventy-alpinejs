const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")
const CleanCSS = require("clean-css");


module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin)

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/cdn.min.js': './js/alpine.js'
  })

  // Return your Object options:
  return {
    dir: {
      input: "src",
      // output: "_site"
      layouts: "_includes/layouts"
    },
  }
}