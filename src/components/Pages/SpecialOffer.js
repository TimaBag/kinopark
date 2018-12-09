import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/promotionActions';
import ReactHtmlParser from 'react-html-parser';

class SpecialOffer extends Component {

  constructor(props){
    super(props);
    this.state = {
      showMore : false,
      dialogSpecial : null,
    }

  }

  componentDidMount(){
    this.props.onGetPromotion();
  }

  handleOpenMoreDialog(special){
    this.setState({
      showMore : true,
      dialogSpecial : special,
    })
  }
  handleCloseMoreDialog(){
    this.setState({
      showMore : false,
      dialogSpecial : null,
    })
  }

  renderMoreDialog(){
    const {dialogSpecial} = this.state;
    var specialLink = dialogSpecial.video_url.replace("watch?v=", "embed/");
    return(
      <div className="modal-container">
        <div className="modal-popup-film">
          <h2 className="title">{dialogSpecial.name}</h2>
          <div className="modal-popup-content">
            <div className="modal-popup-left">
              <div className="modal-popup-img">
                <img src={dialogSpecial.image_url} alt="alt" />
              </div>
            </div>
            <div className="modal-popup-desc">
              <div className="text">
                { ReactHtmlParser(dialogSpecial.description) }
              </div>
              <iframe title="more iframe" width={520} height={340} src={specialLink} frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
          <div className="modal-close" onClick={this.handleCloseMoreDialog.bind(this)}>&#215;</div>
        </div>
      </div>
    )
  }

  renderOffer(offer,index){
    return(
      <div key={index} className="special-offer-container">
        <div className="special-offer-item">  
          <div className="item-img">
            <div className="btn_link" onClick={this.handleOpenMoreDialog.bind(this,offer)}><img src={offer.image_url} alt="alt" /></div>
          </div>
          <div className="item-desc">
            <h4 className="title"><div className="btn_link" onClick={this.handleOpenMoreDialog.bind(this,offer)}>{offer.name}</div></h4>
            <div className="text hidden_text">
              { ReactHtmlParser(offer.description) }
            </div>
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
        {this.state.showMore && this.renderMoreDialog()}
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