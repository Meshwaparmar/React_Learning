import React from 'react'
class Sumdemo extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    // mydata(e){
    //     this.setState({no1:e.target.value})
    // }

    doSum(){
        var no1 = parseInt(this.state.txt1)
        var no2 = parseInt(this.state.txt2)
        var c = no1 + no2
        this.setState({ans:"Sum is "+c})
    }
    render(){
        return(<>
        <h1>Sum Demo</h1>
        No1 : <input type='text' 
        onChange={(e)=>this.setState({txt1:e.target.value})}/>
        No2 : <input type='text' 
        onChange={(e)=>this.setState({txt2:e.target.value})}/>

        <input type='button' value="+" onClick={this.doSum.bind(this)}/>
        {this.state.ans}
        </>)
    }
}
export default Sumdemo