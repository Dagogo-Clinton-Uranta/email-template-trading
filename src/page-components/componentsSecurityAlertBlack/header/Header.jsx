import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header-dcblack.css'


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
    
   
    <header className="header-dcblack">
    <Nav/>
    <div className=" header__container-1">
      

      <div className="headerExplainer-dcblack">
         <h4 style={{marginBottom:"0rem",fontWeight:"400",fontSize:"1.8rem",color:"white",color:" #9AA0A9",fontWeight:"600"}}> 
          Security Alert
           <br/>
          
          </h4>
   
         
            <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800",textAlign:"center",color:"red"}}>
            Security Alert: Unusual Activity Detected on Your Account

           </p>




        
           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"700",textAlign:"center",display:"flex",alignItems:"center",color:"white",marginTop:"0.5rem"}}>
           Protect Your Account!
           </p>
     
           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"400",textAlign:"center"}}>
           Provide detailed information about your activity and learn how 
           to make your account even more secure. Take steps to protect
            your data and prevent unauthorized access.

           </p>

       



           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"700",textAlign:"center",display:"flex",alignItems:"center",color:"#2f9ffa",marginTop:"-0.5rem"}}>
           Check now | Learn more
           </p>


          









           <div style={{display:"flex",gap:'2rem'}}>
          <button  className='btn btn-black'> Remind later</button>
          <button className='btn btn-primary'> Read More</button>
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