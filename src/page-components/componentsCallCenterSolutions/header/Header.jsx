import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header-dc.css'


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
    console.log("this is the parent speaking,we are in header")
  };

  return (
    
   
    <header className="header-dc">
    <Nav/>
    <div className=" header__container-1">
      

      <div className="headerExplainer-dc">
         <h4 style={{marginBottom:"0rem",fontWeight:"400",fontSize:"1.8rem",color:"black",color:" #9AA0A9",fontWeight:"600"}}> 
           Deposit Confirmation
           <br/>
          
          </h4>
   
         
            <p style={{maxWidth:"100%",color:"black",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800",textAlign:"center"}}>
              Your Deposit is Confirmed

            <p style={{maxWidth:"100%",color:"black",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800"}}>
           Deposit ID:23409595
           </p>
           </p>



     
           <p style={{maxWidth:"100%",color:"black",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800",textAlign:"center"}}>
           <span style={{color:" #9AA0A9"}}> Deposit Amount:</span> $5000

            &nbsp; &nbsp; &nbsp;

            <span style={{maxWidth:"100%",color:"black",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800"}}>
            <span style={{color:" #9AA0A9"}}> Date:</span> 20.08.2024
           </span>
           </p>




           <p style={{maxWidth:"100%",color:"black",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800",textAlign:"center",marginTop:"-0.3rem"}}>
           <span style={{color:" #9AA0A9"}}> Deposit Method:</span> &nbsp; Online Payment

           </p>









           <div style={{display:"flex",gap:'2rem'}}>
          <button  className='btn btn-black'> View Balance</button>
          <button className='btn btn-primary'> Continue Trading</button>
           </div>
     

      </div>
     
    

    </div>
    </header>
    
  )
}

export default Header