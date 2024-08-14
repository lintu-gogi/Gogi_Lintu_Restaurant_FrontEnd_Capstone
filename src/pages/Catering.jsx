import React from 'react'
import { useState,useEffect } from 'react';
function Catering() {
  const [data,setData]  = useState(null);
  let baseURI= `http://localhost:5051`;
  //Function to getMenu
const getMenu = async () => {
  // make fetch request and store response
  try{
  const response = await fetch(`${baseURI}/getmenu`);
  // Parse JSON response into a javascript object
  const data = await response.json();
  console.log(data);
  //set the Menu state to the setData
  setData(data)
 
}catch(e){
  console.log(e);
}
};
 //This will run on the first render but not on subsquent renders
 useEffect(() => {
  getMenu();
}, []);

// loaded function for when data is fetched.
const loaded = () => {
  console.log(data);
  return (
    <div className="container-fluid">
      <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row">
        <button className="btn">
          Order Catering Items
        </button>
      </div>
    </div>
  );
};

// Function for when data doesn't exist.
const loading = () => {
  return <h1>Loading...</h1>;
};

// If data exists, run the loaded function; otherwise, run loading.
return data ? loaded() : loading();
}



export default Catering