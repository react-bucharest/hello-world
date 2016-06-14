import { initialState } from '../config';

export default function all(state = initialState, action) {
  switch (action.type) {
    case 'TRANSLATE_TEXT':
      return [
        {
          target: action.target,
          translation: false,
          text: action.text
        }, 
        ...state
      ]
    default:
      return state
  }
}