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
  let [friendImageUrl, setFriendImageUrl] = useState(
    "https://i.pravatar.cc/48?u=499476"
  );
  let [selectedfriend, setSelectedFriend] = useState(null);

  // show add friend form
  function handleAddFriendFormShow() {
    setShowAddFriend(!showAddFriend);
    let randomNum = Math.trunc(Math.random() * 20 - 10);
    setFriendImageUrl(`https://i.pravatar.cc/48?u=4994${randomNum}`);
  }

  function handleNewAddFriend(newFriend) {
    setFriendList((oldList) => [...oldList, newFriend]);
  }

  function handleSelected(person) {
    setSelectedFriend((currentfriend) =>
      currentfriend?.id === person.id ? null : person
    );
    setShowAddFriend(false);
  }

  function handlesplitBill(value) {
    setFriendList((friends) =>
      friends.map((friend) =>
        friend.id === selectedfriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friendsList}
          onSelectedFriend={handleSelected}
          selectedfriend={selectedfriend}
        />
        {showAddFriend && (
          <FormAddNewFriend
            onAddNewFriend={handleNewAddFriend}
            closeForm={handleAddFriendFormShow}
            friendImageUrl={friendImageUrl}
          />
        )}
        <Button onClick={handleAddFriendFormShow}>
          {showAddFriend ? "close" : "Add Friend"}
        </Button>
      </div>
      {selectedfriend && (
        <FormSplitBill
          friend={selectedfriend}
          onSplitBill={handlesplitBill}
          key={selectedfriend.id}
        />
      )}
    </div>
  );
}
