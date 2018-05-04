import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className="head-banner">
        <img src={require('../../img/static/banner.jpg')} alt="alt" />
      </div>
    )
  }
}

export default Banner;