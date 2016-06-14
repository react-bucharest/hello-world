import React from 'react'
import 'whatwg-fetch';
import { API_KEY } from '../config';

let App = React.createClass({
  render: function() {
    return <div>
		  	<input type="text" id="message" placeholder="hello world"/>
		  	<select id="target">
		  		<option value="ro">Romana</option>
		  		<option value="fr">Franceza</option>
		  		<option value="ru">Rusa</option>
			</select>
			<button onClick={this.translate()}>Translate</button>
			<br/>
			<input type="text" id="translation"/>
		   </div>
  	},
  	translate: function(){
  		fetch('https://www.googleapis.com/language/translate/v2?key='	+	API_KEY	+	'	&source=en&target=de&q=Hello%20world')
      		.then(response => response.json())
  	}
});

export default App