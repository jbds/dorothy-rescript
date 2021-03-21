// must use labelled arguments in 'make' function

@react.component
let make = (~isLandscape: bool, ~vhTrue: float) => {
  // we deliberately choose not to style the root element, so can use a fragment here
  // all components will include their local styles
  <>
    <RegionTableSeating isLandscape vhTrue />
    <RegionScoreSheet isLandscape vhTrue />
    <RegionBiddingHistory isLandscape vhTrue />
    <RegionBiddingKeyboard isLandscape vhTrue />
    <RegionCardTable isLandscape vhTrue />
    <RegionCardTableTLHS isLandscape vhTrue />
    <RegionCardTableBRHS isLandscape vhTrue />
  </>
}
