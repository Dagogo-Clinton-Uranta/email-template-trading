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
    
   
    <header className="header-asn">
    <Nav/>
    <div className=" header__container-1">
      

      <div className="headerExplainer-asn">
         <h4 style={{marginBottom:"0rem",fontWeight:"400",fontSize:"1.8rem",color:"black",color:" #9AA0A9",fontWeight:"600",textAlign:"center"}}> 
         Platform Maintenance Notification
           <br/>
          
          </h4>
   
         
            <p style={{maxWidth:"70%",color:"black",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800",textAlign:"center",color:"black"}}>
            Scheduled Maintenance <br/>
           
             <span style={{position:"relative",top:"10px"}}>on 01/20/2024 – Tradx.io</span>

           </p>




        
           <p style={{maxWidth:"70%",color:"black",fontSize:"1rem",lineHeight:"1",fontWeight:"500",textAlign:"center",display:"flex",alignItems:"center",color:"black",position:"relative",top:"2rem"}}>
           Hello [User Name],
            <br/>
         
             We want to inform you about scheduled maintenance on 
            <br/>
            01/20/2024
           </p>

   
         
           <div style={{color:"#9AA0A9",position:"relative",top:"1.5rem",fontWeight:"600"}}>Maintenance Details:</div> 
           
     
           <p style={{maxWidth:"70%",color:"black",fontSize:"1rem",lineHeight:"1",fontWeight:"400",textAlign:"center"}}>
           Date: [Date] <br/>
           Time: [Start Time] to [End Time] <br/>
           Duration: Approximately [X] hours <br/>
          
           </p>

       



           <p style={{maxWidth:"70%",color:"black",fontSize:"1rem",lineHeight:"1",fontWeight:"500",textAlign:"center",display:"flex",alignItems:"center",color:"#9AA0A9",marginTop:"-0.5rem"}}>
           During this time, [specific features or services, e.g., trading, account access] will be temporarily unavailable.
           We apologize for any inconvenience this may cause
           </p>


          









           <div style={{display:"flex",gap:'2rem'}}>
          <button  className='btn btn-black'> OK</button>
         
           </div>


       
            
           <p style={{maxWidth:"70%",color:"black",fontSize:"1rem",lineHeight:"1",fontWeight:"400",textAlign:"center"}}>
           This maintenance is part of our ongoing efforts to improve the platform and ensure a better experience for you
           </p>

         {/*
           <p style={{maxWidth:"70%",color:"black",fontSize:"1rem",lineHeight:"1",fontWeight:"700",textAlign:"center",display:"flex",alignItems:"center",color:"#2f9ffa",marginTop:"-0.5rem"}}>
           Help
           </p>
  */}

         



     

      </div>
     
    

    </div>
    </header>
    
  )
}

export default Header