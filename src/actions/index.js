import { API_KEY } from '../config';


function requestTranslation(text, target) {
  return {
    type: 'requestTranslation',
    text: text,
    target: target,
    isFetching: true
  }
}

function receiveTranslation(text, target, translatedText) {
  return {
    type: 'receiveTranslation',
    text: text,
    target: target, 
    translatedText: translatedText,
    isFetching: false
  }
}

export function fetchTranslation(text, target) {
  return dispatch => {
    dispatch(requestTranslation(text))
    return fetch('https://www.googleapis.com/language/translate/v2?key='	+	API_KEY	+	'	&source=en&target=' + target + '&q='+ text)  
      .then(response => response.json())
      .then( => dispatch(receiveTranslation(text, target, response.data.translations[0].translatedText)))
  }
}

 