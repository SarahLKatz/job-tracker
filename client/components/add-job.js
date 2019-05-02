import React from 'react'
import history from '../history'
import axios from 'axios'

const AddJob = () => {
  async function addNewJob(e) {
    e.preventDefault()
    const jobDetails = {}
    Object.values(e.target).forEach(
      input => (jobDetails[input.name] = input.value)
    )
    try {
      await axios.post('/api/companies', jobDetails).then(res => {
        const companyId = res.data.id
        history.push(`/activity/${companyId}`)
      })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="add">
      <h3>Add A New Job</h3>
      <form onSubmit={addNewJob} name="newjob">
        <div>
          <label htmlFor="name">Company Name</label>
          <input name="name" type="text" required />
        </div>
        <div>
          <label htmlFor="industry">Industry</label>
          <input name="industry" type="text" required />
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <input name="website" type="text" required />
        </div>
        <div>
          <label htmlFor="recruiterName">Recruiter Name</label>
          <input name="recruiterName" type="text" />
        </div>
        <div>
          <label htmlFor="recruiterEmail">Recruiter Email</label>
          <input name="recruiterEmail" type="text" />
        </div>
        <div>
          <label htmlFor="recruiterPhone">Recruiter Phone</label>
          <input name="recruiterPhone" type="text" />
        </div>
        <button>Add Company</button>
      </form>
    </div>
  )
}

export default AddJob
