// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");

function ButtonStd(Props) {
  var isLandscape = Props.isLandscape;
  var label = Props.label;
  var colorOpt = Props.color;
  var color = colorOpt !== undefined ? colorOpt : "#26653B";
  return React.createElement(React.Fragment, undefined, React.createElement("button", {
                  style: {
                    border: "1px solid #26653B",
                    color: color,
                    fontFamily: "Trebuchet MS",
                    fontSize: isLandscape ? "1.9vh" : "1.7vw",
                    height: isLandscape ? "5.0vh" : "4.5vw",
                    margin: "0vh 0.5vh 0vh 0vh",
                    borderRadius: "5px"
                  }
                }, label));
}

var make = ButtonStd;

exports.make = make;
/* react Not a pure module */
