import { useState } from "react";
import PropTypes from "prop-types";

// ! proptypes
TextExpander.propTypes = {
  textSize: PropTypes.number,
  color: PropTypes.string,
  btnText: PropTypes.string,
  openTextBtnText: PropTypes.string,
  btnTextColor: PropTypes.string,
  btnHoverTextColor: PropTypes.string,
  isOpen: PropTypes.bool,
  text: PropTypes.string,
  className: PropTypes.string,
  btnGap: PropTypes.number,
  wordsShowCount: PropTypes.number,
};

// ! textExpander
export function TextExpander({
  textSize = 20,
  color = "#000",
  btnText = "readmore",
  openTextBtnText = "lessmore",
  btnTextColor = "#000",
  btnHoverTextColor = "red",
  isOpen = false,
  text = "lorem",
  children,
  className = "",
  btnGap = 10,
  wordsShowCount = 100,
}) {
  let [open, setOpen] = useState(isOpen);
  let usertext = children;
  let splicedtext = usertext
    .split(" ")
    .slice(0, wordsShowCount)
    .join(" ")
    .padEnd(wordsShowCount + 4, ".");
  let showText = open ? usertext : splicedtext;

  // ! text styles
  let textStyle = {
    color,
    fontSize: textSize,
  };
  return (
    <div className={className ? className : "box"}>
      <Text textStyle={textStyle}>{usertext ? showText : text}</Text>
      <Button
        btnTextColor={btnTextColor}
        btnGap={btnGap}
        btnHoverTextColor={btnHoverTextColor}
        textSize={textSize}
        onClick={() => setOpen(!open)}
      >
        {open ? openTextBtnText : btnText}
      </Button>
    </div>
  );
}

function Text({ children, textStyle }) {
  return <span style={textStyle}>{children}</span>;
}

function Button({
  children,
  onClick,
  btnTextColor,
  btnHoverTextColor,
  textSize,
  btnGap,
}) {
  const btnstyle = {
    color: btnTextColor,
    padding: 0,
    outline: "none",
    border: "none",
    backgroundColor: "transparent",
    fontSize: textSize,
    marginLeft: `${btnGap}px`,
  };
  return (
    <button
      style={btnstyle}
      onClick={onClick}
      onMouseOver={(event) => (event.target.style.color = btnHoverTextColor)}
      onMouseOut={(event) => (event.target.style.color = btnstyle.color)}
    >
      {children}
    </button>
  );
}
