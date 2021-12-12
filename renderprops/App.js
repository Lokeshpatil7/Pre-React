import logo from "./logo.svg";
import "./App.css";
import NormalProps from "./NormalProps";
import Incrementer from "./Incrementer";
import Increment from "./Increment";
import NewIncrement from "./NewIncrement";
import Decrementer from "./Decrementer";
import NewDecrement from "./NewDecrement";
import Decrement from "./Decrement";
import DemoComponent from "./DemoComponent";
import Reconciliation from "./Reconciliation";

function App() {
  return (
    <div className="App">
      <Reconciliation />
      {/* <DemoComponent /> */}

      {/* <NormalProps
        render={(someValue) => {
          return "old name " + someValue;
        }}
      /> */}

      {/* <Incrementer
      render = {(value , onClickHandler)=>{
        return <Increment value={value} onClickHandler={onClickHandler} 
      />;
     }}/> */}

      {/* <Incrementer
      render = {(value , onClickHandler)=>{
        return <NewIncrement value={value} onClickHandler={onClickHandler} 
      />;
     }}/> */}

      {/* <Decrementer 
render={(value, onClickHandler)=>{
  return<Decrement  value={value} onClickHandler={onClickHandler} />;
}}
/> */}

      {/* <Decrementer 
render={(value, onClickHandler)=>{
  return<NewDecrement  value={value} onClickHandler={onClickHandler} />;
}}
/> */}
    </div>
  );
}

export default App;
