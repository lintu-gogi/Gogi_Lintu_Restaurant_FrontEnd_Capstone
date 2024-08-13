import React from 'react'

function Login() {
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

            <p>
              Email Id<br />
              <input type="email" placeholder="Enter Email" />
            </p>

            <p>
              Phone<br />
              <input type="number" placeholder="Enter Phone" />
            </p>

            <button type="button" className="btn btn-dark" id="liveAlertBtn">
              Login
            </button>
            {/* <p> Pay
                <input type="submit" >
            </p> */}
          </form>
        </div>
      </div>
    </>
  )
}

export default Login