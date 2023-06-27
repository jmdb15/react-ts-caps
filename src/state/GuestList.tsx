import { useState } from 'react'
import React from 'react'

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  // const showGuests = guests.map((value) => value);
  const onClick = () => {
    setGuests([...guests, name]);
    setName('');
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest, index) => <li key={guest + index}>{guest}</li>)}
      </ul>
      <input value={name} onChange={(e) => { setName(e.target.value); console.log(name) }} className=''/>
      <button onClick={onClick}>Add Guest</button>
    </div>
  )
}

export default GuestList