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
        <Route exact path='/cinemalist' component={CinemaList}/>
        <Route exact path='/cinematable' component={CinemaTable}/>
        <Route exact path='/filmlist' component={FilmList}/>
        <Route exact path='/filmtable' component={FilmTable}/>
        <Route exact path='/reservation' component={Reservation}/>
      </Switch>
    );
  }
}

export default Main;