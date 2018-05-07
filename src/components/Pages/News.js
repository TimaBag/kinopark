import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const news = [
  {
    img : require("../../img/static/news/03.jpg"),
    date : "09.12.2017",
    title : "Рождественская серия «Доктора Кто» в Алматы и Астане!",
    desc : "Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Равным образом сложившаяся структура организации позволяет оценить значение модели развития. Значимость этих проблем настолько очевидна, что консультация с широким активом требуют от нас анализа существенных финансовых и административных условий. Таким образом укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании форм развития. Равным образом постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Задача организации, в особенности же консультация с широким активом обеспечивает",
  },
  {
    img : require("../../img/static/news/04.jpg"),
    date : "09.12.2017",
    title : "Рождественская серия «Доктора Кто» в Алматы и Астане!",
    desc : "Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Равным образом сложившаяся структура организации позволяет оценить значение модели развития. Значимость этих проблем настолько очевидна, что консультация с широким активом требуют от нас анализа существенных финансовых и административных условий. Таким образом укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании форм развития. Равным образом постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Задача организации, в особенности же консультация с широким активом обеспечивает",
  },

]

class News extends Component {

  renderNews(news,index){
    return(
      <article key={index} className="new-block">
        <div className="item-img">
          <Link to=""><img src={news.img} alt="alt" /></Link>
        </div>
        <div className="item-desc">
          <span className="date">{news.date}</span>
          <h3 className="title">{news.title}</h3>
          <p className="text">
            {news.desc}
          </p>
          <div className="more-info">
            <Link to="">Подробнее...</Link>
          </div>
        </div>
      </article>
    )
  }

  render() {
    return (
      <div className="global-wrapper">
        <div className="content">
          <div className="container">
            <h1>Новости</h1>
            {news.map((news,index) => this.renderNews(news,index))}
            <div className="wrapper-pagination">
              <ul className="main-pagination clearfix">
                <li className="backward disabled"><Link to=""><em className="fa fa-angle-left"></em></Link></li>
                <li><Link to="" className="active">1</Link></li>
                <li><Link to="">2</Link></li>
                <li><Link to="">3</Link></li>
                <li><Link to="">4</Link></li>
                <li><Link to="">5</Link></li>
                <li className="forward"><Link to=""> <em className="fa fa-angle-right"></em></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default News;