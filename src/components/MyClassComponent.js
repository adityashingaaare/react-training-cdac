import React, {Component} from 'react';



class MyClassComponent extends Component{


    render(){
        return <p>Hi my name is <strong>{this.props.name}</strong>, my Messeage is <strong>{this.props.post}</strong></p>

    }
}

export default MyClassComponent;