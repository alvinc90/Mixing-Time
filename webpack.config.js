const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname), //put in root of tree
    filename: "bundle.js"
  },
  devtool: 'source-map', //give me the line of code for errors 
  resolve: {
    extensions: [".js"] //makes importing easier, autofill 
  }

}