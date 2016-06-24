import { initialState } from '../config';

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_TRANSLATION':
      return Object.assign({}, state, {
        target: action.target,
        translatedText: action.translatedText,
        text: action.text,
      });
    default:
      return state;
  }
}
