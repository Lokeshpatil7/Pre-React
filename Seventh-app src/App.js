import logo from './logo.svg';
import './App.css';
import Person from './Person';
import Course from './Course';
import ClassComponentConversion from './ClassComponentConversion';
import FunctionComponent from './FunctionComponent';
import OnlineOrdersChild from './OnlineOrdersChild';
import OnlineOrders from './OnlineOrders';
import UseEffectExample from './UseEffectExample';


function App() {
  return (
    <>
    <div className="App">
     <h1>from app</h1>
     <UseEffectExample/>
     {/* <OnlineOrders/>
     <OnlineOrdersChild/> */}
     {/* <ClassComponentConversion/> */}
     {/* <FunctionComponent/> */}
     {/* <Person/> */}
     {/* <Course/> */}
    </div>
    </>
  );
}

export default App;
