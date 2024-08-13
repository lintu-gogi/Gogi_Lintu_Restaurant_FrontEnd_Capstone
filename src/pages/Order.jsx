import React from 'react'
import { useState } from 'react';
function Order() {
  // Sample data
  const initialData = [
    { id: 1, name: 'Chicken Biryani', price: 15, selected: false },
    { id: 2, name: 'Chicken Tikka', price: 13, selected: false },
    { id: 3, name: 'Goat Biryani', price: 20, selected: false },
    { id: 4, name: 'Samosa', price: 5, selected: false },
    { id: 5, name: 'Cutlet', price: 5, selected: false },
  ];

  const [data, setData] = useState(initialData);

  // Handle checkbox change
  const handleCheckboxChange = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setData(updatedData);
  };

  // Handle delete selected items
  const handleDeleteSelected = () => {
    const filteredData = data.filter((item) => item.selected);
    console.log(filteredData);
    setData(initialData);
    //setData(filteredData);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Select</th>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row">
        <button className="btn" onClick={handleDeleteSelected}>
          Order Items
        </button>
      </div>
    </div>
  );
}

export default Order