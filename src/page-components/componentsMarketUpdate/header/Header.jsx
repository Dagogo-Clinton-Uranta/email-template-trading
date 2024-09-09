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
    
   
    <header className="header-acn">
    <Nav/>
    <div className=" header__container-1">
      

      <div className="headerExplainer-acn">
         <h4 style={{marginBottom:"0rem",fontWeight:"400",fontSize:"1.8rem",color:"black",color:" #9AA0A9",fontWeight:"600",textAlign:"center"}}> 
          Market Update Newsletter
           <br/>
          
          </h4>
   
         
            <p style={{maxWidth:"70%",color:"black",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800",textAlign:"center",color:"black"}}>
           
           
             <span style={{color:"black",position:"relative",top:"10px"}}>Tradx.io</span>
             <br/>
             <span style={{color:"black",position:"relative",top:"10px"}}>Market Update – August 2024</span>
           </p>




        
           <p style={{maxWidth:"70%",color:"black",fontSize:"1rem",lineHeight:"1",fontWeight:"400",textAlign:"center",display:"flex",alignItems:"center",color:"black",position:"relative",top:"1rem"}}>
           Hello [User Name],
            <br/>
         
      We’re thrilled to announce some exciting new features on Tradx.io!
           </p>

   
         
           <div style={{color:"#9AA0A9",position:"relative",top:"1.5rem",fontWeight:"600"}}>Recent Market Trends:</div> 
           
     
           <p style={{maxWidth:"70%",color:"black",fontSize:"1rem",lineHeight:"1",fontWeight:"400",textAlign:"center"}}>
           [Trend/Insight #1]: Summary of recent market movements or developments..

           </p>


           <div style={{color:"#9AA0A9",position:"relative",top:"1.5rem",fontWeight:"600"}}>Upcoming Events & Opportunities::</div> 
           
     
           <p style={{maxWidth:"70%",color:"black",fontSize:"1rem",lineHeight:"1",fontWeight:"400",textAlign:"center"}}>
           [Event/Opportunity #1]: 08/04/2024 – Description of the event or opportunity and its potential impact.

           </p>


           <div style={{color:"#9AA0A9",position:"relative",top:"1.5rem",fontWeight:"600"}}>Expert Analysis & Insights:</div> 
           
     
           <p style={{maxWidth:"70%",color:"black",fontSize:"1rem",lineHeight:"1",fontWeight:"400",textAlign:"center"}}>
           Include a brief summary or link to a detailed analysis from industry experts.

           </p>

       
     
           <p style={{maxWidth:"70%",color:"black",fontSize:"1rem",lineHeight:"1",fontWeight:"500",textAlign:"center",display:"flex",alignItems:"center",color:"#9AA0A9",marginTop:"-0.5rem"}}>
           Stay ahead in the market and make informed trades with Tradx.io
           </p>


          









           <div style={{display:"flex",gap:'2rem'}}>
         
          <button  className='btn btn-black'> OK</button>
          
           </div>


       
            
           <p style={{maxWidth:"70%",color:"black",fontSize:"1rem",lineHeight:"1",fontWeight:"400",textAlign:"center"}}>
          Happy Trading !
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