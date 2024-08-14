
import { useState } from 'react';
//import axios from 'axios'
function Order() {
  // Sample data
  const initialData = [
    { id: 1, name: 'Chicken Biryani', price: 15, selected: false },
    { id: 2, name: 'Chicken Tikka', price: 13, selected: false },
    { id: 3, name: 'Goat Biryani', price: 20, selected: false },
    { id: 4, name: 'Samosa', price: 5, selected: false },
    { id: 5, name: 'Cutlet', price: 5, selected: false },
    { id: 6, name: 'Paneer', price: 10, selected: false }
  ];

  const [data, setData] = useState(initialData);
  const [responsestatus, setResponsestatus] = useState('');
  // Handle checkbox change
  const handleCheckboxChange = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setData(updatedData);
  };

  //Form Handling
  // State to hold the input values
  const [formData, setFormData] = useState({
    firstnCust: '',
    lastnCust: '',
    emailCust: '',
    phnoCust: ''
   
    
  });
  // Handle changes to the input fields
  const handleChangeCust = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  //Function to check for any orders
  const checkForOrders = (e) =>{
    const orderSelected = data.filter((item) => item.selected);
    //console.log(orderSelected);
    if(orderSelected.length===0){
      console.log(orderSelected);
      alert('Select At least One Item to Order');
      e.preventDefault();
    }
    
  }
  // Handle form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uniqueId = `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    //Checked Menu Items
    const filteredData = data.filter((item) => item.selected);
    console.log(filteredData);
    setData(initialData);
    console.log('Form Data:', formData);
    const payload = {
      firstPayload: formData,
      secondPayload: filteredData,
      idPayload: uniqueId
    };
    //let getCustId;
    //Save Customer details in Customer Collection
    //Using axios
    /*try {
      const response = await axios.post('http://localhost:5051/submit_cust', formData);
      console.log("Response Data");
      console.log(response);
      getCustId=response.data._id;
      console.log(getCustId);
    } catch (error) {
      console.error('Error:', error);
    }*/
    //Using fetch
    fetch('http://localhost:5051/submit_cust', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    })
    .then((response) => response.json())
    .then((jsonresponse) => {
      // Get response data
      console.log('Response data:', jsonresponse.message);
      setResponsestatus(jsonresponse);
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
    
    if(responsestatus!==''){
      console.log("Order Placed");
      alert(`Order Placed!!! Order No is: ${uniqueId}`)
    }
  }
    // Get the Customer Id from the customer collection and save it to the Order collection(to link the collections)
    /*try {
      //fetch(`https://api.thecatapi.com/v1/images/search?limit=15&breed_ids=${selectedBreedId}`)
      const response = await axios.post(`http://localhost:5051/submit_order/custid=${getCustId}`, filteredData);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }*/
  
  

  return (
    <>
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
        <button className="btn btn-dark" onClick={handleSubmit}>
          Order Items
        </button>
      </div>
    </div>
<br></br>
<div className="container-fluid">
<div className="row">
  <h5 style={{ textAlign: 'left' }}>
    Enter Customer Details
  </h5>
</div>

<div className="row">
  <form onSubmit={handleSubmit}>
    <br />
    <p>
      First Name<br />
      <input name="firstnCust" type="text"
      value={formData.firstnCust}
      onChange={handleChangeCust}
      required 
      placeholder="Enter First Name" />
    </p>
    <p>
      Last Name<br />
      <input name="lastnCust" type="text" 
      value={formData.lastnCust}
      onChange={handleChangeCust}
      required 
      placeholder="Enter Last Name" />
    </p>
    
    <p>
      Email Id<br />
      <input name="emailCust" type="email" 
      value={formData.emailCust}
      onChange={handleChangeCust}
      required 
      placeholder="Enter Email" />
    </p>

    <p>
      Phone<br />
      <input name="phnoCust" type="number" 
      value={formData.phnoCust}
      onChange={handleChangeCust}
      required 
      placeholder="Enter Phone" />
    </p>
    
    <button type="submit" onClick={checkForOrders} className="btn btn-dark" id="subBtnOrder">
      Order
    </button>
  </form>
</div>
</div>
</>
  );
}

export default Order