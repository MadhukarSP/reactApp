import React from 'react';

class App3 extends React.Component {

	render() { 
		return(
			<div>
				<h1>{this.props.headerProps}</h1>
				<h2>{this.props.contentProps}</h2>
			</div>
		);
	}
}

App3.defaultProps = {
	headerProps: "Header props",
	contentProps: "Content props"
}

export default App3;