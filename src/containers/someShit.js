import React from 'react';
import { Link } from 'react-router-dom'
//
// import Nav from './nav';
// import Dashboard from './dashboard';
// import EmployeesContainer from './employeesCont';
// import TicketsContainer from './ticketsCont';
// import PayrollsContainer from './payrollsCont';

class SomeShit extends React.Component {

  setCompany = (company) => {
    console.log("SomeShit - setCompany", company);
    this.props.setCompany(company)
  }

  render() {
    console.log("SomeShit - props", this.props);
    const eachCompany = this.props.companies.map(c=>{
      return <button key={`comp-${c.id}`} id={c.id} onClick={(e)=>this.setCompany(c)}><Link to={`/companies/${c.id}`}>{c.name}</Link></button>
    })
    return (
      <div>
        {this.props.companies.length === 0
          ? null
        : eachCompany}
      </div>
    );
  }
}

export default SomeShit

//
// (
//     <Router>
//       <Route path='/companies/3' render={()=><Dashboard company={this.state.company} />} />
//       <Route exact path='/employees' render={()=><EmployeesContainer company={this.state.company} />} />
//       <Route exact path='/tickets' render={()=><TicketsContainer company={this.state.company} />} />
//       <Route exact path='/payrolls' render={()=><PayrollsContainer company={this.state.company} />} />
//     </Router>)
