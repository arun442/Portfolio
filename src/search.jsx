import React, { useState,useRef,useEffect } from 'react';
import MultiSelectSearch from './searchbar';
import ReactSearchBox from "react-search-box";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { IoSearch } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import './search.css'
import video from './samplevideo.mp4'
import VimeoPlayer from './Vimeoplayer';

 import { Grommet ,Card,CardHeader,CardFooter,CardBody,Button,Icons} from 'grommet';
const ParentComponent = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [displayresult,setdisplayresult]=useState([]);
 
  const videoRef = useRef(null);
  
  useEffect(()=>{
    videoRef.current.currentTime=3; 

})

const stopplay=()=>{
console.log('play');
 const myinterval= setInterval(() => {

    if (videoRef.current.currentTime > 8) {
      console.log(videoRef.current.currenTtime);
      videoRef.current.pause();
      clearInterval(myinterval);
      videoRef.current.currentTime=3; 
       }
  }, 1000);
  
}

  
  const items = [
    {
      id: 0,
      name: 'list in  python'
    },
    {
      id: 1,
      name: 'python library'
    },
    {
      id: 2,
      name: 'Basic'
    },
    {
      id: 3,
      name: 'PHP'
    },
    {
      id: 4,
      name: 'Java'
    }
  ]
  const handleOnSearch = (string, results) => {

    document.onkeypress=function(e) {
      if (e.code=='Enter' ) {
        if(string.length >1){
          let res = displayresult.findIndex(
            item => string.toLowerCase() === item.toLowerCase());
          if (res==-1) {
            var newarray=[...displayresult,string]
            setdisplayresult(newarray)
            console.log(document.getElementsByClassName('fscSBQ')[0].childNodes[0].value);
            document.getElementsByClassName('fscSBQ')[0].childNodes[0].value=" ";
            console.log('called',newarray);
          }

        }
      
        

      }

  }
}

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    const name=item.name;
    // var newarray=[];
    let res = displayresult.findIndex(
      item => name.toLowerCase() === item.toLowerCase());
console.log(res);
    if (res==-1) {
      var newarray=[...displayresult,item.name]
    setdisplayresult(newarray)
            
    }else{
      var newarray=[...displayresult]

    }
  

    // the item selected
    console.log('onselect',newarray)
  }

  const deletefield = (i) => {
    const updatedItems = [...displayresult.slice(0, i), ...displayresult.slice(i + 1)];    // the item selected
    setdisplayresult(updatedItems)
    console.log('onselect',displayresult)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }
 
  return (
    <div style={{margin:'50px'}} className='row'>
    
      
     
        <div  className='col-4' id='searchbar' >  
       
          <ReactSearchAutocomplete
            items={items}
            placeholder='search...'
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            styling={{hoverBackgroundColor: "lightgrey",color:'black',fontFamily:'Poppins'}}
            autoFocus
            showIcon={false}
            formatResult={formatResult}
            className='searchbar'

                    />
        </div>
        <div   className='col' style={{display:'flex'}}>
        <div className='row searchicon' style={{display:'flex',alignItems:'center',background:'lightgrey',borderRadius:'50px',width:'fit-content',padding:'3px',gap:'2px'}}>


        {displayresult.map((value, index) => (
              <div className="col" style={{display:'flex',height:'fit-content',alignItems:'center',background:'#124076',justifyContent:'center',borderRadius:'50px',width:'fit-content',padding:'10px',color:'white'}}>
            <label  style={{textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden',width:'50px',fontSize:'12px'}} key={index}>{value} </label><IoIosClose className='deletebtn' style={{cursor:'pointer'}} onClick={e=>deletefield(index)}/>
            
            </div>
          ))}
<IoSearch className='col searchbtn' style={{color:'#124076',height:'35px',cursor:'pointer'}} onClick={e=>{console.log('display',displayresult);}}/>
          </div>
          </div>
          <div className='row' style={{textAlign:'start',padding:'10px',marginTop:'50px'}}>
            <ul style={{listStyleType:'disc'}}>
{displayresult.map((value,index)=>(
  <li>
     {value}
</li>
))}
</ul>
  </div>
  <div>
      <video  ref={videoRef} width="640" height="360" controls>
        <source src='https://player.vimeo.com/video/910474631' type="video/mp4" ></source>
        Your browser does not support the video tag.
      </video>
      <div>
      <VimeoPlayer videoId="https://player.vimeo.com/video/910474631" startTime={50} stopTime={70} />
    </div>
      {/* <iframe ref={videoRef} src="https://player.vimeo.com/video/910474631?autoplay=1#t=30s" onPlay={stopplay} width="640" height="360"></iframe> */}
    </div>
    <Card  height="small" width="small" background="light-1">
  <CardHeader pad="medium">Header</CardHeader>
  <CardBody pad="medium">Body</CardBody>
  <CardFooter pad={{horizontal: "small"}} background="light-2">
    <Button
  
    hoverIndicator
    />
    <Button  hoverIndicator />
  </CardFooter>
</Card>
    </div>

    
  );
};

export default ParentComponent;
