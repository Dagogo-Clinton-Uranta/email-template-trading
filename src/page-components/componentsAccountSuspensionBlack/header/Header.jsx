import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header-dc.css'


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
    
   
    <header className="header-asnblack">
    <Nav/>
    <div className=" header__container-1">
      

      <div className="headerExplainer-asnblack">
         <h4 style={{marginBottom:"0rem",fontWeight:"400",fontSize:"1.8rem",color:"white",color:" #9AA0A9",fontWeight:"600",textAlign:"center"}}> 
         Account Suspension Notification
           <br/>
          
          </h4>
   
         
            <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800",textAlign:"center",color:"white"}}>
            Important<br/>
           
             <span style={{color:"red",position:"relative",top:"10px"}}>Your Account Has Been Suspended</span>

           </p>




        
           <p style={{maxWidth:"70%",color:"white",fontSize:"1rem",lineHeight:"1",fontWeight:"700",textAlign:"center",display:"flex",alignItems:"center",color:"white",position:"relative",top:"2rem"}}>
           Hello [User Name],
            <br/>
         
    We regret to inform you that your account has been suspended due to [reason for suspension, e.g., suspicious activity, policy violations]
           </p>

   
         
           <div style={{color:"#9AA0A9",position:"relative",top:"1.5rem",fontWeight:"600"}}>To Resolve this issue:</div> 
           
     
           <p style={{maxWidth:"70%",color:"white",fontSize:"1rem",lineHeight:"1",fontWeight:"400",textAlign:"center"}}>
           Please review our [policies/guidelines] to understand the reason for the suspension.

           <br/><br/>
           Follow the steps outlined in the attached document to regain access to your account.
          
           </p>

       



           <p style={{maxWidth:"70%",color:"white",fontSize:"1rem",lineHeight:"1",fontWeight:"500",textAlign:"center",display:"flex",alignItems:"center",color:"#9AA0A9",marginTop:"-0.5rem"}}>
           If you believe this suspension is a mistake or if you need further assistance, please contact our support team
           </p>


          









           <div style={{display:"flex",gap:'2rem'}}>
          <button  className='btn btn-black'> View Document</button>
          <button className='btn btn-primary'>Deposit Funds</button>
           </div>


       
            
           <p style={{maxWidth:"70%",color:"white",fontSize:"1rem",lineHeight:"1",fontWeight:"400",textAlign:"center"}}>
           We’re here to help you resolve this as quickly as possible.
           </p>


           <p style={{maxWidth:"70%",color:"white",fontSize:"1rem",lineHeight:"1",fontWeight:"700",textAlign:"center",display:"flex",alignItems:"center",color:"#2f9ffa",marginTop:"-0.5rem"}}>
           Help
           </p>


         



     

      </div>
     
    

    </div>
    </header>
    
  )
}

export default Header