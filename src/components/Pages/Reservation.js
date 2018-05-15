import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Reservation extends Component {

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

    /*$('input[type=tel]').inputmask("+7 (999) 999 99 99", {
      "clearIncomplete": true
    });*/
    $('.js-form-submit').on("click", function() {
      var jhis = $(this).parents('form');
      $(jhis).find('.error').remove();
      var error = 0;
      $(jhis).find('.requiredField').each(function() {
        if ($(this).hasClass('callback-name')) {
          if ($(this).val().length < 3) {
            $(this).parent().append('<span className="error">Представьтесь, пожалуйста</span>');
            $(this).addClass('inputError');
            error = 1;
          }
        } else if ($(this).hasClass('callback-email')) {
          var emailReg = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
          if (emailReg.test($(this).val()) == false) {
            $(this).parent().append('<span className="error">Введите корректный E-mail</span>');
            $(this).addClass('inputError');
            error = 2;
          }
        } else if ($(this).hasClass('callback-phone')) {
          if ($(this).val().length < 10) {
            $(this).parent().append('<span className="error">Введите номер телефона</span>');
            $(this).addClass('inputError');
            error = 3;
          }
        }
      });
      if (error == 0) {
        return true;
      } else {
        return false;
      }
    });
    $("input").focus(function() {
      $(this).removeClass('inputError');
    });
  }

  render(){
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
            <h3 className="title">Звёздные Войны: Последние джедаи</h3>
            <ul className="film-info-list">
              <li><span className="bold">Кинопарк 6 Спутник</span><span className="city">Алматы</span></li>
              <li><span className="bold">Зал:</span>4</li>
              <li><span className="bold">Начало сеанса:</span>четверг, 18 января 2018 г., 0:10:00 </li>
              <li><span className="bold">Текущее время: </span>17 января 2018 г., 22:37:59</li>
            </ul>
            <form action="#" className="reservation-form">
              <div className="wrapper-form-group">
                <div className="form-group">
                  <label className="form-label">Телефон:</label>
                  <input type="tel" name="phone" className="text-input requiredField callback-phone" autocomplete="off" placeholder="Ваш контактный телефон" />
                </div>
                <div className="form-group">
                  <label className="form-label">E-mail:</label>
                  <input type="email" name="mail" className="text-input requiredField callback-email" autocomplete="off" placeholder="Ваш E-mail" />
                </div>
              </div>
              <div className="tickets-panel">
                <div className="tickets-item">
                  <div className="tickets-item-title">Взрослый</div>
                  <div className="tickets-item-content">
                    <input type="text" value="1" className="product-count" />
                    <div className="price-and-counter">
                      <span className="price">1000 тг</span>
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
                      <span className="price">1000 тг</span>
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
                      <span className="price">1000 тг</span>
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
                  <input type="submit" value="Подвердить выбор" className="thunderbird-btn submit-btn js-form-submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Reservation;