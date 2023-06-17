import { useEffect, useState } from 'react';
import './style.css';

function SplitBillForm({ onSplitBill, friendName }) {
  const [bill, setBill] = useState('');
  const [billResponsible, setBillResponsible] = useState('you');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : '';

  const resetForm = () => {
    setBill('');
    setPaidByUser('');
    setBillResponsible('you');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (bill === 0 || paidByUser === 0) return;

    onSplitBill(billResponsible === 'you'? paidByFriend : -paidByFriend);
    resetForm();
  };

  useEffect(() => {
    resetForm();
  }, [friendName]);

  return (
    <form onSubmit={handleSubmit} className='split-bill-form'>
      <h2>Split bill with {friendName}</h2>

      <label htmlFor='billValue'>💰 Bill Value</label>
      <input
        id='billValue'
        type='number'
        value={bill}
        onChange={(e) => {
          setBill(Number(e.target.value));
        }}
      />

      <label htmlFor='yourExpense'>🧍🏻‍♂️ Your expense</label>
      <input
        id='yourExpense'
        type='text'
        value={paidByUser}
        onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}
      />

      <label htmlFor='friendExpense'>👬🏻 {friendName}'s expense</label>
      <input id='friendExpense' type='text' disabled value={paidByFriend} />

      <label htmlFor='billResponsible'>🤑 Who is paying the bill?</label>
      <select id='billResponsible' value={billResponsible} onChange={(e) => setBillResponsible(e.target.value)}>
        <option value='you'>You</option>
        <option value='friend'>{friendName}</option>
      </select>

      <button className='button' type='submit' onClick={handleSubmit}>
        Split bill
      </button>
    </form>
  );
}

export default SplitBillForm;
