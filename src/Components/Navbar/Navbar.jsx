import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';



const Navbar = () => {
  return (

    <div className='nav'>
        {/* <h1></h1> */}
        <img src="sago logo" alt="no image"  width={100} height={50}/>
        <ul className='nav-links' style={{backgroundColor:"red"}}>
            <Link to ='/' className='Fruitsandveg'>  
            <li>Fruits and veg</li> 
             </Link>
            <Link to ='/Tea' className='Tea'>  
            <li>Tea</li> 
            </Link>
            <Link to ='/Ghee' className='Ghee'> 
             <li>Ghee</li>  
             </Link>
            <Link to ='/Freshvegetables' className='Freshvegetables'>  
            <li>Fresh vegetables</li> 
             </Link>
            <Link to ='/Login' className='Login'> 
             <li>Login</li> 
              </Link>
            <Link to ='/Cart' className='Cart'> 
             <li>Cart</li> 
              </Link>

        </ul>


    </div>
  )
}
export default Navbar
