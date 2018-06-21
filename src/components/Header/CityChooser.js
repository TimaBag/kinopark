import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from "jquery";
import {is_mobile} from '../js/main.js'
import * as actionsCity from '../../actions/cityActions';

class CityChooser extends Component {

	constructor(props){
		super(props);
		this.state = {
			city : "Алматы",
			checked : false,
			showCity : false,
		};
	}

	componentDidMount(){
    this.props.onGetCity();
  }

  handleOpenCityDialog(){
    this.setState({
      showCity : true,
    })
  }

  handleCloseCityDialog(){
    this.setState({
      showCity : false,
    })
  }

  handleChangeCity(e){
  	console.log(typeof(e.target.value))
  	this.setState({
  		city : e.target.value,
  		showCity : false,
  	})
  }

	renderCityDialog(){
		var separateElements = [];
		var multiElements = this.props.city;

		for(var i = 0; i < multiElements.length; i+=5) {
	    var oneRow = [];
	    oneRow.push(multiElements.slice(i, i+5).map((item,index) => {
		  	return <li key={index}>
									<label className="wrapper-radio">
										<input name="optionsRadios" value={item.name} type="radio" checked={this.state.city === item.name} onChange={this.handleChangeCity.bind(this)}/>
										<span className="radio-text">{item.name}</span>
									</label>
								</li>
			}))
			separateElements.push(oneRow.map((itm,index) => {return <ul key={index} className="city-list">{itm}</ul>}))
		}

		return(
			<div className="modal-container">
				<div className="modal-select-city">
					<div className="wrapper-select-city clearfix">
						<div className="area-city"><span className="text">Ваш город:</span> <span className="city">{this.state.city}</span></div>
					</div>
					<div className="select-city-content">
						<div className="wrapper_city-list clearfix">
							<div className="your-city">Выберите свой город</div>
							{separateElements}
						</div>
					</div>
					<div className="modal-close" onClick={this.handleCloseCityDialog.bind(this)}>&#215;</div>
				</div>
			</div>
		)
	}

  render() {
    return (
      <div className="head-city-select">
        <i className="fa fa-map-marker"></i>
        <div className="city-select" onClick={this.handleOpenCityDialog.bind(this)}><span className="text">Выбрать город:</span> <span className="city">{this.state.city}</span></div>
        {this.state.showCity && this.renderCityDialog()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  city : state.city.city
})

const mapDispatchToProps = {
  onGetCity : actionsCity.getCity
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityChooser);