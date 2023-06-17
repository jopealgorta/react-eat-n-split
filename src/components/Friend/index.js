import './style.css';

function Friend({ friend, selectedFriend, onSelectFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className='red'>
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className='green'>
          {friend.name} owes you ${friend.balance}
        </p>
      )}

      {friend.balance === 0 && <p className='gray'>You and {friend.name} even</p>}

      <button className='button' onClick={() => onSelectFriend(() => (isSelected ? null : friend))}>
        {isSelected ? 'Close' : 'Select'}
      </button>
    </>
  );
}

export default Friend;
