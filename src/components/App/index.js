import { useState } from 'react';
import AddFriendForm from '../AddFriendForm';
import FriendsList from '../FriendsList';
import SplitBillForm from '../SplitBillForm';
import './style.css';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriendForm(false);
  };

  const handleSelectFriend = (friend) => {
    setSelectedFriend(friend);
    setShowAddFriendForm(false);
  };

  const handleShowAddFriendForm = () => {
    setShowAddFriendForm((show) => !show);
    setSelectedFriend(null);
  };

  const handleSplitBill = (balanceUpdate) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance:  friend.balance + balanceUpdate }
          : friend,
      ),
    );

    setSelectedFriend(null);
  };

  return (
    <div className='app-cont'>
      <h1>🍕 Eat n' split</h1>
      <div className='app'>
        <div className='sidebar'>
          <FriendsList friends={friends} selectedFriend={selectedFriend} onSelectFriend={handleSelectFriend} />
        </div>
        <div>
          <div className='action-buttons'>
            <button className='button button-large' onClick={handleShowAddFriendForm}>
              {showAddFriendForm ? 'Close' : 'Add friend'}
            </button>
          </div>

          {showAddFriendForm && <AddFriendForm onAddFriend={handleAddFriend} />}
          {selectedFriend && <SplitBillForm onSplitBill={handleSplitBill} friendName={selectedFriend.name} />}
        </div>
      </div>
    </div>
  );
}

export default App;
