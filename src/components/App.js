import React, { PropTypes } from 'react';
import 'whatwg-fetch';
import { connect } from 'react-redux';
import { LANGUAGES } from '../config';
import Translation from './Translation';
import { translate } from '../actions/index';

class InnerApp extends React.Component {
  constructor() {
    super();

    this.onTranslate = this.onTranslate.bind(this);
  }

  onTranslate() {
    const { textInput, langSelect } = this.refs;

    this.props.onTranslate(textInput.value, langSelect.value);
  }

  render() {
    const { text, translatedText } = this.props;

    return (
      <div>
        <input type="text" id="message" placeholder={text} ref="textInput" />
        <select id="target" ref="langSelect">
            {LANGUAGES.map((lang) => (
              <option value={lang.value} key={lang.id}>
                {lang.text}
              </option>
            ), this)}
        </select>
        <button onClick={this.onTranslate}>Translate</button>
        <Translation translatedText={translatedText} />
      </div>
    );
  }
}

InnerApp.propTypes = {
  text: PropTypes.string.isRequired,
  translatedText: PropTypes.string.isRequired,
  onTranslate: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { text, target, translatedText } = state;

  return {
    text,
    target,
    translatedText,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTranslate: (text, target) => dispatch(translate(text, target)),
  };
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(InnerApp);

export default App;
