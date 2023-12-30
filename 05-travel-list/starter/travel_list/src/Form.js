import { useState } from "react";
//import uuid v4
import { v4 as uuid } from "uuid";

export function Form({ addItem }) {
  let [description, setDescription] = useState("");
  let [quantity, setquantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    if (!description) return;
    let Newid = uuid().slice(0, 5);
    const newItem = { description, quantity, isPacked: false, id: Newid };
    addItem(newItem);

    // * state reset
    setDescription("");
    setquantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need 😍 for trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setquantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
