import React, { Component } from 'react';

class Filter extends Component {
  state = {
    active: false
  }

  handleActiveChange = () => {
    const active = this.state.active;
    this.setState({
      active: !this.state.active
    });
  } 

  render (){
    let techColor = {
      backgroundColor: this.state.active ? '#26a69a' : '#212121'
    }
    return (
      <span className="tech-tag" style={techColor}
        onClick={() => {
          this.props.handleFilter(this.props.name);
          this.handleActiveChange();
        }}>
          { this.props.name }
      </span>
    )
  }
}


export default Filter;
