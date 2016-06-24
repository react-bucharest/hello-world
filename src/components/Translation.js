import React, { PropTypes } from 'react';

const Translation = ({ translatedText }) =>
  <p id="translation">{translatedText}</p>;

Translation.propTypes = {
  translatedText: PropTypes.string.isRequired,
};

export default Translation;
