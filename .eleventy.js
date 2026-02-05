module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes" // This tells 11ty specifically where to find snippets
    }
  };
};