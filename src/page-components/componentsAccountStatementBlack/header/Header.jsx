import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header-acsblack.css'


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
    
   
    <header className="header-acsblack">
    <Nav/>
    <div className=" header__container-1">
      

      <div className="headerExplainer-acsblack" >
         <h4 style={{marginBottom:"0rem",fontWeight:"400",fontSize:"1.8rem",color:"white",color:" #9AA0A9",fontWeight:"600"}}> 
          Account Statement
           <br/>
          
          </h4>
   
         <div style={{position:"relative",left:"10%",textAlign:"center"}}>
            <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800",textAlign:"center"}}>
            Your Monthly Account Statement

            <p style={{maxWidth:"100%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800"}}>
           August 2024
           </p>
           </p>



           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"700",textAlign:"center",color:" #9AA0A9"}}>
           The total amount of withdrawals:

           <p style={{color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"700",textAlign:"center",color:"white"}}>
           $65,000
           </p>
           </p>
           
        


           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"700",textAlign:"center",color:" #9AA0A9"}}>
           The total amount of deposits:

           <p style={{color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"700",textAlign:"center",color:"white"}}>
           $75,000
           </p>

           </p>
         


           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"700",textAlign:"center",color:" #9AA0A9"}}>
           Number of trades:

           <p style={{color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"700",textAlign:"center",color:"white"}}>
           569
           </p>
           </p>
         



           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"700",textAlign:"center",color:" #9AA0A9"}}>
           Number of deposits:

           <p style={{color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"700",textAlign:"center",color:"white"}}>
           45
           </p>
           </p>
         



           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"700",textAlign:"center",color:" #9AA0A9"}}>
           Commission for the month amounted to:

           <p style={{color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"700",textAlign:"center",color:"white"}}>
           $1000
           </p>
           </p>
      </div>

           <div style={{display:"flex",gap:'2rem'}}>
          <button  className='btn btn-black'> Download the Report</button>
          <button className='btn btn-primary'> Online Report</button>
           </div>



     

      </div>
     
    

    </div>
    </header>
    
  )
}

export default Header