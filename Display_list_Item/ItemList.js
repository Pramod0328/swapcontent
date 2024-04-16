import React, { useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', description: 'This is the first item.' },
    { id: 2, name: 'Item 2', description: 'This is the second item.' },
    { id: 3, name: 'Item 3', description: 'This is the third item.' },
    { id: 4, name: 'Item 4', description: 'This is the fourth item.' },
    // ... more items
  ]);

  const swapItems = () => {
    const updatedItems = [...items];
    updatedItems.forEach((item, index) => {
      if (index % 2 === 0 && index + 1 < updatedItems.length) {
        const temp = updatedItems[index];
        updatedItems[index] = updatedItems[index + 1];
        updatedItems[index + 1] = temp;
      }
    });

    setItems(updatedItems);
  };

  return (
    <>
      <h1>This is the List of Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}:</strong> {item.description}
          </li>
        ))}
      </ul>
      <button onClick={swapItems}>Swap Items</button>
    </>
  );
};

export default ItemList;
