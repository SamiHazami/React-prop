import React, {Component} from 'react'

class FullName extends Component{
    render () {
        const myStyle={
        textAlign:"center",
        color:"rgb(9, 30, 90)",
        textTransform: "uppercase",
        fontFamily: 'Roboto Condensed',margin:"auto",
    }
    return (
        <div style ={{color:"black",textAlign:"center"}}>
    <h1 style ={myStyle}>  {this.props.firstName} {this.props.lastName}</h1>
        </div>

    );
    };
};

export default FullName;