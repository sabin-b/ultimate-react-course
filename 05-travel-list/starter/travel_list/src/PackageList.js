// import { initialItems } from "./sample_data";

import { useState } from "react";

export function PackageList({ items, onDeleteItem, onCheckItem, onClearList }) {
  let [sortBy, setSortBy] = useState("input");
  let sortedItems = [];

  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems = items.slice().sort((a, b) => a.isPacked - b.isPacked);
  }
  return (
    <div className="list">
      {items && (
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onCheckItem={onCheckItem}
            />
          ))}
        </ul>
      )}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="description">sort by description</option>
          <option value="input">sort by input</option>
          <option value="packed">sort by packed</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onCheckItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.isPacked}
        onChange={() => onCheckItem(item.id)}
      />
      <span style={item.isPacked ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
}
