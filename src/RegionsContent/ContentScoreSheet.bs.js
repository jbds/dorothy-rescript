// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");

function ContentScoreSheet(Props) {
  var isLandscape = Props.isLandscape;
  return React.createElement(React.Fragment, undefined, React.createElement("div", undefined, "Hello Scoresheet"), React.createElement("table", {
                  style: {
                    color: "#26653B",
                    fontFamily: "Trebuchet MS",
                    fontSize: isLandscape ? "1.9vh" : "1.9vw",
                    margin: "auto",
                    textAlign: "center"
                  }
                }, React.createElement("thead", undefined), React.createElement("tbody", undefined, React.createElement("tr", {
                          style: {
                            backgroundColor: "#f8f8f8",
                            color: "#000000"
                          }
                        }, React.createElement("td", {
                              style: {
                                padding: "1vh 1vh 1vh 1vh"
                              }
                            }, "Vuln"), React.createElement("td", {
                              style: {
                                padding: "1vh 0.5vh 1vh 0.5vh"
                              }
                            }, "Decl"), React.createElement("td", {
                              style: {
                                padding: "1vh 1.5vh 1vh 1.5vh"
                              }
                            }, "Bid"), React.createElement("td", {
                              style: {
                                padding: "1vh 0vh 1vh 0vh",
                                width: "6.5vh"
                              }
                            }, "NS Tricks"), React.createElement("td", {
                              style: {
                                padding: "1vh 0vh 1vh 0vh",
                                width: "6.5vh"
                              }
                            }, "NS Score"), React.createElement("td", {
                              style: {
                                padding: "1vh 0vh 1vh 0vh",
                                width: "6.5vh"
                              }
                            }, "EW Tricks"), React.createElement("td", {
                              style: {
                                padding: "1vh 0vh 1vh 0vh",
                                width: "6.5vh"
                              }
                            }, "EW Score")))));
}

var make = ContentScoreSheet;

exports.make = make;
/* react Not a pure module */
