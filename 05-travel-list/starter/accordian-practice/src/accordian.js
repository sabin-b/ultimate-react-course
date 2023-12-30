import { useState } from "react";

export function Accordian({ data }) {
  let [isOpenId, setIsOpenId] = useState(null);
  return (
    <div className="accordion">
      {data &&
        data.map(function (item, i) {
          return (
            <AccordianItem
              item={item}
              index={i}
              isOpen={isOpenId}
              setIsOpen={setIsOpenId}
              key={item.id}
            />
          );
        })}
    </div>
  );
}

function AccordianItem({ item, index, isOpen, setIsOpen }) {
  let data = item;
  function handleItemOpenClose(id) {
    setIsOpen((isOpen) => (isOpen !== id ? id : null));
  }
  return (
    <div
      className={`item ${isOpen === data.id ? "open" : ""}`}
      onClick={() => handleItemOpenClose(data.id)}
    >
      <span className="number">{index < 9 ? `0${index + 1}` : index + 1}</span>
      <p className="title">{data.title}</p>
      <span className="icon">{isOpen === data.id ? "-" : "+"}</span>
      {isOpen === data.id && (
        <div className={`content-box  ${isOpen === data.id ? "isopen" : ""}`}>
          <p>{data.text}</p>
        </div>
      )}
    </div>
  );
}
