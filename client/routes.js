import React, {useState, useEffect} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'axios'
import {Navbar, Companies, JobDetail, AddJob, AddDetail} from './components'

/**
 * COMPONENT
 */
const Routes = props => {
  const [companyList, setCompanies] = useState([])
  let fetchMe = props.location.pathname.includes('add')

  useEffect(
    () => {
      fetchCompanies()
    },
    [fetchMe]
  )

  const fetchCompanies = async () => {
    const result = await axios.get('/api/companies')

    setCompanies(result.data)
  }

  return (
    <div>
      <Navbar companies={companyList} />
      <Switch>
        <Route path="/activity/:companyId/add" component={AddDetail} />
        <Route path="/activity/:companyId" component={JobDetail} />
        <Route path="/company/add" component={AddJob} />
        <Route path="/inactive" render={() => <Companies active={false} />} />
        <Route
          path="/"
          render={() => (
            <Companies
              fetchCompanies={fetchCompanies}
              companies={companyList}
              active={true}
            />
          )}
        />
      </Switch>
    </div>
  )
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
