import { useRef } from "react";
function Other() {
 const updateInput= useRef(null)
function inputHandle(){
  updateInput.current.focus()
  updateInput.current.placeholder="put some value"
  updateInput.current.style.color="red"
}
  return (
    <div>
      <h1>Practice of Use Ref Hook </h1>
      <input type="text" ref={updateInput}/>
      <button onClick={inputHandle}>Click for Update</button>
    </div>
  );
}
export default Other;
