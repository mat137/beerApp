import React from 'react';

var h1Style = {
  fontSize: '80px',
  fontWeight: 'bold'
}
var beerStyle = {
  color: '#ffcc00',
  fontSize: '80px',
  fontWeight: 'bold'
}

export default class Title extends React.Component {
  render() {
    this.number = 5;
    return (
      <div>
      <span style={beerStyle}>{this.props.title}</span>
      <span style={h1Style}>APP</span>
      </div>
    );
  }
}
