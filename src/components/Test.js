import React, { useState } from 'react';

const Test = () => {
  const data = [
    { id: 1, title: 'JOhn', price: 200 },
    { id: 2, title: 'JOhn', price: 200 },
  ];

  const [item, setItem] = useState(data);
  const [formData, setFormData] = useState({
    price: '',
    id: 1,
  });

  const onChange = (e) => {
    setFormData({ ...formData, price: e.target.value });
  };

  const { price } = formData;

  const onSubmit = (e, formData) => {
    e.preventDefault();
    const index = data.map((x) => x.id).indexOf(formData.id);

    const reqItem = data[index];
    if (formData.price) reqItem.price += parseInt(formData.price);
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e, formData)}>
        <input type='number' value={price} onChange={(e) => onChange(e)} />
        <button type='submit'>Click me</button>
      </form>
      <div>
        {item.map((x) => (
          <div
            key={x.id}
            style={{ display: 'flex', gap: '1rem', padding: '1.5rem' }}
          >
            <p>{x.title}</p>
            <p>{x.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
