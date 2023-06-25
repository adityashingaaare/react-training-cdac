import React,{ Component } from 'react'

 const Hoc = (WrapperComp) => {
    
     class HocComp extends Component {
        constructor(props) {
            super(props);
        
            this.state = {
              count: 0
            }
          }
          increment = () => {
                this.setState({count:this.state.count+1})
          }
      render() {
        return <WrapperComp count={this.state.count} increment ={this.increment}></WrapperComp>
        
      }
    }
    
  return HocComp;
}

export default Hoc;