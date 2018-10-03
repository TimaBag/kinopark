import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import MaskedInput from 'react-text-mask';
import * as seanceActions from '../../actions/seanceActions';


class Reservation extends Component {
  constructor(props){
    super(props);
    this.state = {
      phone : '',
      email: '',
      errorPhone : false,
      errorEmail : false,
    }
    this.changePhone = this.changePhone.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
  }
  componentDidMount(){
    $('.wrapper-counter-btn').each(function() {
      $(this).parents('.tickets-item').find('.product-count').on('input', function() {
        var rep = (/^0/);
        var value = $(this).val();
        if (rep.test(value)) {
          value = value.replace(rep, '');
          $(this).val(value);
        }
        var value2 = $(this).val();
        var rep2 = /[a-zA-Zа-яА-Я]/;
        if (rep2.test(value)) {
          value2 = value2.replace(rep, '');
          $(this).val(value2);
        }
        if ($(this).val() == '') {
          $(this).val(0);
        }
        var msg = $(this).val();
      });
    });
    $('.wrapper-counter-btn').each(function() {
      $(this).find('.counter-back').on("click", function(e) {
        var valPlus = $(this).parents('.tickets-item').find('.product-count').val();
        var result = parseInt(valPlus) - 1;
        if (result >= 0) {
          $(this).parents('.tickets-item').find('.product-count').val(result);
        }
        return false;
      });
    });
    $('.wrapper-counter-btn').each(function() {
      $(this).find('.counter-forward').on("click", function(e) {
        var valPlus = $(this).parents('.tickets-item').find('.product-count').val();
        var result = parseInt(valPlus) + 1;
        if (result >= 0) {
          $(this).parents('.tickets-item').find('.product-count').val(result);
        }
        return false;
      });
    });
    this.props.onGetSeance(this.props.match.params.uuid)
  }
  changePhone(e){
    var phoneRegex = /^[+][0-9]{1} \([0-9]{3}\)\s[0-9]{3} [0-9]{2} [0-9]{2}$/;
    this.setState({
      errorPhone : false,
      phone : e.target.value.match(phoneRegex) ? e.target.value : "",
    })
  }
  changeEmail(e){
    var emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    this.setState({
      errorEmail : false,
      email : e.target.value.match(emailRegex) ? e.target.value : "",
    })
  }
  checkValidation(){
    console.log(this.state.email);
    if(this.state.email === ''){
      this.setState({
        errorEmail : true
      })
    }
    if(this.state.phone === ''){
      this.setState({
        errorPhone : true
      })
    }
  }
  render(){
    const {seance} = this.props;
    return(
      <div className="content">
        <div className="container">
          <h1>Бронирование</h1>
          <div className="reservation-content">
            <ul className="reservation-steps">
              <li><Link to="" className="active">1 шаг</Link></li>
              <li><Link to="">2 шаг</Link></li>
              <li><Link to="">3 шаг</Link></li>
            </ul>
            <h3 className="title">{seance.name}</h3>
            <ul className="film-info-list">
              <li><span className="bold">Кинопарк 6 Спутник</span><span className="city">Алматы</span></li>
              <li><span className="bold">Зал:</span>4</li>
              <li><span className="bold">Начало сеанса:</span>четверг, 18 января 2018 г., 0:10:00 </li>
              <li><span className="bold">Текущее время: </span>17 января 2018 г., 22:37:59</li>
            </ul>
            <form className="reservation-form">
              <div className="wrapper-form-group">
                <div className="form-group">
                  <label className="form-label">Телефон:</label>
                  <MaskedInput
                    type="tel"
                    className={this.state.errorPhone ? "text-input requiredField callback-phone inputError" : "text-input requiredField callback-phone"}
                    mask={['+','7',' ','(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/,' ', /\d/, /\d/]}
                    placeholder="Ваш контактный телефон" 
                    onChange={(e) => this.changePhone(e)}
                  />
                  {this.state.errorPhone && <span className="error">Введите номер телефона</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">E-mail:</label>
                  <input 
                    className={this.state.errorEmail ? "text-input requiredField callback-phone inputError" : "text-input requiredField callback-email"}
                    autoComplete="off" 
                    placeholder="Ваш E-mail"
                    onChange={(e) => this.changeEmail(e)}
                 />
                 {this.state.errorEmail && <span className="error">Введите корректный E-mail</span>}
                </div>
              </div>
              <div className="tickets-panel">
                <div className="tickets-item">
                  <div className="tickets-item-title">Взрослый</div>
                  <div className="tickets-item-content">
                    <input type="text" value="1" className="product-count" />
                    <div className="price-and-counter">
                      <span className="price">{seance.base_price}</span>
                      <div className="wrapper-counter-btn">
                        <button className="counter-back">−</button>
                        <button className="counter-forward">+</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tickets-item">
                  <div className="tickets-item-title">Студенчиский</div>
                  <div className="tickets-item-content">
                    <input type="text" value="1" className="product-count" />
                    <div className="price-and-counter">
                      <span className="price">{seance.base_price}</span>
                      <div className="wrapper-counter-btn">
                        <button className="counter-back">−</button>
                        <button className="counter-forward">+</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tickets-item">
                  <div className="tickets-item-title">Детский</div>
                  <div className="tickets-item-content">
                    <input type="text" value="1" className="product-count" />
                    <div className="price-and-counter">
                      <span className="price">{seance.base_price}</span>
                      <div className="wrapper-counter-btn">
                        <button className="counter-back">−</button>
                        <button className="counter-forward">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-footer">
                <div className="total-price">
                  Итого: <span className="color">28000 тт</span>
                </div>
                <div className="wrapper-submit-btn">
                  <input type="button" value="Подвердить выбор" className="thunderbird-btn submit-btn" onClick={this.checkValidation.bind(this)} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  seance : state.seance.seance,
})

const mapDispatchToProps = {
  onGetSeance : seanceActions.getSeance,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reservation);