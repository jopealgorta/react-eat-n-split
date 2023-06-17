import Friend from '../Friend';

function FriendsList({ friends, selectedFriend, onSelectFriend }) {
  return (
    <>
      <div className='h2'>
        <h2>Friends</h2>
      </div>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <Friend friend={friend} selectedFriend={selectedFriend} onSelectFriend={onSelectFriend} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default FriendsList;
