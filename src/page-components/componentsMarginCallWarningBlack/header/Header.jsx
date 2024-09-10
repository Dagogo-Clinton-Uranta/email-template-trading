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
    
   
    <header className="header-kycblack">
    <Nav/>
    <div className=" header__container-1">
      

      <div className="headerExplainer-kycblack">
         <h4 style={{marginBottom:"0rem",fontWeight:"400",fontSize:"1.8rem",color:"white",color:" #9AA0A9",fontWeight:"600",textAlign:"center"}}> 
         Margin Call Warning
           <br/>
          
          </h4>
   
         
            <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800",textAlign:"center",color:"white"}}>
            Margin Call Warning<br/>
           Immediate Action Required

           </p>




        
           <p style={{maxWidth:"70%",color:"white",fontSize:"1rem",lineHeight:"1",fontWeight:"700",textAlign:"center",display:"flex",alignItems:"center",color:"white",position:"relative",top:"2rem"}}>
           Hello [User Name],
            <br/>
           
        Your account has reached the margin call level.
        Immediate action is required to maintain your positions.
           </p>

   
         
           <div style={{color:"#9AA0A9",position:"relative",top:"1.5rem",fontWeight:"600"}}>Required Action:</div> 
           
     
           <p style={{maxWidth:"70%",color:"white",fontSize:"1rem",lineHeight:"1",fontWeight:"400",textAlign:"left"}}>
           Deposit Funds: &nbsp;&nbsp;Add additional funds to your account to meet the margin requirements.
           <br/><br/>
          Close Positions:&nbsp;&nbsp; Consider closing some positions to reduce your margin exposure.
          
           </p>

       



           <p style={{maxWidth:"70%",color:"white",fontSize:"1rem",lineHeight:"1",fontWeight:"500",textAlign:"center",display:"flex",alignItems:"center",color:"#9AA0A9",marginTop:"-0.5rem"}}>
           We recommend reviewing your trading strategy and considering new orders based on market conditions.
           </p>


          









           <div style={{display:"flex",gap:'2rem'}}>
          <button  className='btn btn-black'> Close Positions</button>
          <button className='btn btn-primary'>Deposit Funds</button>
           </div>


       
            
           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"400",textAlign:"center"}}>
           If you have any questions, click “Help”
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