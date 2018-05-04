import React, { Component } from 'react';
import SocialLink from '../extra/SocialLink';

class Social extends Component {
  render() {
    return (
      <div className="fixed-btn-soc-network">
          <i className="fa fa-ellipsis-h"></i>
          <div className="text">Социальные сети</div>
          <SocialLink />
      </div>
    )
  }
}

export default Social;