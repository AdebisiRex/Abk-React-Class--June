import React, { useEffect } from "react";

const FunctionalComponent = () => {
  useEffect(() => {
    console.log(" I am mounted");

    return () => {
      console.log("Component Unmounts");
    };
  });
  return <div>FunctionalComponent</div>;
};

export default FunctionalComponent;
