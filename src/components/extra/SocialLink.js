import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../extra/social.css';

class SocialLink extends Component {
  render(){
    return(
      <ul className="soc-network">
        <li><Link to="" className="fa fa-vk"></Link></li>
        <li><Link to="" className="fa fa-facebook"></Link></li>
        <li><Link to="" className="fa fa-twitter"></Link></li>
        <li><Link to="" className="fa fa-instagram"></Link></li>
      </ul>
    )
  }
}

export default SocialLink;