import React from 'react'

let Languages = React.createClass({
  render: function() {

    var langNodes = this.props.data.map(function(lang) {
      return (
        <option value={lang.value} key={lang.id}>
          {lang.text}
        </option>
      );
    },this);

    return (
      <select id="target" onChange={this.props.updateLang}>
		  	{langNodes}
	  </select>
    );
  }
});

Languages.propTypes = {
  updateLang: React.PropTypes.func,
};

export default Languages;