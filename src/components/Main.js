import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../components/pages/Home';
import News from '../components/pages/news/News';
import NewsItem from '../components/pages/news/NewsItem';
import SpecialOffer from '../components/pages/SpecialOffer';
import ProductionBars from '../components/pages/ProductionBars';
import ScheduleList from '../components/pages/ScheduleList';
import ScheduleTable from '../components/pages/ScheduleTable';
import CinemaList from '../components/pages/CinemaList';
import CinemaTable from '../components/pages/CinemaTable';
import FilmList from '../components/pages/FilmList';
import FilmTable from '../components/pages/FilmTable';
import Soon from '../components/pages/Soon';
import Cinemas from '../components/pages/Cinemas';
import Reservation from '../components/pages/Reservation';
import Premium from '../components/pages/Premium';
import OnlineSales from '../components/pages/OnlineSales';
import Restoranov from '../components/pages/Restoranov';
import Imax from '../components/pages/Imax';
import Dolby from '../components/pages/Dolby';
import About from '../components/pages/About';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/news' component={News}/>
        <Route exact path='/news/:id' component={NewsItem}/>
        <Route exact path='/special-offer' component={SpecialOffer}/>
        <Route exact path='/production-bars' component={ProductionBars}/>
        <Route exact path='/schedulelist' component={ScheduleList}/>
        <Route exact path='/scheduletable' component={ScheduleTable}/>
        <Route exact path='/soon' component={Soon}/>
        <Route exact path='/cinemas' component={Cinemas}/>
        <Route exact path='/cinemalist/city/:city_uuid/id/:uuid/' component={CinemaList}/>
        <Route exact path='/cinematable/city/:city_uuid/id/:uuid/' component={CinemaTable}/>
        <Route exact path='/filmlist/:uuid' component={FilmList}/>
        <Route exact path='/filmtable/:uuid' component={FilmTable}/>
        <Route exact path='/reservation' component={Reservation}/>
        <Route exact path='/premium' component={Premium}/>
        <Route exact path='/online-sales' component={OnlineSales}/>
        <Route exact path='/park-restoranov' component={Restoranov}/>
        <Route exact path='/imax' component={Imax}/>
        <Route exact path='/dolby' component={Dolby}/>
        <Route exact path='/about' component={About}/>
      </Switch>
    );
  }
}

export default Main;