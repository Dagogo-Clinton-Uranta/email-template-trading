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
         Account Verification
           <br/>
          
          </h4>
   
         
            <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800",textAlign:"center",color:"white"}}>
            Verify Your Account with Tradx.io

           </p>




        
           <p style={{maxWidth:"70%",color:"white",fontSize:"1rem",lineHeight:"1",fontWeight:"700",textAlign:"center",display:"flex",alignItems:"center",color:"white"}}>
           Here’s a quick overview of what you can do on our platform:
           </p>


           <p style={{maxWidth:"70%",color:"white",fontSize:"1rem",lineHeight:"1",fontWeight:"300",textAlign:"center",display:"flex",alignItems:"center",color:"white"}}>
           Hello [User Name],
           <br/>
         To complete your registration with Tradx.io, we need to verify your account. Please take a moment to verify your email address or identity.
           </p>
     
         


           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"700",textAlign:"center",display:"flex",alignItems:"center",color:"#2f9ffa"}}>
          Verification Link
           </p>


           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"700",textAlign:"center",display:"flex",alignItems:"center",color:"white",color:" #9AA0A9"}}>
            What's Next:
           </p>



           <p style={{maxWidth:"70%",color:"white",fontSize:"1.1rem",lineHeight:"1",fontWeight:"400",textAlign:"left",marginTop:"0rem",marginBottom:"0rem"}}>
           Once your account is verified, you’ll have full access to all our features.

           </p>

       
           <p style={{maxWidth:"70%",color:"white",fontSize:"1.1rem",lineHeight:"1",fontWeight:"400",textAlign:"left"}}>
           You can start trading, manage your assets, and explore our advanced tools.

           </p>


           <p style={{maxWidth:"70%",color:"white",fontSize:"1.1rem",lineHeight:"1",fontWeight:"400",textAlign:"left",marginTop:"0rem",marginBottom:"0rem"}}>
           If you encounter any issues during the verification process, our support team is here to assist you.

           </p>


          

       


           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"700",textAlign:"center",display:"flex",alignItems:"center",color:"white",marginTop:"1rem"}}>
           Thank you for choosing Tradx.io !
           </p>



     

      </div>
     
    

    </div>
    </header>
    
  )
}

export default Header