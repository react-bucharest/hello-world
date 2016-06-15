import React from 'react'
import 'whatwg-fetch'
import { connect } from 'react-redux'
import { API_KEY, LANGUAGES, DEFAULT_MESSAGE } from '../config'
import Translation from './Translation'
import {translate} from '../actions/index'

let InnerApp = React.createClass({
  render: function() {
    const {text, translatedText} = this.props

    return <div>
       <input type="text" id="message" placeholder={text} ref="textInput" />
	     <select id="target" ref="langSelect">
          {LANGUAGES.map(function(lang) {
            return (
              <option value={lang.value} key={lang.id}>
                {lang.text}
              </option>
            )
          }, this)}
        </select>
       <button onClick={this.onTranslate}>Translate</button>
       <Translation translatedText={translatedText}/>
    </div>
  },

  onTranslate: function() {
    const {textInput, langSelect} = this.refs

    this.props.onTranslate(textInput.value, langSelect.value);
  }
  	
});

function mapStateToProps(state)  {
  const {text, target, translatedText} = state

  return {
    text,
    target,
    translatedText
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
