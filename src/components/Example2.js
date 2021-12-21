import React, {Component} from 'react'
import '../style/Example1.css'
class Example2 extends Component {
    constructor(props) {
      super(props);
      this.state = {adj1:'', adj2:'', noun1:'', verb1:''}
    }
  
    render() {
      return(
        <div className="Form">
            <h1 style={{color:'#084887'}}>You Learned a Lot!</h1>
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
              <label style={{color: '#084887'}}> (Verb, Past Tense) </label>
              <input type="text" value={this.state.verb1} onChange={this.onverb1Change} />
            </div>
            <div>
              <label style={{color: '#084887'}}> (Noun) </label>
              <input type="text" value={this.state.noun1} onChange={this.onnoun1Change} />
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
  
    onverb1Change = event => {
      this.setState({verb1: event.target.value})
    }

    onnoun1Change = event => {
        this.setState({noun1: event.target.value})
    }

    handleSubmit = event =>{
        event.preventDefault();
        alert('Props, state, routes, components. So many ' + this.state.adj1 + ' terms!' +
        '\nCall me ' + this.state.adj2 + ', but that is a lot of information!' +
        '\nAnd for someone without a significant amount of experience in web development, You ' + this.state.verb1 +' butt!' +
        '\nThat is bigger than ' + this.state.noun1 + '!' +
        '\nI, Alert Box, am proud of you.')
    }
  }
  
  export default Example2;