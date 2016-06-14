import React from 'react'

var Message = React.createClass({
  render: function(){
    return <input type="text" id="message" placeholder={this.props.data} onChange={this.props.updateText}/>
  }
});
Message.propTypes = {
  updateText: React.PropTypes.func,
};


export default Message;