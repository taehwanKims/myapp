import React, {Component} from 'react';

class PhoneForm extends Component {
    state = {
        name:""
    }
    handleChange =(e) =>{
        this.setState({
            name:e.target.value
        })
    }
    render(){
        return(
            <form>
                <input
                 placeholder="이름"
                 vlaue={this.state.name}
                 onchange={this.handleChange}
                 />
                 <div>{this.state.name}</div>
            </form>
        )
    }
}

export default PhoneForm;