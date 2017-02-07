import React from 'react';

class App extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         data: 'Initial data...'
      }

      this.updateState = this.updateState.bind(this);
      this.resetState = this.resetState.bind(this);
   };

   updateState() {
      this.setState({data: 'Data updated...'})
   }
   
   resetState() {
	  this.setState({data: 'Initial data...'})
   }

   render() {
      return (
         <div>
            <Content stateData = {this.state.data} updateStateProp = {this.updateState}
			resetStateProp = {this.resetState}></Content>			
			
         </div>
      );
   }
}

class Content extends React.Component {
	render() {
		return (
			<div>
				<button onClick={this.props.updateStateProp}>Click</button>
				<h3>{this.props.stateData}</h3>
				<button onClick={this.props.resetStateProp}>Reset</button>
			</div>
		);
	}
}

export default App;