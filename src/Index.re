//ReactDOMRe.renderToElementWithId(<App />, "root");

// Dom access can actually fail. ResScript
// is really explicit about handling edge cases!
switch (ReactDOM.querySelector("#root")) {
| Some(root) =>
  ReactDOM.render(<div> {React.string("Hello Andrea")} </div>, root)
| None => () // do nothing
};
