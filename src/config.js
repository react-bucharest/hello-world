export const DEFAULT_MESSAGE = 'Hello World!';
export const API_KEY = 'AIzaSyAtaox5l1corFKcEywiOit4xKGW1mLsjGA';
export const LANGUAGES = [  {value: 'ro', id: 'ro', text: 'Romana'}, 
							{value: 'sq', id: 'sq', text: 'Albaneza'},
							{value: 'hr', id: 'hr', text: 'Croata'},
							{value: 'ne', id: 'ne', text: 'Olandeza'},
							{value: 'hu', id: 'hu', text: 'Maghiara'},
							{value: 'ru', id: 'ru', text: 'Rusa'},
							{value: 'tr', id: 'tr', text: 'Turca'}
							];


export const initialState = [
  {
    text: DEFAULT_MESSAGE,
    translation: null,
    target: null
  }
];							