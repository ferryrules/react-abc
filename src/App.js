import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './containers/nav';
import Dashboard from './containers/dashboard';
import SomeShit from './containers/someShit';
import EmployeesContainer from './containers/employeesCont';
import TicketsContainer from './containers/ticketsCont';
import PayrollsContainer from './containers/payrollsCont';
import './App.css';

class App extends React.Component {

  state ={
    company: []
  }

  componentDidMount() {
    let pathname = window.location.pathname
    // console.log(window.location);
    fetch(`http://localhost:3000${pathname}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(r=>r.json())
    .then(company=>{
      this.setState({
        company
      })
    })
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <Router>
          <Nav
            company={this.state.company} />
          <Route exact path='/' component={SomeShit} />
          <Route exact path='/companies/:company_id' component={Dashboard} />
          <Route exact path='/employees' component={EmployeesContainer} />
          <Route exact path='/tickets' component={TicketsContainer} />
          <Route exact path='/payrolls' component={PayrollsContainer} />
        </Router>
      </div>
    );
  }
}

export default App;
