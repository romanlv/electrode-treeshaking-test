module.exports = {
  cache: {
    cacheId: "el-latest",
    runtimeCaching: [
      {
        handler: "fastest",
        urlPattern: "/$"
      }
    ],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "el-latest",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
