import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Navbar = props => (
  <div>
    <h1>Job Tracker</h1>
    <nav>
      <div>
        <Link to="/">All Companies</Link>
        {/* props.companies.map(({name, id}) => (
          <Link to={`/activity/${id}`}>{name}</Link>
        ))*/}
      </div>
    </nav>
    <hr />
  </div>
)

export default Navbar
