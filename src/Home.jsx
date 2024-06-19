import {React, useEffect, useRef, useState} from "react";
import "./Home.css";
import CodeIcon from "./Images/Code Icon.png";
import programmer from './Images/programmer.png';
import Profile from "./Images/profile.png";
import eblogo from './Images/eblogo.png'
import sagebg from './Images/sagebg.png'
import stubg from './Images/stubg.png'
import vloger from './Images/vlogger.gif'
import website from './Images/website.gif'
import Blob from "./Images/blob.png";
import services from './Images/services.jpg'
import surveybg from'./Images/surveybg.png'
import iosapp from './Images/iosapp.png'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import mobileapp from './Images/mobileapp1.png'
import webapp from './Images/web.jpg'
import { MdJavascript } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { IoLogoIonic } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { MdRocketLaunch } from "react-icons/md";
import ReactCardSlider from 'react-card-slider-component';
import rocket from './Images/rocket4.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home() {
  function handleScroll() {
    console.log('k');
    window.scroll({
      top: 0,
      left: 0, 
      behavior: 'smooth',
    });  }

    
    const [mybutton,setmybutton] = useState();

    useEffect(()=>{
setmybutton(document.getElementById("upbtn1"))
    },[])

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction(); 
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
  var settings = {
    autoplay:true,
    infinite: true,
    speed: 500,
    autoplay0Speed: 5000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive:[
      {
      breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
           }
             }
    ]
  };

  const skillsref = useRef(null);
  const serviceref=useRef(null);
  const portfolioref=useRef(null);
  const homeref=useRef(null);
  const contactref=useRef(null);

  

  const executeScroll = (refname) => {
    console.log(refname);
    console.log(refname.current)
    if (refname.current) {
      refname.current.scrollIntoView();
    }
  }
 
  return (
    <div
      className="container-fluid m-0   p-0"
      style={{ height: "100vh" }}
    >
      <div
        className="row overall m-0 justify-content-between"
        style={{
          backgroundColor: "#4D4C7D",
          height: "15vh",
          fontFamily: "Poppins SemiBold",
        }}
      >
        <img src={rocket} className="scrollup" id="upbtn1" onClick={handleScroll} />
        <div
          className="col-sm-4 Intro2 p-0"
          style={{
            height: "100%",
            textAlign: "start",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={programmer} style={{ height: "60%",marginLeft:'20px' }} />
          
        </div>
        <div
          className="col-sm-8  p-0"
          style={{
            display: "flex",
            color: "white",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="col">
            <button onClick={e=>{executeScroll(homeref)}}>HOME</button>
          </div>
          <div className="col">
            <button onClick={e=>{executeScroll(serviceref)}}>SERVICE</button>
          </div>
          <div className="col">
            <button onClick={e=>{executeScroll(skillsref)}}>SKILLS</button>
          </div>
          <div className="col">
            <button onClick={e=>{executeScroll(portfolioref)}}>PORTFOLIO</button>
          </div>
          <div className="col">
            <button onClick={e=>{alert("hii")}}>CONTACT</button>
          </div>
        </div>
      </div>
      <div
        className="row  m-0" ref={homeref}
        style={{
          backgroundColor: "#4D4C7D",
          fontFamily: "Poppins SemiBold",
        }}
      >
        <div
          className="col-sm-7 "
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "30px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              textAlign: "justify",
              position: "relative",
              color: "#FFF8C9",
            }}
          >
            <h2>
              Hi, I'm <span style={{ color: "#FFCF81" }}>Arun Kumar,</span>
            </h2>
            <p style={{ fontFamily: "Poppins Medium" }}>
              {" "}
              A Passionate{" "}
              <b style={{ color: "#FFCF81" }}>frontend developer</b> adept
              at translating creative designs into seamless user experiences,
              Committed to staying at the forefront of emerging technologies to
              deliver innovative and visually stunning web and mobile
              applications.
            </p>
            <div className="row">
            <ul class="example-2">
  <li class="icon-content">
    <a
      data-social="Instagram"
      aria-label="Instagram"
      href="https://www.instagram.com/"
      target="_blank"
    >
      <div class="filled"></div>
      <FaInstagram/>
    </a>
    <div class="tooltip">Instagram</div>
  </li>
  <li class="icon-content">
    <a
      data-social="Linkedin"
      aria-label="Linkedin"
      href="https://www.linkedin.com/in/arun-kumar-s-70a942214/"
      target="_blank"
    >
      <div class="filled"></div>
      < FaLinkedinIn />
          </a>
    <div class="tooltip">Linkedin</div>
  </li>
  <li class="icon-content">
    <a
      data-social="Gmail"
      aria-label="Gmail"
      href="mailto:arunkumarmca2000@gmail.com"
    >
      <div class="filled"></div>
      <MdOutlineMail/>
    </a>
    <div class="tooltip">Gmail</div>
  </li>
  <li class="icon-content">
    <a
      data-social="whatsapp"
      aria-label="Whatsapp"
      href="https://api.whatsapp.com/send?phone=6379169093"
       target='_blank'>
    
      <div class="filled"></div>
     <FaWhatsapp/>
    </a>
    <div class="tooltip">Whatsapp</div>
  </li>
</ul>
</div>
          </div>
        </div>
        <div className="col-sm"></div>
        <div
          className="col-sm-4 Intro p-0"
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
          }}
        >
          <img src={Profile} style={{ height:"300px"}} />
        </div>
      </div>
      <div className="row m-0 servicepage" ref={serviceref} style={{padding:'20px'}}>
      <div className="row m-0" style={{display:'flex',alignItems:'center',height:'100px'}}>
        <div className="col-4 m-0 " style={{color:'white',textAlign:'start', fontFamily: "Poppins SemiBold"}}>
          <div className="row">         
           <h6>SERVICES</h6></div>
           <div className="row">
           <h1> WHAT I DO</h1>
          </div>
</div>
        <div className="col-8 m-0 p-0" >      
         <div class="loader1"></div>
</div>
       
</div>
<div className="row m-0" style={{padding:'30px'}}>
  <div className="col-sm-4" >
  <div class="card servicecard" >
  <img src={iosapp} style={{margin:'20px auto',borderRadius:'10px',height:'70%',width:'70%'}}/>
  <div class="card-body">
    <h5 class="card-title" style={{fontFamily:"Poppins SemiBold"}} >IOS Development</h5>
    <p class="card-text" >iOS development involves creating mobile applications for Apple's iOS platform  with deployment on  APP Store. </p>
  </div>
</div>
  </div>
<div className="col-sm-4">
<div class="card servicecard" >
  <img src={webapp} style={{margin:'20px auto',borderRadius:'10px',height:'70%',width:'70%'}}/>
  <div class="card-body">
    <h5 class="card-title"  style={{fontFamily:"Poppins SemiBold"}}>Web Development</h5>
    <p class="card-text">Web development entails building and maintaining websites and web applications.</p>
  </div>
</div>

  </div>
  <div className="col-sm-4">
  <div class="card servicecard" >
  <img src={mobileapp} style={{margin:'20px auto',borderRadius:'10px',height:'70%',width:'70%'}}/>
  <div class="card-body">
    <h5 class="card-title"  style={{fontFamily:"Poppins SemiBold"}}>Android Development</h5>
    <p class="card-text">Android development: Crafting mobile applications for Android devices with deployment on  Google Play Store.</p>
  </div>
</div>


  </div>
  </div>
        </div> 
      <div className="row m-0 skillpage  "  ref={skillsref}
        style={{ fontFamily: "Poppins SemiBold",backgroundColor:'#1e242b'}}
      >
       <div className="row m-0" style={{display:'flex',alignItems:'center'}}>
       <div className="col-5 m-0 p-0" >
       <div class="loader1"></div>
       </div>
        <div className="col-2 m-0 " style={{color:'white',textAlign:'center'}}><h2>SKILLS</h2></div>
        <div className="col-5 m-0 p-0" >
        <div class="loader2"></div>

        </div>
</div>
<div className="row" style={{display:'flex',alignItems:'center',justifyContent:'end'}}>
  
<div className="row skillbox" style={{color:'white',padding:'20px'}}>
  <div className="row" style={{marginBottom:'20px'}}>
  <div className="col-4" style={{marginBottom:'10px'}}>
  <div className="row" style={{display:'flex',justifyContent:"center",marginBottom:'5px'}}>
  <button class="button">
  <div class="bloom-container">
    <div class="button-container-main">
      <div class="button-inner">
        <div class="back"></div>
        <div class="front">
        <FaHtml5 className="skilllogo" style={{backgroundColor:'#dd4b25',height:'50px',width:'50px',transform:'rotate(45deg)'}}/>        </div>
      </div>
      <div class="button-glass">
        <div class="back"></div>
        <div class="front"></div>
      </div>
    </div>
    <div class="bloom bloom1"></div>
    <div class="bloom bloom2">
  </div>
  </div></button>
</div>
    <div className="row" style={{display:'flex',justifyContent:"center"}}>HTML</div>
    </div>
  <div className="col-4"style={{marginBottom:'10px'}}>
  <div className="row" style={{display:'flex',justifyContent:"center",marginBottom:'5px'}}>
  <button class="button">
  <div class="bloom-container">
    <div class="button-container-main">
      <div class="button-inner">
        <div class="back"></div>
        <div class="front">
        <FaCss3Alt className="skilllogo" style={{backgroundColor:'#006cb4',color:'white',height:'50px',width:'50px',transform:'rotate(45deg)'}}/>
        </div>
      </div>
      <div class="button-glass">
        <div class="back"></div>
        <div class="front"></div>
      </div>
    </div>
    <div class="bloom bloom1"></div>
    <div class="bloom bloom2">
  </div>
  </div></button>
    </div>
    <div className="row" style={{display:'flex',justifyContent:"center"}}>CSS</div>
    </div>
    <div className="col-4"style={{marginBottom:'10px'}}>
    <div className="row" style={{display:'flex',justifyContent:"center",marginBottom:'5px'}}>
    <button class="button">
  <div class="bloom-container">
    <div class="button-container-main">
      <div class="button-inner">
        <div class="back"></div>
        <div class="front">
        <MdJavascript className="skilllogo" style={{backgroundColor:'yellow',color:'black',height:'50px',width:'50px',transform:'rotate(45deg)'}}/> 
        </div>
      </div>
      <div class="button-glass">
        <div class="back"></div>
        <div class="front"></div>
      </div>
    </div>
    <div class="bloom bloom1"></div>
    <div class="bloom bloom2">
  </div>
  </div></button>
   </div>
    <div className="row" style={{display:'flex',justifyContent:"center"}}>JAVA SCRIPT</div>
    </div>
     <div className="col-4"style={{marginBottom:'10px'}}>
  <div className="row" style={{display:'flex',justifyContent:"center",marginBottom:'10px'}}>
  <button class="button">
  <div class="bloom-container">
    <div class="button-container-main">
      <div class="button-inner">
        <div class="back"></div>
        <div class="front">
        <FaReact className="skilllogo" style={{backgroundColor:'#000',color:'#12d8f4',height:'50px',width:'50px',transform:'rotate(45deg)'}}/>
        </div>
      </div>
      <div class="button-glass">
        <div class="back"></div>
        <div class="front"></div>
      </div>
    </div>
    <div class="bloom bloom1"></div>
    <div class="bloom bloom2">
  </div>
  </div></button>
    </div>
    <div className="row" style={{display:'flex',justifyContent:"center"}}>REACT</div>
    </div>
  <div className="col-4"style={{marginBottom:'10px'}}>
  <div className="row" style={{display:'flex',justifyContent:"center",marginBottom:'5px'}}>
  <button class="button">
  <div class="bloom-container">
    <div class="button-container-main">
      <div class="button-inner">
        <div class="back"></div>
        <div class="front">
        <FaAngular className="skilllogo" style={{backgroundColor:'#bd002e',color:'white',height:'50px',width:'50px',transform:'rotate(45deg)'}}/>
        </div>
      </div>
      <div class="button-glass">
        <div class="back"></div>
        <div class="front"></div>
      </div>
    </div>
    <div class="bloom bloom1"></div>
    <div class="bloom bloom2">
  </div>
  </div></button>
    </div>
    <div className="row" style={{display:'flex',justifyContent:"center"}}>ANGULAR</div>
    </div>
    <div className="col-4"style={{marginBottom:'10px'}}>
    <div className="row" style={{display:'flex',justifyContent:"center",marginBottom:'5px'}}> 
    <button class="button">
  <div class="bloom-container">
    <div class="button-container-main">
      <div class="button-inner">
        <div class="back"></div>
        <div class="front">
        <IoLogoIonic className="skilllogo" style={{backgroundColor:'#1b69f7',color:'white',height:'50px',width:'50px',transform:'rotate(45deg)'}}/>        </div>
      </div>
      <div class="button-glass">
        <div class="back"></div>
        <div class="front"></div>
      </div>
    </div>
    <div class="bloom bloom1"></div>
    <div class="bloom bloom2">
  </div>
  </div></button>  </div>
    <div className="row" style={{display:'flex',justifyContent:"center"}}>IONIC</div>
    </div>
    <div className="col-4"style={{marginBottom:'10px'}}>
    <div className="row" style={{display:'flex',justifyContent:"center",marginBottom:'5px'}}> 
    <button class="button">
  <div class="bloom-container">
    <div class="button-container-main">
      <div class="button-inner">
        <div class="back"></div>
        <div class="front">
        <FaBootstrap className="skilllogo" style={{backgroundColor:'white',color:'#8512f7',height:'50px',width:'50px',transform:'rotate(45deg)'}}/>        </div>
      </div>
      <div class="button-glass">
        <div class="back"></div>
        <div class="front"></div>
      </div>
    </div>
    <div class="bloom bloom1"></div>
    <div class="bloom bloom2">
  </div>
  </div></button>  </div>
    <div className="row" style={{display:'flex',justifyContent:"center"}}>Bootstrap</div>
    </div>
    <div className="col-4"style={{marginBottom:'10px'}}>
    <div className="row" style={{display:'flex',justifyContent:"center",marginBottom:'5px'}}> 
    <button class="button">
  <div class="bloom-container">
    <div class="button-container-main">
      <div class="button-inner">
        <div class="back"></div>
        <div class="front">
        <SiExpress className="skilllogo" style={{backgroundColor:'black',color:'white',height:'50px',width:'50px',transform:'rotate(45deg)'}}/>        </div>
      </div>
      <div class="button-glass">
        <div class="back"></div>
        <div class="front"></div>
      </div>
    </div>
    <div class="bloom bloom1"></div>
    <div class="bloom bloom2">
  </div>
  </div></button>  </div>
    <div className="row" style={{display:'flex',justifyContent:"center"}}>Express JS</div>
    </div>
    <div className="col-4"style={{marginBottom:'10px'}}>
    <div className="row" style={{display:'flex',justifyContent:"center",marginBottom:'5px'}}> 
    <button class="button">
  <div class="bloom-container">
    <div class="button-container-main">
      <div class="button-inner">
        <div class="back"></div>
        <div class="front">
        <SiMongodb className="skilllogo" style={{backgroundColor:'black',color:'#118d4d',height:'50px',width:'50px',transform:'rotate(45deg)'}}/>        </div>
      </div>
      <div class="button-glass">
        <div class="back"></div>
        <div class="front"></div>
      </div>
    </div>
    <div class="bloom bloom1"></div>
    <div class="bloom bloom2">
  </div>
  </div></button>  </div>
    <div className="row" style={{display:'flex',justifyContent:"center"}}>MongoDB</div>
    </div>
  </div>
     </div> 
      </div>


      </div>
    <div className="row m-0 portfoliopage" ref={portfolioref} style={{ padding:'10px'}}>
    <div className="row m-0" style={{display:'flex',alignItems:'center'}}>
       <div className="col-4 m-0 p-0" >
       <div class="loader1"></div>
       </div>
        <div className="col-4 m-0 " style={{color:'white',textAlign:'center'}}><h2>My Portfolio</h2></div>
        <div className="col-4 m-0 p-0" >
        <div class="loader2"></div>

        </div>
</div>
      <div className="row" style={{marginTop:'20px'}}>
        
      <Slider {...settings}>
      <div>
      <div className="cardporfolio" style={{margin:'auto',width:'60%',borderRadius:'15px',height:'100%'}}>
      <div className="cardimg" style={{padding:'10px'}}>
<img src={sagebg} style={{width:'100%',borderRadius:'15px'}}/>
</div>
          <div class="card-body" style={{textAlign:'start'}}>
          <div className="row" style={{padding:'10px'}}>
                      <p class="card-text" style={{ fontFamily: "Poppins",color:'white',margin:0}}>WEB DEVELOPMENT</p>

                        <div className="col">
                        <h5 class="card-title" style={{ fontFamily: "Poppins SemiBold"}}>SAGE</h5>
                        </div>
                        <div className="col" style={{textAlign:'end'}}>
                        <FaArrowCircleRight className="cardicon"  />
                        </div>
                      </div>
  </div>
        </div>      </div>
      <div>
      <div className="cardporfolio" style={{margin:'auto',width:'60%',borderRadius:'15px',height:'100%'}}>
        <div className="cardimg" style={{padding:'10px'}}>
        <img src={eblogo} style={{width:'100%',borderRadius:'15px',margin:'auto'}}/>
        </div>
          <div class="card-body" style={{textAlign:'start'}}>
                      <div className="row" style={{padding:'10px'}}>
                      <p class="card-text" style={{ fontFamily: "Poppins",color:'white',margin:0}}>IOS , ANDROID</p>

                        <div className="col">
                        <h5 class="card-title" style={{ fontFamily: "Poppins SemiBold"}}>BRIDGESTONE</h5>
                        </div>
                        <div className="col" style={{textAlign:'end'}}>
                        <FaArrowCircleRight className="cardicon"  />
                        </div>
                      </div>
   
  </div>
        </div>        </div>
      <div>
      <div className="cardporfolio" style={{margin:'auto',width:'60%',borderRadius:'15px',height:'100%'}}>
      <div className="cardimg" style={{padding:'10px'}}>
<img src={stubg} style={{width:'100%',borderRadius:'15px'}}/>
</div>
          <div class="card-body" style={{textAlign:'start'}}>
          <div className="row" style={{padding:'10px'}}>
                      <p class="card-text" style={{ fontFamily: "Poppins",color:'white',margin:0}}>WEB DEVELOPMENT</p>

                        <div className="col">
                        <h5 class="card-title" style={{ fontFamily: "Poppins SemiBold"}}>STU</h5>
                        </div>
                        <div className="col" style={{textAlign:'end'}}>
                        <FaArrowCircleRight className="cardicon"  />
                        </div>
                      </div>
  </div>
        </div>
      </div>
      <div>
      <div className="cardporfolio" style={{margin:'auto',width:'60%',borderRadius:'15px',height:'100%'}}>
      <div className="cardimg" style={{padding:'10px'}}>
<img src={surveybg} style={{width:'100%',borderRadius:'15px'}}/>
</div>
          
          <div class="card-body" style={{textAlign:'start'}}>
          <div className="row" style={{padding:'10px'}}>
                      <p class="card-text" style={{ fontFamily: "Poppins",color:'white',margin:0}}>WEB DEVELOPMENT</p>

                        <div className="col-9">
                        <h5 class="card-title" style={{ fontFamily: "Poppins SemiBold"}}>SURVEY TOOL</h5>
                        </div>
                        <div className="col-3" style={{textAlign:'end'}}>
                        <FaArrowCircleRight className="cardicon"   />
                        </div>
                      </div>
  </div>
        </div>              </div>
       </Slider>
      </div>
    </div>
    </div>
  );
}

export default Home;
