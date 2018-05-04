import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class BuyTicket extends Component {

	static propTypes = {
    media : PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="head-buy-ticket mobile">
        <Link to="" className="thunderbird-btn">Купить билет</Link>
      </div>
    )
  }
}

export default BuyTicket;