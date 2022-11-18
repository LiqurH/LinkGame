
import './App.css';
import numArray from './utils/redumnum'
function App() {
  var deleteArr = [] 
  const onClick = (e) => {
    deleteArr.push(e.target)
    if(deleteArr.length >= 2 ){
      if(deleteArr[0].innerHTML === deleteArr[1].innerHTML){
        e.target.innerHTML = ''
        deleteArr[0].innerHTML =''
      }
      deleteArr = []
    }
  }
  return (
    <div className="App" onClick={onClick}>
      {
        numArray.map((item)=>{
          return <Task id={item}/>
        })
      }
    </div>
  );
}
function Task(props){
  // console.log(props);
  return (
    <div className={'Task'}>{props.id}</div>
  )
}

export default App;
