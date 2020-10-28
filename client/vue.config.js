module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://web-api:5000",
      },
    },
  },
};
