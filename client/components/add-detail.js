import React from 'react'
import history from '../history'
import axios from 'axios'

const AddDetail = ({match}) => {
  const companyId = match.params.companyId

  async function addNewDetail(e) {
    e.preventDefault()
    const actionDetails = {}
    Object.values(e.target).forEach(
      input => (actionDetails[input.name] = input.value)
    )
    actionDetails.date = new Date(actionDetails.date).toDateString()
    try {
      await axios.post(`/api/companies/${companyId}/details`, {
        ...actionDetails,
        companyId
      })
      await history.push(`/activity/${companyId}`)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <h3>Add A New Job Activity</h3>

      <form onSubmit={addNewDetail} name="newjob">
        <div>
          <label htmlFor="date">Date</label>
          <input name="date" type="text" required />
        </div>
        <div>
          <label htmlFor="action">Action Type:</label>
          <select name="action">
            <option value="online application">online application</option>
            <option value="in-person first meet">in-person first meet</option>
            <option value="LinkedIn connect">LinkedIn connect</option>
            <option value="phone screen">phone screen</option>
            <option value="technical phone screen">
              technical phone screen
            </option>
            <option value="coding challenge">coding challenge</option>
            <option value="onsite">onsite interview</option>
            <option value="offer">offer</option>
            <option value="rejection">rejection</option>
            <option value="other">other</option>
          </select>
        </div>
        <div>
          <label htmlFor="notes">Notes</label>
          <input name="notes" type="text" required />
        </div>
        <div>
          <label htmlFor="associatedFile">Associated File(s)</label>
          <input name="associatedFile" type="text" />
        </div>
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddDetail
