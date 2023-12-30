import { Button } from "./Button";

export function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>split the bill with X</h2>
      <label>💸 bill value</label>
      <input type="text" />
      <label>🙎 your expense</label>
      <input type="text" />
      <label>🧑‍🤝‍🧑 friend expense</label>
      <input type="text" />
      <label for="who">🧑‍🤝‍🧑 who is paying the bill</label>
      <select id="who">
        <option value="name">name</option>
        <option value="name">name</option>
        <option value="name">name</option>
      </select>
      <Button>split bill</Button>
    </form>
  );
}
