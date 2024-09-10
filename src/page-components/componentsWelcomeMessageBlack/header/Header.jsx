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
    
   
    <header className="header-welblack">
    <Nav/>
    <div className=" header__container-1">
      

      <div className="headerExplainer-welblack">
         <h4 style={{marginBottom:"0rem",fontWeight:"400",fontSize:"1.8rem",color:"white",color:" #9AA0A9",fontWeight:"600",textAlign:"center"}}> 
         Welcome to Tradx.io!
           <br/>
          
          </h4>
   
         
            <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800",textAlign:"center",color:"white"}}>
            Hello [User Name], Thank you for joining Tradx.io!We’re excited to have you on board.

           </p>




        
           <p style={{maxWidth:"70%",color:"white",fontSize:"1rem",lineHeight:"1",fontWeight:"700",textAlign:"center",display:"flex",alignItems:"center",color:"white",position:"relative",top:"2rem"}}>
           Here’s a quick overview of what you can do on our platform:
           </p>
     
           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"400",textAlign:"left"}}>
           <b>Trade with Ease:</b> Access a wide range of cryptocurrencies and start trading instantly.



           </p>


           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"400",textAlign:"left",marginTop:"0rem",marginBottom:"0rem"}}>
           <b>Advanced Tools: </b> Utilize our powerful trading tools and analytics to make informed decisions.

           </p>


           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"400",textAlign:"left",marginTop:"0rem",marginBottom:"0rem"}}>
           <b> Secure & Reliable:</b>  Your security is our priority, with top-notch measures to keep your assets safe.

           </p>

       



           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"700",textAlign:"center",display:"flex",alignItems:"center",color:"#2f9ffa",marginTop:"-0.5rem"}}>
          Happy Trading!
           </p>


           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"700",textAlign:"center",display:"flex",alignItems:"center",color:"white",marginTop:"-0.5rem"}}>
            The Tradx.io Team
           </p>


          









           <div style={{display:"flex",gap:'2rem'}}>
          
          <button className='btn btn-primary'>Start Trading</button>
           </div>


       
           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"400",textAlign:"center"}}>
           If you have any questions, click “Help”
           </p>


           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"700",textAlign:"center",display:"flex",alignItems:"center",color:"#2f9ffa",marginTop:"-0.5rem"}}>
           Help
           </p>



     

      </div>
     
    

    </div>
    </header>
    
  )
}

export default Header