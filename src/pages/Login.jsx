
import { useState } from 'react';
function Login() {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  
  //let baseURI= `http://localhost:5051`;
  let baseURI =`https://indian-cuisine-fw2j.onrender.com`;
  // Fetch items from the backend
  
 
  const handleViewOrders=async(e)=>{
    e.preventDefault(); 
    try {
      const response = await fetch(`${baseURI}/orderitems`, {
        method: 'GET'
        
      });

      if (response.ok) {
        // Request was successful
        const data = await response.json();
        setItems(data);
      } else {
        // Handle errors here
        alert('Request failed!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred!');
    }
   
  }
  // Handle checkbox change
  const handleCheckboxChange = (id) => {
    setSelectedItems(prevSelectedItems =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter(itemId => itemId !== id)
        : [...prevSelectedItems, id]
    );
  };
  // Handle delete button click
  const handleDelete = () => {
    fetch(`${baseURI}/deleteorders`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ids: selectedItems }),
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        setItems(prevItems => prevItems.filter(item => !selectedItems.includes(item._id)));
        setSelectedItems([]);
      })
      .catch(error => console.error('Error deleting items:', error));
  };
  return (
    <>
      

      <div className="container-fluid">

        <div className="row">
          <form >
            <br />

            <button type="button" onClick={handleViewOrders} className="btn btn-dark" id="liveAlertBtn">
              View Orders
            </button>
    
          </form>
        </div>
      </div>

      <div className="container-fluid">
      <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Select</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>
                  <input
                    type="checkbox"
                    //checked={item.order_select}
                    checked={selectedItems.includes(item._id)}
                    onChange={() => handleCheckboxChange(item._id)}
                  />
                </td>
                <td>{item.custname}</td>
                <td>{item.order_item}</td>
                <td>{item.item_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row">
        <button className="btn btn-dark" onClick={handleDelete}>
          Delete Orders
        </button>
      </div>
    </div>
    </>
  )
}

export default Login