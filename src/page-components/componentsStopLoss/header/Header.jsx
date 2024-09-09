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
    
   
    <header className="header-kyc">
    <Nav/>
    <div className=" header__container-1">
      

      <div className="headerExplainer-kyc">
         <h4 style={{marginBottom:"0rem",fontWeight:"400",fontSize:"1.8rem",color:"black",color:" #9AA0A9",fontWeight:"600",textAlign:"center"}}> 
         Stop-Loss/Take-Profit
           <br/>
          
          </h4>
   
         
            <p style={{maxWidth:"70%",color:"black",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800",textAlign:"center",color:"black"}}>
            Trade Alert: Stop-Loss/Take-Profit Triggered <br/>
           [Trade ID]

           </p>




        
           <p style={{maxWidth:"70%",color:"black",fontSize:"1rem",lineHeight:"1",fontWeight:"400",textAlign:"center",display:"flex",alignItems:"center",color:"black",position:"relative",top:"0rem"}}>
           Hello [User Name],
            <br/>
            
      This is a notification that your [Stop-Loss/Take-Profit] order has been triggered.
           </p>

   
         
           <div style={{color:"#9AA0A9",position:"relative",top:"1.5rem",fontWeight:"600"}}>Trade Details</div> 
           
     
           <p style={{maxWidth:"70%",color:"black",fontSize:"1rem",lineHeight:"1",fontWeight:"400",textAlign:"center"}}>
           Asset: [Asset Name]<br/>
           Action: [Buy/Sell]<br/>
           Quantity: [Quantity]<br/>
           Price: [Price per Unit]<br/>
           Date: [Trade Date]<br/>

           </p>

       



           <p style={{maxWidth:"70%",color:"black",fontSize:"1rem",lineHeight:"1",fontWeight:"500",textAlign:"center",display:"flex",alignItems:"center",color:"#9AA0A9",marginTop:"-0.5rem"}}>
           We recommend reviewing your trading strategy and considering new orders based on market conditions.
           </p>


          









           <div style={{display:"flex",gap:'2rem'}}>
          <button  className='btn btn-black'> Account</button>
          <button className='btn btn-primary'>Trading History</button>
           </div>


       {/*
           <p style={{maxWidth:"70%",color:"black",fontSize:"1.2rem",lineHeight:"1",fontWeight:"600",textAlign:"center"}}>
           Thank you for choosing Tradx.io!
           </p>
         */}

         



     

      </div>
     
    

    </div>
    </header>
    
  )
}

export default Header