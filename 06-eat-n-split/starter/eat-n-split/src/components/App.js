import { useState } from "react";
import { Button } from "./Button";
import { FormAddNewFriend } from "./FormAddNewFriend";
import { FormSplitBill } from "./FormSplitBill";
import { FriendList } from "./Friendlist";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
export default function App() {
  let [showAddFriend, setShowAddFriend] = useState(false);

  let [friendsList, setFriendList] = useState(initialFriends);

  // show add friend form
  function handleAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handleNewAddFriend(newFriend) {
    setFriendList((oldList) => [...oldList, newFriend]);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friendsList} />
        {showAddFriend && (
          <FormAddNewFriend onAddNewFriend={handleNewAddFriend} />
        )}
        <Button onClick={handleAddFriend}>
          {showAddFriend ? "close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
