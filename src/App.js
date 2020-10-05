import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './components/HomeComponent';
import Services from './components/ServicesComponent';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Login from './components/LoginComponent';
import NewWorkDay from './components/workdays/NewWorkDayComponent';
import WorkDayIndex from './components/workdays/WorkDayIndex';
import WorkDayShow from './components/workdays/WorkDayShow';
import EditWorkDay from './components/workdays/EditWorkDay';

function App() {
  return (
    <Router>  
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component={Login} />
          <Route path='/work_day/new' exact component={NewWorkDay} />
          <Route path='/work_days' exact component={WorkDayIndex} />
          <Route path='/work_days/show/:id' exact component={WorkDayShow} />
          <Route path='/work_day/edit/:id' exact component={EditWorkDay} />
          <Route path='/services' exact component={Services} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
