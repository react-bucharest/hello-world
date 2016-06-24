import { API_KEY } from '../config';

function receiveTranslation(text, target, translatedText) {
  return {
    type: 'RECEIVE_TRANSLATION',
    text,
    target,
    translatedText,
  };
}

const BASE_URL = 'https://www.googleapis.com/language/translate/v2';

export function translate(text, target) {
  return dispatch =>
    fetch(`${BASE_URL}?key=${API_KEY}&source=en&target=${target}&q=${text}`)
      .then(response => response.json())
      .then(response => dispatch(
        receiveTranslation(
          text,
          target,
          response.data.translations[0].translatedText
        )
      ));
}
