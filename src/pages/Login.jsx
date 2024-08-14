
import { useState } from 'react';
function Login() {

  const [data, setData] = useState([]);
  let baseURI= `http://localhost:5051`;
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    //Checked Menu Items
    const filteredData = data.filter((item) => item.selected);
    console.log(filteredData);
    setData(filteredData);
    
 
    //Using fetch Save Data to Customer collection and Order collection

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
  }
  return (
    <>
      <nav className="navbar bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Login Home
          </a>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <h5 style={{ textAlign: 'left' }}>
            Login
          </h5>
        </div>

        <div className="row">
          <form action="process.php" method="post">
            <br />
            <p>
              User Name<br />
              <input name="text" type="text" placeholder="Enter Name" />
            </p>

            <p>
              Password<br />
              <input type="password" placeholder="Enter Password" />
            </p>

            <button type="button" className="btn btn-dark" id="liveAlertBtn">
              Login
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
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
                <td>{item.cust_name}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row">
        <button className="btn btn-dark" onClick={handleSubmit}>
          Delete Orders
        </button>
      </div>
    </div>
    </>
  )
}

export default Login