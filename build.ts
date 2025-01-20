import { toFile } from "qrcode";
import { minify } from "html-minifier";
import { readFileSync } from "node:fs";

const originalHTML = minify(readFileSync("index.html").toString(), {
  minifyJS: true,
  minifyCSS: true,
  html5: true,
  removeComments: true,
  collapseWhitespace: true,
});
console.log(originalHTML);

// TODO: Make this have cool compression
const properHTML = originalHTML;

toFile("qr.png", `data:text/html,${properHTML}`, {
  type: "png",
});
