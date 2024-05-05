import React,{ useEffect,useState} from 'react'

function Button() {
    const [Bgcolor, setBgcolor] = useState("green");
    const [score, setScore] = useState(11);
    const plus1 =() =>{
        setScore(score +1);
    }
    const minus1 =() =>{
        setScore(score  - 1);
    }
    const multiplyby2 =() =>{
        setScore(score*2);
    }
    const plus5 =() =>{
        setScore(score +5);
    }
    const divideby2 =() =>{
        setScore(score/2);
    }

    // console.log(score);

    useEffect(()=> {
        changeBg()
    },[score])

     const changeBg=()=>{
        if(score%2 == 0)
            setBgcolor("red")
        else if(score%3 == 0)
            setBgcolor("blue")
        else if(score%5 == 0)
            setBgcolor("pink")
        else
            setBgcolor("green")
     }

  return (
    <>
    <div className='Button'>
        <div className='box' style={{backgroundColor: Bgcolor}}>
            <h1>Value:<span id='value'>{score}</span></h1>
            </div>
    <button id='plus' onClick={plus1}>Plus</button>
    <button id='minus' onClick={minus1}>Minus1</button>
    <button id='multiplyby2' onClick={multiplyby2}>multiplyby2</button>
    <button id='plus5' onClick={plus5}>Plus5</button>
    <button id='divideby2' onClick={divideby2}>divideby2</button>
       
    </div>
    </>
  )
}

export default Button