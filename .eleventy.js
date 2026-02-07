module.exports = function(eleventyConfig) {
// This takes files from src/css/modules and puts them in _site/css/
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/downloads"); // Add this line

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes", // This tells 11ty specifically where to find snippets
      data: "_data"        // ← This should find src/_data
    }
  };
};