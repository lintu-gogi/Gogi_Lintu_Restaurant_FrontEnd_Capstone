import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Home() {
  // State to hold the input values
  const [formData, setFormData] = useState({
    firstntext: '',
    lastntext: '',
    datetext: '',
    timetext: '',
    emailtext: '',
    phnotext: ''
    
  });
  // Handle changes to the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  // Handle form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    try {
      const response = await axios.post('http://localhost:5051/submitre', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
    // Here you can perform any action with the form data, such as saving it to a database or logging it
    //console.log('Form Data:', formData);
  };
    return (
        <>
        <div className="container-fluid">           
          <div className="row">
            <div className="col-sm-2 col-md-2 col-lg-2" style={{ border: '1px solid black' }}>
              <img
                id="img_Id"
                src="https://cdn-icons-png.flaticon.com/512/4780/4780045.png"
                className="img-fluid"
                alt="Icon"
              />
            </div>
            <div id="headerId" className="col-sm-10 col-md-10 col-lg-10" style={{ border: '1px solid black' }}>
              <h1 id="heading1_Id">
                <br />
                Best Biriyani <br /> in Boston Area
              </h1>
            </div>
          </div>
        </div>
        <br></br>
        <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className="card" style={{ width: '18rem' }}>
            <img
              src="https://t3.ftcdn.net/jpg/04/41/20/18/360_F_441201852_XQqp1wbAQj9udOC3iT7D0ahKgaf71bns.jpg"
              className="card-img-top"
              alt="Goat Biriyani"
            />
            <div className="card-body">
              <h5 className="card-title">Goat Biriyani</h5>
              <p className="card-text">Some quick example text to 1.</p>
              <a href="#" className="btn btn-primary">
                Order
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className="card" style={{ width: '18rem' }}>
            <img
              src="https://t3.ftcdn.net/jpg/04/41/20/18/360_F_441201852_XQqp1wbAQj9udOC3iT7D0ahKgaf71bns.jpg"
              className="card-img-top"
              alt="Chicken Biriyani"
            />
            <div className="card-body">
              <h5 className="card-title">Chicken Biriyani</h5>
              <p className="card-text">Some quick example text to 2.</p>
              <a href="#" className="btn btn-primary">
                Order
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className="card" style={{ width: '18rem' }}>
            <img
              src="https://t3.ftcdn.net/jpg/04/41/20/18/360_F_441201852_XQqp1wbAQj9udOC3iT7D0ahKgaf71bns.jpg"
              className="card-img-top"
              alt="Signature Items"
            />
            <div className="card-body">
              <h5 className="card-title">Signature Items</h5>
              <p className="card-text">Some quick example text to 3.</p>
              <a href="#" className="btn btn-primary">
                Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <div className="container-fluid">
      <div className="row">
        <a className="btn btn-dark" href="#" role="button">
          Order Now
        </a>
      </div>
    </div>
    <br></br>
    <div className="image-reserve">
      <img src="https://as1.ftcdn.net/v2/jpg/02/38/10/52/1000_F_238105207_2jrGVrP5mtzB0LFYJJoZIrI09xy7wHDp.jpg" alt="Restaurant Image" />
      <p><b>Welcome To Indian Cuisine!!!  </b>We want you to fall in love with our food. That's why we settle for nothing but fresh, premium quality spices and ingredients. 
      Our friendly atmosphere and attentive service and affordable prices will keep you coming back again and again...</p>
    </div>
    <br></br>

      <div className="container-fluid">
        <div className="row">
          <h5 style={{ textAlign: 'left' }}>
            Make a Reservation
          </h5>
        </div>

        <div className="row">
          <form onSubmit={handleSubmit}>
            <br />
            <p>
              First Name<br />
              <input name="firstntext" type="text"
              value={formData.firstntext}
              onChange={handleChange}
              required 
              placeholder="Enter First Name" />
            </p>
            <p>
              Last Name<br />
              <input name="lastntext" type="text" 
              value={formData.lastntext}
              onChange={handleChange}
              required 
              placeholder="Enter Last Name" />
            </p>
            <p>
              Date<br />
              <input name="datetext" type="date" 
              value={formData.datetext}
              onChange={handleChange}
              required 
              placeholder="Enter Date" />
            </p>
            <p>
              Time<br />
              <input name="timetext" type="time" 
              value={formData.timetext}
              onChange={handleChange}
              required 
              placeholder="Enter Time" />
            </p>
            <p>
              Email Id<br />
              <input name="emailtext" type="email" 
              value={formData.emailtext}
              onChange={handleChange}
              required 
              placeholder="Enter Email" />
            </p>

            <p>
              Phone<br />
              <input name="phnotext" type="number" 
              value={formData.phnotext}
              onChange={handleChange}
              required 
              placeholder="Enter Phone" />
            </p>

            <button type="submit" className="btn btn-dark" id="subBtn">
              Reserve
            </button>
      
          </form>
        </div>
      </div>
      <br></br>
    </>
    )
  
}

export default Home
