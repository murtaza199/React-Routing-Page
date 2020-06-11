import "./App.css";
import Other from './Other';
function App() {
  
  return (
    <div class="App">
      <Other/>
      <HOCRed cmp={Other}/>
      <HOCYellow cmp={Other}/>
      <HOCBlue cmp={Other}/>
    </div>
  );
}
function HOCRed(props){
  return (<div className="primary"><props.cmp/></div>)
}
function HOCYellow(props){
  return (<div className="secondary"><props.cmp/></div>)
}
function HOCBlue(props){
  return (<div className="third"><props.cmp/></div>)
}
export default App;
