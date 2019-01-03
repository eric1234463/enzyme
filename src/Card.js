import React, { Component } from 'react';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
    };
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }
  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  handleOnClick = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  handleKeyUp(event) {
    console.log('on key up')
  }

  render() {
    const { rows, tag } = this.props;
    const { isShow } = this.state;
    return (
      <div id="container" onClick={this.handleOnClick}>
        {rows.length === 0 && <div className="null-message">Null</div>}
        {rows.map((row, index) => {
          if (row.status === 'active') {
            return (
              <div className="label" key={index}>
                {row.name}
              </div>
            );
          }
          return null;
        })}

        {tag === 'DONE' && (
          <div id="status-tag" className="done-tag">
            Done
          </div>
        )}
        {tag === 'PREPARE' && (
          <div id="status-tag" className="prepare-tag">
            Prepare
          </div>
        )}

        {isShow && <div>Show Label</div>}
      </div>
    );
  }
}

export default Card;
