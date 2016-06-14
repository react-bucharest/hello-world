import React from 'react'
import 'whatwg-fetch';
import { connect } from 'react-redux'
import { API_KEY, LANGUAGES, DEFAULT_MESSAGE } from '../config';
import Translation from './Translation';
import {translate} from '../actions/index'

let InnerApp = React.createClass({
  render: function() {
    return <div>
             <input type="text" id="message" placeholder={this.props.data.text} ref="textInput" />
		  	     <select id="target" ref="langSelect">
                {LANGUAGES.map(function(lang) {
                  return (
                    <option value={lang.value} key={lang.id}>
                      {lang.text}
                    </option>
                  );
                },this)}
              </select>
			       <button onClick={this.onTranslate}>Translate</button>
			       <Translation translatedText={this.props.data.translatedText}/>
		      </div>
  },

  onTranslate: function() {
    this.props.onTranslate(this.refs.textInput.value, this.refs.langSelect.value);
  }
  	
});

function mapStateToProps(state)  {
  return {
    data: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTranslate: (text, target) => dispatch(translate(text, target))
  };
}

let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(InnerApp);

export default App