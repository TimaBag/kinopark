import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OnlineSales extends Component {

  render() {
    return (
      <div className="content">
        <div className="container">
          <h1>Онлайн продажи</h1>
          <p>Успей занять любимые места - покупай билеты онлайн!</p>
          <p>Главным преимуществом нашей системы является то, что вам не придется переплачивать за билет в кино, так как на сайте kinopark.kz все оплаты производятся без комиссии и переплаты!</p>
          <p>Внимание! Продажа билетов онлайн закрывается ровно за час до начала сеанса.</p>
          <p>Как купить билет онлайн:</p>
          <p>1) Зайдите в раздел <Link to="/scheduleList" target="_self">«Расписание»</Link> на сайте. Найдите нужный кинотеатр своего города и нажмите «Купить».</p>
          <p>2) Выберите фильм, удобное время, подходящий тариф и укажите нужное количество билетов.</p>
          <p>3) Заполните данные в полях – адрес и номер телефона, выберите удобные места. Нажмите кнопку «Подтвердить».</p>
          <p>4) Далее перейдите на страницу банка и заполните форму EPAY, а затем нажмите кнопку «Оплатить».</p>
          <p>5) Кликните кнопку "Узнать номер брони". Также номер брони приходит в письме от Кинопарк на указанный Вами эл. адрес. Придя на кассу, покажите этот номер на своем устройстве или просто озвучьте.</p>
          <p>Поздравляем! Онлайн покупка билетов проведена успешно. Приятного кинопросмотра!</p>
          <p>* Если у вас возникли трудности c онлайн покупкой или вам нужно оформить возврат, просим обращаться по номерам <em>+7 (702) 000-60-68(WhatsApp, звонки), +7 (702) 000-60-69 (WhatsApp, звонки), +7 (727) 331 64 34(звонки)</em> либо по адресу <a href="mailto:info@kinopark.kz" target="_self">info@kinopark.kz</a>.</p>
          <p>* Возврат билетов онлайн оформляется не менее чем за час до начала сеанса и при условии, что электронный билет не прошел процедуру замены на бумажный.</p>
          <p>* Онлайн продажи билетов открываются с 10:00 и доступны до последнего сеанса текущего дня.</p>
          <p>* Внимание! Продажа билетов онлайн в IMAX-залы осуществляется только по взрослому тарифу, тарифы студенческий и школьный в указанные залы не применяются.</p>
        </div>
      </div>
    )
  }
}

export default OnlineSales;