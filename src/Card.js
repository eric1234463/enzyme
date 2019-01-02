import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { rows } = this.props;
    return (
      <div>
        {rows.length === 0 && <div className='null-message'>Null</div>}
        {rows.map((row, index) => (
          <div className='label' key={index}>{row.name}</div>
        ))}
      </div>
    );
  }
}

export default Card;
