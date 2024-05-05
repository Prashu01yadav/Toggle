import React,{useEffect,useState} from 'react'
import img1 from './image/om.webp'

const ColourBox = ({heading, para, imgSrc, author1, author2}) => {
  const [change, setchange] = useState(true);
  const [bgcolor, setBgcolor] = useState("black");
  
  useEffect(()=>{
    changeBg()
}, [change]);

const changeBg = () => {
        
  if(change)
      setBgcolor("red")
  else {
      setBgcolor("blue")}
  }
  return (
    <><div className='container'>
    <div id='box1'>
    <div id='box2'>
      <img src={imgSrc}/>
    </div>
    
    </div>
    <div className='title'>
      <h1 id="om" style={{backgroundColor: bgcolor}}>{heading}</h1>
      
    </div>
    <div className='para'>
      <p id='content'>{para}</p>
    </div>
    <div className='aurthor' >
    {
        change? <h1 id='h1' >{author1} </h1> : <h2 id='h2'>{author2}</h2>
    }
     <button id='click' onClick={()=>setchange(!change)}>CLICK TO TOGLE</button>
       </div>
      
 
   </div>
    </>
  

  )
}

export default ColourBox