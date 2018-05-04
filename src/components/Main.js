import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import CinemaList from '../components/Pages/CinemaList';
import Home from '../components/Pages/Home';
import News from '../components/Pages/News';
import SpecialOffer from '../components/Pages/SpecialOffer';
import ScheduleList from '../components/Pages/ScheduleList';
import ScheduleTable from '../components/Pages/ScheduleTable';
import Soon from '../components/Pages/Soon';
import Cinemas from '../components/Pages/Cinemas';

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/news' component={News}/>
          <Route exact path='/speacial-offer' component={SpecialOffer}/>
          <Route exact path='/scheduleList' component={ScheduleList}/>
          <Route exact path='/scheduleTab' component={ScheduleTable}/>
          <Route exact path='/soon' component={Soon}/>
          <Route exact path='/cinemas' component={Cinemas}/>
          <Route path='/cinemalist' component={CinemaList}/>
        </Switch>
      </div>
    );
  }
}

export default Main;