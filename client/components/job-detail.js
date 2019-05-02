import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {css} from '@emotion/core'
import axios from 'axios'
import history from '../history'

const JobDetail = ({match, name}) => {
  const companyId = match.params.companyId
  const initialDetails = [{company: companyId}]
  const [details, setDetails] = useState(initialDetails)
  const [company, setCompany] = useState({})

  useEffect(
    () => {
      fetchDetails()
    },
    [companyId]
  )

  const fetchDetails = async () => {
    const result = await axios.get(`/api/companies/${companyId}/details`)
    if (result.data.length) {
      setDetails(result.data)
      setCompany(result.data[0].company)
    } else {
      await axios.get(`/api/companies/${companyId}`).then(res => {
        setCompany(res.data)
      })
    }
  }

  const fetchCompany = async () => {
    const result = await axios.get(`/api/companies/${companyId}/details`)
  }

  const archiveCompany = async () => {
    await axios
      .put(`/api/companies/${companyId}/inactive`)
      .then(() => history.push('/', {update: true}))
      .catch(err => console.error(err))
  }

  return (
    <div className="activity-list">
      <h3>Job Activity for {company.name}</h3>
      {details[0].action ? (
        <table>
          <thead>
            <tr>
              <td>Date</td>
              <td>Activity Type</td>
              <td>Notes</td>
              {/*<td>Associated File(s)</td>*/}
            </tr>
          </thead>
          <tbody>
            {details &&
              details.sort((a, b) => (a.date > b.date ? 1 : -1)).map(item => (
                <tr key={item.id}>
                  <td className="date">{item.date}</td>
                  <td className="type">{item.action}</td>
                  <td>{item.notes}</td>
                  {/*<td><a href={item.associatedFile}>{item.associatedFile}</a></td>*/}
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <h4>No activity</h4>
      )}
      <div>
        <Link to={`/activity/${companyId}/add`} className="add-new">
          Add A Job Activity
        </Link>
      </div>
      <div>
        <button onClick={archiveCompany}>Archive Company</button>
      </div>
    </div>
  )
}

export default JobDetail
