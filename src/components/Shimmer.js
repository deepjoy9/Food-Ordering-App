import React from "react";

function ShimmerBox({ key }) {
  return (
    <div
      key={key}
      className="shadow-lg border bg-slate-200 rounded-lg h-[250px]"
    ></div>
  );
}

function Shimmer() {
  const shimmerBoxCount = 20;
  const shimmerBoxes = Array.from({ length: shimmerBoxCount }, (_, index) => (
    <ShimmerBox key={index} />
  ));

  return (
    <div data-testid="shimmer">
      <div className="h-40 bg-slate-200"></div>
      <div className="mx-10 my-10 p-5">
        <div className="res-container grid grid-cols-5 mx-4 gap-12">
          {shimmerBoxes}
        </div>
      </div>
    </div>
  );
}

export default Shimmer;
