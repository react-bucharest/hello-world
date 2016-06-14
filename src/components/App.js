import React from 'react'
import 'whatwg-fetch';
import { API_KEY, LANGUAGES, DEFAULT_MESSAGE } from '../config';
import Languages from './Languages';
import Message from './Message';
import Translation from './Translation';


let App = React.createClass({
  getInitialState: function(){
  	return {
  		translation: null,
  		target: null,
  		text: null
  	}
  },
  render: function() {
    return <div>
		  	<Message data = { DEFAULT_MESSAGE } updateText = { this.handleChildText } />
		  	<Languages data = {LANGUAGES} updateLang = { this.handleChildLang } />
			<button onClick={this.translate}>Translate</button>
			<Translation data={this.state.translation}/>
		   </div>
  	},
  	handleChildLang:  function(e){
  		this.setState({target: e.target.value});
  	},
  	handleChildText:  function(e){
  		this.setState({text: e.target.value});	
  	},
  	handleTranslation: function(t){
  		this.setState({translation: t});	
  	},
  	translate: function(){
  		let target = this.state.target || 'ro';
  		let text = this.state.text || DEFAULT_MESSAGE;

  		fetch('https://www.googleapis.com/language/translate/v2?key='	+	API_KEY	+	'	&source=en&target=' + target + '&q='+ text)
      		.then(response => response.json())
      		.then(response => this.handleTranslation(response.data.translations[0].translatedText) )   
  	}
});

export default App