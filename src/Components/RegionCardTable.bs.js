// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Ute = require("../Ute.bs.js");
var React = require("react");

function getStyle(isLandscape, vhTrue) {
  if (isLandscape) {
    return {
            backgroundColor: "#003500",
            backgroundImage: "url(../assets/green_baize.jpg)",
            height: Ute.getPercentVhTrueAsString(100.0, vhTrue),
            left: "0",
            position: "fixed",
            top: "0",
            width: Ute.getPercentVhTrueAsString(100.0, vhTrue),
            backgroundSize: "cover"
          };
  } else {
    return {
            backgroundColor: "#003500",
            backgroundImage: "url(../assets/green_baize.jpg)",
            bottom: "0",
            height: "100vw",
            left: "0",
            position: "fixed",
            width: "100vw",
            backgroundSize: "cover"
          };
  }
}

function RegionCardTable(Props) {
  var isLandscape = Props.isLandscape;
  var vhTrue = Props.vhTrue;
  var style = getStyle(isLandscape, vhTrue);
  return React.createElement("div", {
              style: style
            }, null);
}

var make = RegionCardTable;

exports.getStyle = getStyle;
exports.make = make;
/* react Not a pure module */
