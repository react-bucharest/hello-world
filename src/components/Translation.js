import React from 'react'

let Translation = React.createClass({
  render: function() {
     return <p id="translation">{this.props.translatedText}</p>
  }
});

export default Translation;