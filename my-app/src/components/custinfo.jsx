import React, {useState, useEffect} from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
function Customerinfo()
{
  const [custList, setCustList] = useState([]);
  const { name } = useParams();
     useEffect(function(){ //display data on front end react page
      var link = "http://localhost:3001/custinfo/"+name ;
      console.log(link);
      Axios.get(link).then((response)=>{
        setCustList(response.data[0]);
       
      })

       },[])
  console.log(custList);
    return(

        <div>
            <div class="cardinfo">
  <div class="card-header">
    <h5 class="cardh1">{custList.name}</h5>
  </div>
  <div class="card-body">
    <h6 class="card-subtitle mb-2 text-muted">{custList.type} account</h6>
    <h5 class="card-title">₹{custList.balance}</h5>
    
  </div>
</div>

        </div>

    );
}
export default Customerinfo;