
import React from "react";

interface Props {
  text: string;
  displayvalue: number;
}

const Display = ({ text, displayvalue }: Props) => {
  console.log("Display Component Rendered ", { displayvalue });

  return (
    <p>
      This person&apos;s {text} is {displayvalue}
    </p>
  );
  
};
export default Display;