import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header-dcblack.css'


import { setRecruiter,setDemo } from 'src/redux/reducers/auth.slice'
import { useDispatch } from 'react-redux'
import Nav from 'src/general-components/navbar-black/nav/Nav'
import { FaRegClock } from 'react-icons/fa'
/*import laptop from 'src/assets/images/laptop.svg'

import LoanSlider from './LoanSlider'*/



const Header = () => {

   const [input,setInput] = useState(1000)
   const navigate= useNavigate()
   const dispatch = useDispatch()

   const handleChange = (e) => {
    setInput(e.target.value);
  
  };

  return (
    
   
    <header className="header-dcblack">
    <Nav/>
    <div className=" header__container-1">
      

      <div className="headerExplainer-dcblack">
         <h4 style={{marginBottom:"0rem",fontWeight:"400",fontSize:"1.8rem",color:"white",color:" #9AA0A9",fontWeight:"600"}}> 
          Password Reset Request
           <br/>
          
          </h4>
   
         
            <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800",textAlign:"center"}}>
            Reset Your Password on [Platform Name]

            
           </p>



     
           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"400",textAlign:"center",color:" #9AA0A9"}}>
           A password reset link will be sent to your email

       
           </p>


           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"400",textAlign:"center",display:"flex",alignItems:"center",marginTop:"-0.5rem"}}>
           user@gmail.com
           </p>









           <div style={{display:"flex",gap:'2rem'}}>
          <button  className='btn btn-black'> Send the Code</button>
          
           </div>



     

      </div>
     
    

    </div>
    </header>
    
  )
}

export default Header