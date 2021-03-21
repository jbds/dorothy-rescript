@val external doc: 'a = "document"
@val external w: 'a = "window"

// The purpose of this top level module is two fold:
// a) Write out the document title with a version number
// b) On DOM window load or resize, (re)render the whole App
// and inject gIsLandcape to let render be screen-aspect-ratio specific

// note js property becomes an array key?
doc["title"] = "Dorothy v0.01"

let reRenderApp = (isLandscape, vhTrue) => {
  // Dom access can actually fail. ResScript
  // is really explicit about handling edge cases!
  switch ReactDOM.querySelector("#root") {
  | Some(root) => ReactDOM.render(<App isLandscape vhTrue />, root)
  | None => Js.log("Cannot find element with id='root'")
  }
}

let renderAllOnLoadOrResize = () => {
  Js.log("fn renderAllOnLoadOrResize..")
  let isLandscape = w["innerHeight"] < w["innerWidth"]
  let vhTrue: float = w["innerHeight"] *. 0.01
  reRenderApp(isLandscape, vhTrue)
}

// track any size change
w["addEventListener"]("resize", _event => {
  Js.log("event window resize..")
  renderAllOnLoadOrResize()
})

// one off render at load
w["addEventListener"]("load", _event => {
  Js.log("event window load..")
  renderAllOnLoadOrResize()
})
