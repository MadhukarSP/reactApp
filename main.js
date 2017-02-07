import React from 'react';
import ReactDOM from 'react-dom';
import Stateless from './Example_src/StatelessComponent.jsx';
import Stateful from './Example_src/StatefulComponent.jsx';
import Props from './Example_src/Props.jsx';
import StateAndProps from './Example_src/StateAndProps.jsx';
import PropsValidation from './Example_src/PropsValidation.jsx';
import SetState from './Example_src/ComponentAPI/SetState.jsx';
import ResponsiveInput from './Example_src/ResponsiveInputField.jsx';
import ButtonOnclick from './Example_src/ButtonOnclick.jsx';
import RefUsage from './Example_src/RefsUsageClearInputField.jsx';
import Maps from './Example_src/Maps.jsx';
import Routes from './Example_src/Routes.jsx';
import {Home,About,Contact} from './Example_src/Routes.jsx';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import CssAnimation from './Example_src/CssAnimation.jsx';
import HOC from './Example_src/HigherOrderComponent.jsx';

// App name [Example: Stateless], should always begin with capital letter. 
ReactDOM.render(<CssAnimation />, document.getElementById('css_animation'));
ReactDOM.render(<HOC />, document.getElementById('hoc'));
ReactDOM.render(<Stateless />, document.getElementById('stateless_component'));
ReactDOM.render(<Stateful />, document.getElementById('stateful_component'));
ReactDOM.render(<Props />, document.getElementById('props'));
ReactDOM.render(<StateAndProps />, document.getElementById('state_and_props'));
ReactDOM.render(<PropsValidation />, document.getElementById('props_validation'));
ReactDOM.render(<SetState />, document.getElementById('set_state'));
ReactDOM.render(<ResponsiveInput />, document.getElementById('responsive_Input'));
ReactDOM.render(<ButtonOnclick />, document.getElementById('button_onclick'));
ReactDOM.render(<RefUsage />, document.getElementById('ref_usage'));
ReactDOM.render(<Maps />, document.getElementById('maps'));



ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {Routes}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>
	
), document.getElementById('routes'));

