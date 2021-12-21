import React, {Component} from 'react'
import '../style/Example1.css'
class Example1 extends Component {
    constructor(props) {
      super(props);
      this.state = {adj1:'', adj2:'', noun1:'', verb1:'', verb2:''}
    }
  
    render() {
      return(
        <div className="Form">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label style={{color: '#084887'}}> (Adjective) </label>
              <input type="text" value={this.state.adj1} onChange={this.onadj1Change} />
            </div>
            <div>
              <label style={{color: '#084887'}}> (Adjective) </label>
              <input type="text" value={this.state.adj2} onChange={this.onadj2Change} />
            </div>
            <div>
              <label style={{color: '#084887'}}> (Noun) </label>
              <input type="text" value={this.state.noun1} onChange={this.onnoun1Change} />
            </div>
            <div>
              <label style={{color: '#084887'}}> (Verb, Past Tense) </label>
              <input type="text" value={this.state.verb1} onChange={this.onverb1Change} />
            </div>
            <div>
              <label style={{color: '#084887'}}> (Verb) </label>
              <input type="text" value={this.state.verb2} onChange={this.onverb2Change} />
            </div>
            <button>Generate!</button>
          </form>
        </div>
      )
    }
  
    onadj1Change = event => {
      this.setState({adj1: event.target.value})
    }
  
    onadj2Change = event => {
      this.setState({adj2: event.target.value})
    }
  
    onnoun1Change = event => {
      this.setState({noun1: event.target.value})
    }

    onverb1Change = event => {
        this.setState({verb1: event.target.value})
    }

    onverb2Change = event => {
        this.setState({verb2: event.target.value})
      }

    handleSubmit = event =>{
        event.preventDefault();
        alert('You made it! This ' + this.state.adj1 + ' class is now over!' +
        '\nHope you learned some really ' + this.state.adj2 + ' things!' +
        '\nYou deserve a prize! A ' + this.state.noun1 +' perhaps?' +
        '\nI think you ' + this.state.verb1 + ' it out of the park!' +
        '\nNow go out there and ' + this.state.verb2 + ' the world!')
    }
  }
  
  export default Example1;