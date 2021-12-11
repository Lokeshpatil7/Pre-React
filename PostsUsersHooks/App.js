import logo from './logo.svg';
import './App.css';
import Person from './Person';
import Course from './Course';
import ClassComponentConversion from './ClassComponentConversion';
import FunctionComponent from './FunctionComponent';
import OnlineOrdersChild from './OnlineOrdersChild';
import OnlineOrders from './OnlineOrders';
import UseEffectExample from './UseEffectExample';
import HooksSample from './HooksSample';
import RefParent from "./RefParent";
import PortalDemo from './PortalDemo';
import ProfilerDemo from './ProfilerDemo';
import UserHook from './UserHook';
import Practice from './Practice';




function App() {
  // const onClickHandler = ()=>{
  //  // console.log("Clicked");
  // };
  return (
    <>
    <div className="App"  >
     <h1>from app</h1>
     {/* <Practice/> */}
     <UserHook/>
     {/* <HooksSample/> */}
     
    </div>
    </>
  );
}

export default App;
