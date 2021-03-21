// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var App = require("./App.bs.js");
var React = require("react");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var ReactDom = require("react-dom");

document.title = "Dorothy v0.01";

function reRenderApp(isLandscape, vhTrue) {
  var root = document.querySelector("#root");
  if (root == null) {
    console.log("Cannot find element with id='root'");
  } else {
    ReactDom.render(React.createElement(App.make, {
              isLandscape: isLandscape,
              vhTrue: vhTrue
            }), root);
  }
  
}

function renderAllOnLoadOrResize(param) {
  console.log("fn renderAllOnLoadOrResize..");
  var isLandscape = Caml_obj.caml_lessthan(window.innerHeight, window.innerWidth);
  var vhTrue = window.innerHeight * 0.01;
  return reRenderApp(isLandscape, vhTrue);
}

window.addEventListener("resize", (function (_event) {
        console.log("event window resize..");
        return renderAllOnLoadOrResize(undefined);
      }));

window.addEventListener("load", (function (_event) {
        console.log("event window load..");
        return renderAllOnLoadOrResize(undefined);
      }));

exports.reRenderApp = reRenderApp;
exports.renderAllOnLoadOrResize = renderAllOnLoadOrResize;
/*  Not a pure module */
