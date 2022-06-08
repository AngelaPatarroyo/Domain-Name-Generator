/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello World");
};

var deter = ["the", "our", "my"];
var adj = ["lovely", "nice", "fit", "amazing"];
var noun = ["cat", "dog", "racoon"];
var extensions = [".net", ".com", ".ol", ".it", ".it", ".io", ".us"];

for (var i = 0; i < deter.length; i++) {
  for (var a = 0; a < adj.length; a++) {
    for (var b = 0; b < noun.length; b++) {
      for (var c = 0; c < extensions.length; c++) {
        document.writeln(deter[i] + adj[a] + noun[b] + extensions[c] + "<br/>");
      }
    }
  }
}
