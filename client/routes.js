import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Companies, JobDetail, AddJob, AddDetail} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/activity/:companyId/add" component={AddDetail} />
        <Route path="/activity/:companyId" component={JobDetail} />
        <Route path="/company/add" component={AddJob} />
        <Route path="/inactive" render={() => <Companies active={false} />} />
        <Route
          path="/"
          render={() => (
            <Companies companies={this.props.companies} active={true} />
          )}
        />
        {/* 
        <Route path="/add" component={AddDetail} />
        <Route path="/companies" component={Companies} />
        <Route path="/details" component={JobDetail} />
      */}
      </Switch>
    )
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
