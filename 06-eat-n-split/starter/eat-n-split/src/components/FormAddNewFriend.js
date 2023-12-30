import { Button } from "./Button";

export function FormAddNewFriend({ onAddNewFriend }) {
  return (
    <form className="form-add-friend">
      <label>friend Name:</label>
      <input type="text" />
      <label>Image Url:</label>
      <input type="text" />
      <Button>Add</Button>
    </form>
  );
}
