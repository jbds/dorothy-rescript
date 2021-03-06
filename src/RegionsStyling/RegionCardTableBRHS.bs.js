// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Ute = require("../Modules/Ute.bs.js");
var React = require("react");

function getStyle(isLandscape, vhTrue) {
  if (isLandscape) {
    return {
            backgroundColor: "#fff0d0",
            bottom: Ute.getPercentVhTrueAsString(0.0, vhTrue),
            height: Ute.getPercentVhTrueAsString(5.0, vhTrue),
            left: Ute.getPercentVhTrueAsString(95.0, vhTrue),
            position: "fixed",
            width: Ute.getPercentVhTrueAsString(5.0, vhTrue),
            zIndex: "1",
            borderRadius: Ute.getPercentVhTrueAsString(2.5, vhTrue)
          };
  } else {
    return {
            backgroundColor: "#fff0d0",
            bottom: "0vw",
            height: "5vw",
            position: "fixed",
            right: "0vw",
            width: "5vw",
            zIndex: "1",
            borderRadius: "2.5vw"
          };
  }
}

function RegionCardTableBRHS(Props) {
  var isLandscape = Props.isLandscape;
  var vhTrue = Props.vhTrue;
  var style = getStyle(isLandscape, vhTrue);
  return React.createElement("div", {
              style: style
            }, null);
}

var make = RegionCardTableBRHS;

exports.getStyle = getStyle;
exports.make = make;
/* react Not a pure module */
