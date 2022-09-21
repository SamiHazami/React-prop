import React, {Component} from 'react'
class Bio extends Component {
    render(){
    return (
        <div className="media">
            <img src="./images/Profile.jpg" className="mr-3" alt="Biophoto"  style={{width:"50px"}}/>
            <div>
            <h5>{this.props.FullName}</h5>
            <span>Age:</span> {this.props.Age} <br/>
            <span>Gender:</span>{this.props.Gender}<br/>
            <span>Interests:</span>{this.props.Interests}<br/>
            <span>Bio:</span>{this.props.FullName} is {this.props.Age} years old, I like {this.props.Interests}
            </div>
        </div>
    )
}}

export default Bio;
