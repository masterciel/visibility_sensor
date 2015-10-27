'use strict';

var React = require('react');
var ReactDOM = require('react-dom')
var VisibilitySensor = require('../');

var Example = React.createClass({
  getInitialState: function () {
    return { msg: '' };
  },

  onChange: function (isVisible) {
    this.setState({
      msg: 'Element is now ' + (isVisible ? 'visible' : 'hidden')
    });
  },

  render: function () {
    var self = this;

    return (
      <div>
        <p className='msg'>{this.state.msg}</p>
        <div className='before'></div>
        <VisibilitySensor containment={this.props.containment} onChange={this.onChange}>
          <div className='sensor' />
        </VisibilitySensor>
        <div className='after'></div>
      </div>
    );
  }
});

ReactDOM.render(React.createElement(Example), document.getElementById('example'));

var container = document.getElementById('example-container');
var elem = container.querySelector('.inner');
container.scrollTop = 320;
container.scrollLeft = 320;
ReactDOM.render(React.createElement(Example, { containment: container }), elem);
