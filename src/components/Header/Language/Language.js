import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Language/language.css';

class Language extends Component {

  static propTypes = {
    media : PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className={"language-switch-block " + this.props.media}>
        <ul className="language-switch">
          <li><Link to="#" className="active">rus</Link></li>
          <li><Link to="#" >eng</Link></li>
        </ul>
      </div>
    )
  }
}

export default Language;