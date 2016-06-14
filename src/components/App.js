import React from 'react'
import 'whatwg-fetch';
import { connect } from 'react-redux'
import { API_KEY, LANGUAGES, DEFAULT_MESSAGE } from '../config';
import Languages from './Languages';
import Message from './Message';
import Translation from './Translation';


let InnerApp = React.createClass({
  render: function() {
    return <div>
		  	     <Message data = { DEFAULT_MESSAGE } />
		  	     <Languages data = {LANGUAGES}  />
			       <button onClick={this.props.onTranslate}>Translate</button>
			       <Translation data={this.props.translation}/>
		      </div>
  	},
  	
});

function mapStateToProps(state)  {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTranslate: () => dispatch(translate)
  };
}

let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(InnerApp);

export default App