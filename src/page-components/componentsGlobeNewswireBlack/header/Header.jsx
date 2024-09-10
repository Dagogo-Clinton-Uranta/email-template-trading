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
          Globe Newswire
           <br/>
          
          </h4>
   
         
            <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800",textAlign:"center"}}>
            OKX Wallet Integrates Aurelius Finance,Enhancing DeFi Lending Op

            <p style={{maxWidth:"100%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"800"}}>
            01.23.2024
           </p>
           </p>



     
           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"400",textAlign:"center"}}>
           SINGAPORE, Aug. 24, 2024 (Globe NEWSWIRE) - OKX, a leading Web3 technology company,
            has issued updates for August 24, 2024. OKX Wallet Integrates Aurelius Finance, 
            Enhancing DeFi Lending Opt...

       
           </p>


           <p style={{maxWidth:"70%",color:"white",fontSize:"1.2rem",lineHeight:"1",fontWeight:"400",textAlign:"center",display:"flex",alignItems:"center",color:"#2f9ffa",marginTop:"-0.5rem"}}>
           <FaRegClock/> &nbsp;15 min Read
           </p>









           <div style={{display:"flex",gap:'2rem'}}>
          <button  className='btn btn-black'> Remind later</button>
          <button className='btn btn-primary'> Read More</button>
           </div>



     

      </div>
     
    

    </div>
    </header>
    
  )
}

export default Header