import React from 'react';
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    console.log("nav", this.props);
    // const eachCompany = this.props.companies.map(c=>{
    //   return <button key={`company-${c.id}`} onClick={()=>this.props.setCompany(c)}>{c.name}</button>
    // })
    return (
      <div>
        <Link to='/companies/:company_id'>Dashboard</Link>
        <Link to='/employees'>Employees</Link>
        <Link to='/tickets'>Helpdesk</Link>
        <Link to='/payrolls'>Payroll</Link>
        {this.props.company.name}
      </div>
    );
  }
}

export default Nav
