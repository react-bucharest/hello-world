import { API_KEY } from '../config';

function receiveTranslation(text, target, translatedText) {
  return {
    type: 'RECEIVE_TRANSLATION',
    text: text,
    target: target,
    translatedText: translatedText
  }
}

export function translate(text, target) {
  return dispatch => {
    return fetch('https://www.googleapis.com/language/translate/v2?key='	+	API_KEY	+	'	&source=en&target=' + target + '&q='+ text)  
      .then(response => response.json())
      .then(response => dispatch(receiveTranslation(text, target, response.data.translations[0].translatedText)))
  }
}

 