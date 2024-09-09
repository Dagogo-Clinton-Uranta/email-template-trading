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
         Referral Program Invitation
           <br/>
          
          </h4>
   
         
            <p style={{maxWidth:"70%",color:"black",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800",textAlign:"center",color:"black"}}>
            Earn Rewards by Referring Friends to Tradx.io <br/>
           
             {/*<span style={{position:"relative",top:"10px"}}>on 01/20/2024 – Tradx.io</span>*/}

           </p>




        
           <p style={{maxWidth:"70%",color:"black",fontSize:"1rem",lineHeight:"1",fontWeight:"500",textAlign:"center",display:"flex",alignItems:"center",color:"black",position:"relative",top:"-1rem"}}>
           Hello [User Name],
            <br/>
         
          We’re excited to invite you to join our Referral
           Program and start earning rewards!
           </p>


         
           <div style={{color:"#9AA0A9",position:"relative",top:"0rem",fontWeight:"600"}}>How It Works:</div> 
           
     
           <p style={{maxWidth:"70%",color:"black",fontSize:"1rem",lineHeight:"1",fontWeight:"400",textAlign:"center"}}>
           Share your unique referral link with friends and family.
       When they sign up and start trading, you’ll earn [specific reward, e.g., cash bonuses, trading credits].
           </p>

           <p style={{maxWidth:"70%",color:"black",fontSize:"1.2rem",lineHeight:"1",fontWeight:"500",textAlign:"center",display:"flex",alignItems:"center",color:"#2f9ffas",position:"relative",top:"-1rem"}}>
           Your Personalized Referral Link:
           </p>

           <div style={{color:"#2f9ffa",position:"relative",top:"-1.5rem",fontWeight:"600",fontSize:"1.5rem"}}>Referral Link:</div> 

           <p style={{maxWidth:"70%",color:"black",fontSize:"1rem",lineHeight:"1",fontWeight:"500",textAlign:"center",display:"flex",alignItems:"center",color:"black",marginTop:"-0.5rem"}}>
           The more you share, the more you earn! Spread the word
            and help others discover the benefits of trading on Tradx.io
           </p>




          









           <div style={{display:"flex",gap:'2rem'}}>
           <button  className='btn '>Copy Link</button>
          <button  className='btn btn-black'> OK</button>
         
           </div>


       
            
           <p style={{maxWidth:"70%",color:"black",fontSize:"1rem",lineHeight:"1",fontWeight:"400",textAlign:"center"}}>
           Thank you for being a valued member of our community
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