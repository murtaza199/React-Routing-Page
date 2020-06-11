import {useState} from "react"
function Other() {
const[count,setCount]=useState(0)
   return( <div>
      <h1>{count}</h1>
<button onClick={()=>setCount(count+1)}>Update Count</button>
    </div>
  );
}
export default Other;
