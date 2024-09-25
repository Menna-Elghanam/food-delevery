import React ,{useState} from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const Navbar = ({setShowLogin}) => {
  const[menu,setMenu]=useState("home")
  
  return (
    <div className="nav-bar">
      <img src={assets.logo} alt="" className="logo" />

      <ul className="navbar-menue">

        <li onClick={()=>setMenu('home')} className={menu==="home"?"active":""} >Home</li>
        <li onClick={()=>setMenu('menu')}  className={menu==='menu'?'active':''}>Menue</li>
        <li onClick={()=>setMenu('mobile-app')}  className={menu==='mobile-app'?'active':''}>Mobile App</li>
        <li onClick={()=>setMenu('contact-us')}  className={menu==='contact-us'?'active':''}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" className="serch-icon" />
        <div className="navbar-serchicon">
          <img src={assets.basket_icon} />
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)} >Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
