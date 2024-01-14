import { Button } from "./Button";

export function FriendList({ friends, onSelectedFriend, selectedfriend }) {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <Friend
            friend={friend}
            key={friend.id}
            onSelectedFriend={onSelectedFriend}
            selectedfriend={selectedfriend}
          />
        );
      })}
    </ul>
  );
}

function Friend({ friend, onSelectedFriend, selectedfriend }) {
  let isSelected = friend.id === selectedfriend?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && (
        <p>
          you and {friend.name} are even ${Math.abs(friend.balance)}
        </p>
      )}
      <Button onClick={() => onSelectedFriend(friend)}>
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
}
