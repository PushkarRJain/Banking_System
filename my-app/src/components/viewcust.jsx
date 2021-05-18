import React, {useState, useEffect} from "react";
import Axios from "axios";
function Viewcust() {
  const [name, setname] = useState("");
  const [bal,setbal] = useState("");
  const [type,settype] = useState("");
  const [custList, setCustList] = useState([]);
  useEffect(function(){
    Axios.get('http://localhost:3001/api/get').then(function(response){
      setCustList(response.data);
    })
  },[])
  const submitReview = function(){
    Axios.post('http://localhost:3001/api/insert',{
      name:name, 
      bal: bal,
      type: type
      }).then({},function(){
        alert('Success')
      })
  }
  const disappear = function (){
    var x = document.getElementById("form");
 
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
  }
  return(
    <div>
      <h1 className="viewh1" >Our Esteemed Customers</h1>

    <button class="plusbut" onClick={disappear}><i class="plus fa fa-plus-circle fa-4x"></i></button>

      <div className="form">
      <div id="form">
        <label>Full Name</label>
        <input type="text" name="fullName"  onChange = {function(e){
          setname(e.target.value);
        }}></input>
        <label>Account Balance</label>
        <input type="text" name="accBal"  onChange = {function(e){
          setbal(e.target.value);
        }}></input>
        <label>Account Type</label>
        <input type="text" name="accType"  onChange = {function(e){
          settype(e.target.value);
        }}></input>
        <button onClick={submitReview}>Submit</button>
        </div>
        {custList.map((val)=>{

          return <div class="cardcust">
          <div class="card-header">
            <h1 class="cardh1">{val.name}</h1>
          </div>
          <div class="card-body">
          <h5 class="card-title">{val.type}</h5>
          
          <a href={"/custinfo/"+val.name} class="btn">View</a>
  </div>
</div>
        })}
        </div>   
    </div>
  );
}
export default Viewcust;