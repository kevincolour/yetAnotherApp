//Default base tile

import React from "react";

export const Tile = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const myValue = 1;
  const onClickHandler = () => {
    setIsClicked(true);
  };

  return (
    <div
      onClick={onClickHandler}
      style={isClicked ? tileStylesClicked : tileStyles}
    >
      {myValue}
    </div>
  );
};

const tileStyles: React.CSSProperties = {
  width: 190,
  height: 190,
  borderWidth: "10px",
  borderStyle: "solid",
  borderColor: "black",
  textAlign: "center",
};

const tileStylesClicked: React.CSSProperties = {
  ...tileStyles,
  borderColor: "green",
};
