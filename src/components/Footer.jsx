import React from 'react'

function Footer() {
  
    return (
        <div className="container-fluid">
          <div
            className="row"
            style={{
              border: '1px solid black',
              backgroundColor: 'bisque',
            }}
          >
            <p>
              <br />
              Follow us on Social Media: 
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png"
                width="20px"
                height="20px"
                alt="Facebook"
              />{' '}
              <img
                src="https://cdn-icons-png.flaticon.com/256/124/124021.png"
                width="20px"
                height="20px"
                alt="Twitter"
              />{' '}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/800px-Instagram_icon.png"
                width="20px"
                height="20px"
                alt="Instagram"
              />
            </p>
          </div>
        </div>
      );
  
}

export default Footer