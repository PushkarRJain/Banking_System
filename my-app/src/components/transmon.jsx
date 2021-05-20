import React, {useState, useEffect} from "react";
import Axios from "axios";
import gif from "../images/buff.gif" 
function Transmon() {
  const [name_1, setname_1] = useState("");
  const [name_2,setname_2] = useState("");
  const [amt,setamt] = useState("");
  const submitReview = function(e){
    e.preventDefault();
   console.log(name_1, name_2, amt);
   var x = document.getElementById("div1");
   x.style.display = "none";
   var y = document.getElementById("div2");
   y.style.display = "block";

   var link = "http://localhost:3001/transact/"+name_1+"/"+name_2+"/"+amt ;
   console.log(link);
   Axios.get(link).then((response)=>{
     var flag = response.data.flag;
     console.log(flag);
     function disapper()
     {
       y.style.display = "none";
    
     if(flag === 1)
     {
      var z = document.getElementById("div3_s");
      z.style.display = "block";
     }
     else
     {
      var a = document.getElementById("div3_f");
      a.style.display = "block";
     }
    }
    setTimeout(disapper, 5000);
   })
  }
  return(
    
    <div>
      
      <form id="div1">
      <h1 className="viewh1">Money Transfer</h1>
      <div class="container">
      <div class="form-row">
    <div class="form-group col-md-6">
    <label >Transferee</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Customer Name" 
       onChange = {function(e){
        setname_1(e.target.value);
        }}
    />
    </div>
    <div class="form-group col-md-6">
    <label>Receiver</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Customer Name"
       onChange = {function(e){
        setname_2(e.target.value);
        }}
    />
    </div>
  </div>

  <div class="form-group amt">
    <label for="exampleFormControlInput1">Amount</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="₹"
       onChange = {function(e){
        setamt(e.target.value);
        }}
    />
  </div>
  <button type="submit" class="btn" id="paybut" onClick={submitReview}>Transfer</button>
</div>
</form>
<div id="div2"><img src = {gif}/></div>
<div id="div3_s">
<div class="container">
      <div class="cardpay">
        <div class="title">
     
      <h1 class="h2pay">Transaction successful</h1>
    </div>

  <div class="circle"></div>
  </div>
</div>
</div>
<div id="div3_f">
<div class="container">
      <div class="cardpayf">
        <div class="title">
     
      <h1 class="h2payf">Transaction Failed</h1>
    </div>

  <div class="circle"></div>
  </div>
</div>
</div>
    </div>
  );
}
export default Transmon;