import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  const[amount,setamount]=useState(0)
  const[discount,setdiscount]=useState(0)
  const[disamount,setdisamount]=useState(0)
  console.log(amount,discount);

  const Calculate=(e)=>{
    const output = amount - (amount * discount) / 100;
    console.log(output);
    setdisamount(output)
  } 
  const Reset=(e)=>{
   setdisamount(0)
   setamount(0)
   setdiscount(0)
  }
  return (
    <div className="App">
     <div>
      <h2 className='text-dark'><i class="fa-solid fa-calculator fa-beat"></i> Discount Calculator</h2>
     </div>
     <div className="row">
      <div className="col-6">
        <img src="https://items.epicpxls.com/uploads/photo/78ac5b533b03c2dbf463232848463be2.gif" alt="" />
      </div>
       
      <div className="col-4">
        <h5 className='text-dark'>Enter the discount details:</h5> <br />
        <TextField style={{width:"400px"}} id="outlined-basic" value={amount||""} onChange={(e)=>setamount(e.target.value)}  label="Amount" variant="outlined" /> <br /> <br />
        <TextField style={{width:"400px"}} id="filled-basic" value={discount||""} onChange={(e)=>setdiscount(e.target.value)}  label="Discount %" variant="outlined" /> <br /> <br />
        <div className='button'>
          <Button style={{color:"black"}} onClick={e=>Calculate(e)}  variant="contained" >Calculate</Button> 
          <Button style={{color:"black"}}  onClick={e=>Reset(e)}variant="outlined">Reset</Button>
          </div>
          <br /><br />
          <div className='total'>
         <p>Your Total Amount after discount is:<h2> {disamount}</h2> </p>
        
      </div>
        </div>
     </div>
    </div>
  );
}

export default App;
