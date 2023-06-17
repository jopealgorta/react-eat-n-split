import { useState } from 'react';
import './style.css';

const AVATAR_URL = 'https://i.pravatar.cc/48';

function AddFriendForm({ onAddFriend }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState(AVATAR_URL);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const friend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };

    onAddFriend(friend);

    setName('');
    setImage(AVATAR_URL);
  };

  return (
    <form className='add-friend-form' onSubmit={handleSubmit}>
      <label htmlFor='friendName'>👬🏻 Name</label>
      <input id='friendName' type='text' value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor='imageURL'>🌆 Image</label>
      <input id='imageURL' type='text' value={image} onChange={(e) => setImage(e.target.value)} />

      <button type='submit' className='button' onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}

export default AddFriendForm;
