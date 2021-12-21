import React, {Component} from 'react'
import '../style/Example1.css'
class Example3 extends Component {
    constructor(props) {
      super(props);
      this.state = {adj1:'', adj2:'', noun1:'', verb1:''}
    }
  
    render() {
      return(
        <div className="Form">
            <h1 style={{color:'#084887'}}>Alert Box's Dream</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label style={{color: '#084887'}}> (Adjective) </label>
              <input type="text" value={this.state.adj1} onChange={this.onadj1Change} />
            </div>
            <div>
              <label style={{color: '#084887'}}> (Noun) </label>
              <input type="text" value={this.state.noun1} onChange={this.onnoun1Change} />
            </div>
            <div>
              <label style={{color: '#084887'}}> (Adjective) </label>
              <input type="text" value={this.state.adj2} onChange={this.onadj2Change} />
            </div>
            <div>
              <label style={{color: '#084887'}}> (Verb, Present Tense) </label>
              <input type="text" value={this.state.verb1} onChange={this.onverb1Change} />
            </div>
            <button>Generate!</button>
          </form>
        </div>
      )
    }
  
    onadj1Change = event => {
      this.setState({adj1: event.target.value})
    }
  
    onnoun1Change = event => {
      this.setState({noun1: event.target.value})
    }
  
    onadj2Change = event => {
      this.setState({adj2: event.target.value})
    }

    onverb1Change = event => {
        this.setState({verb1: event.target.value})
    }

    handleSubmit = event =>{
        event.preventDefault();
        alert('I know I am just an Alert Box, but I have always wanted to be a ' + this.state.adj1 + ' ' + this.state.noun1 + '.' +
        '\nIs that weird? I cannot imagine what ' + this.state.adj2 +' adjective you put.' +
        '\nOkay, I am ' + this.state.verb1 + ' now. Happy future hacking!' )
    }
  }
  
  export default Example3;