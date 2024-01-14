import { useState } from "react";
import PropTypes from "prop-types";

// ! css styles {
let mainContainerStyle = { display: "flex", alignItems: "center", gap: "16px" };
let starContainer = { display: "flex", gap: "4px" };
// ! css styles }

StarRating.propTypes = {
  // maxRating: PropTypes.number.isRequired, // for required one
  // maxRating: PropTypes.bool,
  // maxRating: PropTypes.object,
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  message: PropTypes.array,
  onSetRating: PropTypes.func,
};

export function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 35,
  message = [],
  onSetRating = () => {},
  defaultRating = 0,
}) {
  let [rating, setRating] = useState(0);
  let [tempRate, setTempRate] = useState(0);

  // ! listen click event {
  function handleClickStarRating(index) {
    setRating(index + 1);
    onSetRating(index + 1);
  }
  // ! listen click event }

  // ! css for text {
  let textStyle = {
    margin: "0",
    lineHeight: "1",
    color,
    fontSize: `${(size * 2) / 3}px`,
  };
  // ! css for text }

  return (
    <div style={mainContainerStyle}>
      <div style={starContainer}>
        {Array.from({ length: maxRating }).map((_, index) => (
          <Star
            onClickRate={() => handleClickStarRating(index)}
            onMouseEnter={() => setTempRate(index + 1)}
            onMouseLeave={() => setTempRate(0)}
            fill={tempRate ? tempRate >= index + 1 : rating >= index + 1}
            key={index}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {message.length > 0 ? message.at(rating - 1) : tempRate || rating || ""}
      </p>
    </div>
  );
}

function Star({ fill, onClickRate, onMouseEnter, onMouseLeave, size, color }) {
  let starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "inline-block",
    cursor: "pointer",
  };
  return (
    <span
      style={starStyle}
      role="button"
      onClick={onClickRate}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {fill ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}

/*
FULL STAR




EMPTY STAR



*/
