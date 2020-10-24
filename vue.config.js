module.exports = {
  publicPath: process.env.NODE_ENV === "production"
    ? "/famous/"
    : "/",

  css: {
    loaderOptions: {
      scss: {
        prependData: "@import \"~@/scss/_include.scss\";",
      },
    },
  },
};
