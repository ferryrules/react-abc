import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './containers/nav';
import CompanyDashboard from './containers/companyDashboard';
import SomeShit from './containers/someShit';
import EmployeesContainer from './containers/employeesCont';
import TicketsContainer from './containers/ticketsCont';
import PayrollsContainer from './containers/payrollsCont';
import './App.css';

class App extends React.Component {

  state ={
    companies: [],
    company: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/companies", {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(r=>r.json())
    .then(companies=>{
      // let comp = companies.length > 1 ? 'companies' : 'company'
      this.setState({
        company: companies[0]
      })
    })
    .catch(error=> console.error('Error', error))
  }

  render() {
    return (
      <div>
        <Router>
          <Nav company={this.state.company} />
          <Route exact path='/' render={()=> <SomeShit company={this.state.company} setCompany={this.setCompany} />} />
          <Route path='/companies/:company_id' render={()=><CompanyDashboard company={this.state.company} />} />
          <Route exact path='/employees' render={()=><EmployeesContainer company={this.state.company} />} />
          <Route exact path='/companies/:company_id/tickets' render={()=><TicketsContainer company={this.state.company} />} />
          <Route exact path='/payrolls' render={()=><PayrollsContainer company={this.state.company} />} />
        </Router>
      </div>
    );
  }
}

export default App;


// {this.state.companies.length > 1
//   ?
//   : (
//     <Fragment>
//       <Nav company={this.state.company} />
//       <Route exact path='/companies/:company_id' component={Dashboard} />
//       <Route exact path='/employees' component={EmployeesContainer} />
//       <Route exact path='/tickets' component={TicketsContainer} />
//       <Route exact path='/payrolls' component={PayrollsContainer} />
//     </Fragment>)}
