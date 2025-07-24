import React from 'react';
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {Counter: 1};
        console.log("Constructor called");
    }
    increamentData(){
        if(this.state.Counter > 3){
            this.setState({ msg: "Sorry Value is > 3"})
        }else{
            this.setState({ Counter: this.state.Counter+1,msg:''})
        }
    }
    decrementData(){
        if(this.state.Counter<1){
            this.setState({ msg: "Sorry Value is < 1"})
        }else{
            this.setState({ Counter: this.state.Counter-1,msg:''})
        }
    }

    componentDidMount(){
        console.log("Component Did Mount called");
    }

    componentDidUpdate(){
        console.log("Component Did Update called");
    }
    render(){
        console.log("Render called");
        var a=10
        return(
            <>
            <h1>Counter App</h1>
            A value is {a}
            Counter Value is {this.state.Counter} <br/>
            <input type='button' value=" + " onClick={this.increamentData.bind(this)}/>
            <input type='button' value=" - " onClick={this.decrementData.bind(this)}/>
            <br/>
            <p style={{ color: 'red'}}>{this.state.msg}</p>
            <br/>
            <input type='button' value=" + " onClick={()=> this.setState({Counter: this.state.Counter+1})}/>
            <input type='button' value=" - " onClick={()=> this.setState({Counter: this.state.Counter-1})}/>
            </>            
        );
    }
}
export default Counter;