import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({ friend, onSplitBill }) {
  let [bill, setbill] = useState("");
  let [paidByUser, setPaidByUser] = useState("");
  let [whoIsPaying, setwhoIsPaying] = useState("user");
  let paidByFriend = bill ? bill - paidByUser : "";

  function handleFormSplit(event) {
    event.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByUser : -paidByFriend);
    setbill("");
    setPaidByUser("");
    setwhoIsPaying("");
  }
  return (
    <form className="form-split-bill" onSubmit={handleFormSplit}>
      <h2>split the bill with {friend.name}</h2>
      <label>💸 bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setbill(Number(e.target.value))}
      />
      <label>🙎 your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>🧑‍🤝‍🧑 {friend.name}'s expense</label>
      <input type="text" value={paidByFriend} disabled />
      <label for="who">🧑‍🤝‍🧑 who is paying the bill</label>
      <select
        value={whoIsPaying}
        id="who"
        onChange={(e) => setwhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value={friend.name}>{friend.name}</option>
      </select>
      <Button>split bill</Button>
    </form>
  );
}
