const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {
  // Markdown processor
  const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");

  // Ignore content directory (these are loaded as data, not pages)
  eleventyConfig.ignores.add("src/content/**");

  // Create dispatches collection
  eleventyConfig.addCollection("dispatches", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/dispatches/*.md");
  });

  // Load content markdown files as global data
  eleventyConfig.addGlobalData("siteContent", () => {
    const contentDir = path.join(__dirname, 'src', 'content');
    const content = {};

    // Helper to read markdown file and convert to HTML
    const readMarkdown = (filePath) => {
      try {
        const raw = fs.readFileSync(filePath, 'utf-8');
        return md.render(raw);
      } catch (e) {
        return '';
      }
    };

    // Load home content
    content.home = {
      intro: readMarkdown(path.join(contentDir, 'home', 'intro.md')),
      guidance: readMarkdown(path.join(contentDir, 'home', 'guidance.md'))
    };

    // Load work content
    content.work = {
      intro: readMarkdown(path.join(contentDir, 'work', 'intro.md'))
    };

    // Load projects content
    content.projects = {
      intro: readMarkdown(path.join(contentDir, 'projects', 'intro.md')),
      queuequest: readMarkdown(path.join(contentDir, 'projects', 'queuequest.md')),
      layoverLauncher: readMarkdown(path.join(contentDir, 'projects', 'layover-launcher.md'))
    };

    // Load dispatches content
    content.dispatches = {
      intro: readMarkdown(path.join(contentDir, 'dispatches', 'intro.md'))
    };

    return content;
  });

  // Watch for content changes during development
  eleventyConfig.addWatchTarget("./src/content/");

  // Date formatting filter
  eleventyConfig.addFilter("dateFormat", (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Short date filter
  eleventyConfig.addFilter("dateShort", (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
