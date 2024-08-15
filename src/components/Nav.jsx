
import {Link} from "react-router-dom"
export default function Nav() {
  return (
    <div className='nav'>
        
        <Link to="/">
            <div>Home</div>
        </Link>
        <Link to="/about">
            <div>About</div>
        </Link>
        <Link to="/catering">
            <div>Catering</div>
        </Link>
        <Link to="/order">
            <div>Order Now</div>
        </Link>
        <Link to="/login">
            <div>View Orders</div>
        </Link>
        
    </div>
  )
}
