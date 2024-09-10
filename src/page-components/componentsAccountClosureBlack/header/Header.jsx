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
    
   
    <header className="header-acnblack">
    <Nav/>
    <div className=" header__container-1">
      

      <div className="headerExplainer-acnblack">
         <h4 style={{marginBottom:"0rem",fontWeight:"400",fontSize:"1.8rem",color:"white",color:" #9AA0A9",fontWeight:"600",textAlign:"center"}}> 
         Account Closure Notification
           <br/>
          
          </h4>
   
         
            <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800",textAlign:"center",color:"white"}}>
           
           
             <span style={{color:"red",position:"relative",top:"10px"}}>Your Account on Tradx Has Been Closed</span>

           </p>




        
           <p style={{maxWidth:"70%",color:"white",fontSize:"1rem",lineHeight:"1",fontWeight:"400",textAlign:"center",display:"flex",alignItems:"center",color:"white",position:"relative",top:"1rem"}}>
           Hello [User Name],
            <br/>
         
    We regret to inform you that your account has been suspended due to [reason for suspension, e.g., suspicious activity, policy violations]
           </p>

   
         
           <div style={{color:"#9AA0A9",position:"relative",top:"1.5rem",fontWeight:"600"}}>Account Closure Details:</div> 
           
     
           <p style={{maxWidth:"70%",color:"white",fontSize:"1rem",lineHeight:"1",fontWeight:"400",textAlign:"center"}}>
           <b>Remaining Balance:</b>   Details of any remaining funds, if applicable


           <br/><br/>
           <b>Open Positions:</b> Details of any open positions, if applicable
          
           </p>



           <div style={{color:"#9AA0A9",position:"relative",top:"0.5rem",fontWeight:"600"}}>Next Steps:</div> 
           
     
           <p style={{maxWidth:"70%",color:"white",fontSize:"1rem",lineHeight:"1",fontWeight:"400",textAlign:"center"}}>
           If you have remaining funds, please follow these instructions to retrieve them:
          
           </p>



           <div style={{color:"#2f9ffa",position:"relative",top:"-1rem",fontWeight:"700"}}>Instructions or link to process withdrawal:</div> 
       



           <p style={{maxWidth:"70%",color:"white",fontSize:"1rem",lineHeight:"1",fontWeight:"500",textAlign:"center",display:"flex",alignItems:"center",color:"#9AA0A9",marginTop:"-0.5rem"}}>
           For any issues or questions, feel free to contact our support team at “Support Email”
           </p>


          









           <div style={{display:"flex",gap:'2rem'}}>
          <button  className='btn btn-black'> OK</button>
          
           </div>


       
            
           <p style={{maxWidth:"70%",color:"white",fontSize:"1rem",lineHeight:"1",fontWeight:"400",textAlign:"center"}}>
           Thank you for being a part of Tradx.io. We hope to see you again in the future
           </p>


          {/*
           <p style={{maxWidth:"70%",color:"white",fontSize:"1rem",lineHeight:"1",fontWeight:"700",textAlign:"center",display:"flex",alignItems:"center",color:"#2f9ffa",marginTop:"-0.5rem"}}>
           Help
           </p>
          */}


         



     

      </div>
     
    

    </div>
    </header>
    
  )
}

export default Header