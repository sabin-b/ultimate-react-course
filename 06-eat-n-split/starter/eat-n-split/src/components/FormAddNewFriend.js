import { useState } from "react";
import { Button } from "./Button";
import { v4 as uuid } from "uuid";

export function FormAddNewFriend({
  onAddNewFriend,
  closeForm,
  friendImageUrl,
}) {
  // friend name state
  let [friendName, setFriendName] = useState("");

  console.log(friendName);
  function handleFormSubmission(event) {
    event.preventDefault();
    if (!friendName) return;
    let id = uuid().slice(0, 6);
    let newFriend = { name: friendName, image: friendImageUrl, id, balance: 0 };
    onAddNewFriend(newFriend);
    closeForm();
  }

  function handleFriendImageUrl() {}
  return (
    <form className="form-add-friend" onSubmit={handleFormSubmission}>
      <label>friend Name:</label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />
      <label>Image Url:</label>
      <input
        type="text"
        value={friendImageUrl}
        onChange={handleFriendImageUrl}
      />
      <Button btnType={"submit"}>Add</Button>
    </form>
  );
}
