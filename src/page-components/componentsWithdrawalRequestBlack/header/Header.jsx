import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header-dcblack.css'


import { setRecruiter,setDemo } from 'src/redux/reducers/auth.slice'
import { useDispatch } from 'react-redux'
import Nav from 'src/general-components/navbar-black/nav/Nav'
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
           Withdrawal Request Confirmation
           <br/>
          
          </h4>
   
         
            <p style={{maxWidth:"100%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800",textAlign:"center"}}>
            Your Withdrawal Request is Being Processed

            <p style={{maxWidth:"100%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800"}}>
            Request ID: 238409595
           </p>
           </p>



     
           <p style={{maxWidth:"100%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800",textAlign:"center"}}>
           <span style={{color:" #9AA0A9"}}> Withdrawal Amount:</span> $5000

            &nbsp; &nbsp; &nbsp;

            <span style={{maxWidth:"100%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800"}}>
            <span style={{color:" #9AA0A9"}}> Date:</span> 20.08.2024
           </span>
           </p>




           <p style={{maxWidth:"100%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800",textAlign:"center",marginTop:"-0.3rem"}}>
           <span style={{color:" #9AA0A9"}}> Expected Processing Time:</span> &nbsp; Within 30 minutes

           </p>









           <div style={{display:"flex",gap:'2rem'}}>
          <button  className='btn btn-black'> Withdrawal Status</button>
          <button className='btn btn-primary'> Continue Trading</button>
           </div>



           <p style={{maxWidth:"100%",color:"white",fontSize:"1.2rem",lineHeight:"1",textAlign:"center",marginTop:"1.5rem"}}>
            If you have any questions click "Help"
           </p>


           <p style={{maxWidth:"100%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800",textAlign:"center",marginTop:"-0.3rem"}}>
           Help

           </p>
             
     

      </div>
     
    

    </div>
    </header>
    
  )
}

export default Header