// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Ute = require("../Ute.bs.js");
var React = require("react");

function getStyle(isLandscape, vhTrue) {
  if (isLandscape) {
    return {
            backgroundColor: "#fff0d0",
            height: Ute.getPercentVhTrueAsString(34.0, vhTrue),
            left: Ute.getPercentVhTrueAsString(25.0, vhTrue),
            padding: "0vh 0vh 0vh 0vh",
            position: "fixed",
            top: Ute.getPercentVhTrueAsString(22.0, vhTrue),
            width: Ute.getPercentVhTrueAsString(48.0, vhTrue),
            zIndex: "1",
            borderRadius: "5px"
          };
  } else {
    return {
            backgroundColor: "#fff0d0",
            bottom: "44vw",
            height: "34vw",
            left: "25vw",
            padding: "0vh 0vh 0vh 0vh",
            position: "fixed",
            width: "48vw",
            zIndex: "1",
            borderRadius: "5px"
          };
  }
}

function RegionBiddingHistory(Props) {
  var isLandscape = Props.isLandscape;
  var vhTrue = Props.vhTrue;
  var style = getStyle(isLandscape, vhTrue);
  return React.createElement("div", {
              style: style
            }, "Hello Bidding History");
}

var make = RegionBiddingHistory;

exports.getStyle = getStyle;
exports.make = make;
/* react Not a pure module */
