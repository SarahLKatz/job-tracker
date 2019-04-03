import React from 'react'
import PropTypes from 'prop-types'

/**
 * COMPONENT
 */
export const UserHome = props => {
  return (
    <div>
      <h3>Welcome, Banana</h3>
    </div>
  )
}

/**
 * CONTAINER
 */

export default UserHome

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
