const lucideIcons = require("@grimlink/eleventy-plugin-lucide-icons");
const eleventyGoogleFonts = require("eleventy-google-fonts");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPlugin(eleventyGoogleFonts);
    eleventyConfig.addPlugin(lucideIcons);
    return {
        dir: {
            input: "src",
            output: "public",
        }
    }
}