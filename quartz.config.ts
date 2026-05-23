import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "78ykjs Knowledge Base",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "zh-CN",
    baseUrl: "78ykjs.github.io/78ykjs",
    ignorePatterns: ["private", ".obsidian", ".trash"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Serif SC",
        body: "Noto Sans SC",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f5",
          lightgray: "#e8e4dc",
          gray: "#b8b4aa",
          darkgray: "#4a4540",
          dark: "#2c2824",
          secondary: "#5c6e4a",
          tertiary: "#8fa67a",
          highlight: "rgba(92, 110, 74, 0.1)",
        },
        darkMode: {
          light: "#1a1a18",
          lightgray: "#2a2a26",
          gray: "#5a5a55",
          darkgray: "#c8c4ba",
          dark: "#e8e4dc",
          secondary: "#8fa67a",
          tertiary: "#6a8055",
          highlight: "rgba(143, 166, 122, 0.1)",
        },
      },
    },
  },
  plugins: {
    filters: [Plugin.RemoveDrafts()],
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
