import { Component } from "react";

import {connect} from "react-redux"

class NewCounter extends Component{
    render(){
        return(
        <>
        <div ></div>
        <h1>NewCounter : {this.props.counter}</h1>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
        <button onClick={this.props.multiply}>multiply</button>
        <button onClick={this.props.division}>Divide</button>
        </>
        );
    }
}

const mapStateToProps =(state) =>{
    return{
        counter:state.counter,
    };
};

const mapDispatchToProps=(dispatch)=>{
    return{
        increment:()=> dispatch({type:"increment"}),
        decrement:()=>dispatch({type: "decrement"}),
        multiply:()=> dispatch({type:"multiply"}),
        division:()=> dispatch({type:"division"}),
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(NewCounter);