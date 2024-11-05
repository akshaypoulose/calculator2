import './App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {
  const [principle , setPrinciple]=useState("")
  const [rate , setRate]=useState("")
  const [year , setyear]=useState("")
  const [isPrincple ,setISPrinciple]=useState(true)
  const [ isRate,setISRate]=useState(true)
  const [isYear ,setISYear]=useState(true)
  const[Interest,setInterest]=useState(0)



  const Validate = (e)=>{
    const{name ,value}=e.target 
    console.log(name);
    console.log(value);

    if(!!value.match('^[0-9]*$')){
      if(name=='Principal'){
        setPrinciple(value)
        setISPrinciple(true)
      }
      else if(name=='Rate'){
        setRate(value)
        setISRate(true)
      }
      else{
        setyear(value)
        setISYear(true)
      }
    }
    else{
      
        if(name=='Principal'){
          setPrinciple(value)
          setISPrinciple(false)
        }
        else if(name=='Rate'){
          setRate(value)
          setISRate(false)
        }
        else{
          setyear(value)
          setISYear(false)
        }
    }
     
    }
    const handleReset = ()=>{
     setPrinciple("")
     setRate("")
     setyear("")
     setISPrinciple(true)
     setISRate(true)
     setISYear(true)
     setInterest(0)
    }
    const calculate =()=>{
      setInterest((principle*rate*year)/100)
    }
  

  return (
    <>
    <div className='bg-dark d-flex justify-content-center align-items-center' style={{width:'100%',height:'100vh'}}>
      <div className='bg-light  p-5 rounded-2 ' style={{width:'500px'}}>
      <h1>Simple Interest app</h1>
      <p>Calculate your simple Interest easily</p>
      <div className='bg-warning p-3 mt-4 d-flex justify-content-center align-items-center rounded flex-column'style={{height:'150px'}}>
        <h1>₹{Interest}</h1>
        <p>Total Simple Interest</p>
      </div>
        <div className="my-3">
        <TextField id="outlined-basic"value={principle} name='Principal' className='w-100'label="principal ammount" variant="outlined" onChange={(e)=>Validate(e)} />
          {isPrincple==false &&<p className='text-danger'>*InValid Input</p>}
        </div>
        <div className="my-3">
        <TextField id="outlined-basic"name='Rate'value={rate} className='w-100'label="Rate of Interest(%)" variant="outlined"  onChange={(e)=>Validate(e)}/>
        {isRate==false &&<p className='text-danger'>*InValid Input</p>}

        </div>
        <div className="my-3">
        <TextField id="outlined-basic"name='Year'value={year} className='w-100'label="Year(Yr)" variant="outlined" onChange={(e)=>Validate(e)} />
       {isYear==false && <p className='text-danger'>*InValid Input</p>}
        </div >
        <div className="mb-3 d-flex justify-content-between">
          <Button disabled={isPrincple && isRate && isYear ?false:true} variant="contained"className='p-3'onClick={calculate} color='success'style={{width:'190px'}}>Calculate</Button>
          <Button variant="outlined"className='p-3'onClick={handleReset} style={{width:'190px'}}>Reset</Button>
        </div>
      </div>
     
    </div>
      
    </>
  )
}



export default App
