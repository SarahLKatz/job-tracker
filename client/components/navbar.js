import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Navbar = props => (
  <div>
    <h1>Job Tracker</h1>
    <nav className="companies-nav">
      <Link to="/">Active Companies List</Link>
      {props.companies.map(({name, id}) => (
        <Link key={id} className="company-link" to={`/activity/${id}`}>
          {name}
        </Link>
      ))}
      <Link to="/inactive">Inactive Companies</Link>
    </nav>
    <hr />
  </div>
)

export default Navbar
