import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/promotionActions';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class SpecialOffer extends Component {

  componentDidMount(){
    this.props.onGetPromotion();
  }

  renderOffer(offer,index){
    return(
      <div key={index} className="special-offer-container">
        <div className="special-offer-item">
          <div className="item-img">
            <Link to=""><img src={offer.image_url} alt="alt" /></Link>
          </div>
          <div className="item-desc">
            <h4 className="title"><Link to="">{offer.name}</Link></h4>
            <p className="text">
              { ReactHtmlParser(offer.description) }
            </p>
          </div>
        </div>
      </div>  
    )
  }

  render() {
    return (
      <div className="content">
        <div className="container">
          <h1>Мой кинопарк</h1>
          <ul className="my-kinopark-btn">
            <li><Link to="/special-offer" className="active">Спец. предложения</Link></li>
            <li><Link to="/production-bars">Продукция баров</Link></li>
          </ul>
          <div className="special-offer-content">
            {this.props.promotion.map((offer,index) => this.renderOffer(offer,index))}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  promotion : state.promotion.promotion,
})

const mapDispatchToProps = {
  onGetPromotion : actions.getPromotion,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecialOffer);