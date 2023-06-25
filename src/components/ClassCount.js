import react, {Component} from 'react';


class ClassCount extends Component {

    constructor(){
        super();
            this.state = {
                count : 0,
                city : "Mumbai"
            }

        // setTimeout(()=>{
        //     this.setState({count: this.state.count+1})
        // },2000)

        setTimeout(()=>{
            this.setState({city: this.state.city+" vadapav"})
        },2000)

        setTimeout(() =>{
            this.setState((prevState)=>({
                count:prevState.count+1
            }));
        },2000)
    }

   render(){

    const {count,city} = this.state;  //Destructuring state
    const {institute} = this.props;   //Destructuring props
    return <div>

        <p>"This is Classcount Class Component</p>
        <p>My count value is <strong>{this.state.count}</strong></p>
        <p>My city is <strong>{city}</strong></p>
        <p>My institute name is: <strong>{this.props.institute}</strong></p>
        <p>My institute name is: <strong>{institute}</strong></p>
    </div>
   }
}

export default ClassCount;