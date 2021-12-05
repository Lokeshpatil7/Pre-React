import {createStore} from "redux";

//initialState
const initialState ={
    counter : 0,
};

//reducer
const reducer=(state=initialState, action)=>{
    const {type}= action;
    switch (type){
        case "increment" :
            //some code 
            return{
                counter: state.counter + 1,
            } ;
        case "decrement" :
            return{
                counter : state.counter - 1,
            };
        case "multiply" :
            return{
                counter : state.counter * 2,
            };
            case "division" :
            return{
                counter : state.counter / 2 ,
            };
            default :
            return state;
    } 
   // return{  counter:state.counter + 1 };  
};

//store
const store = createStore(reducer)

export default store;      