import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Pages/Home';
import News from '../components/Pages/News';
import SpecialOffer from '../components/Pages/SpecialOffer';
import ProductionBars from '../components/Pages/ProductionBars';
import ScheduleList from '../components/Pages/ScheduleList';
import ScheduleTable from '../components/Pages/ScheduleTable';
import CinemaList from '../components/Pages/CinemaList';
import CinemaTable from '../components/Pages/CinemaTable';
import FilmList from '../components/Pages/FilmList';
import FilmTable from '../components/Pages/FilmTable';
import Soon from '../components/Pages/Soon';
import Cinemas from '../components/Pages/Cinemas';
import Reservation from '../components/Pages/Reservation';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/news' component={News}/>
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