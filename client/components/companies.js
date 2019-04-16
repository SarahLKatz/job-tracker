import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {css} from '@emotion/core'
import axios from 'axios'

const Companies = ({companies, fetchCompanies, active}) => {
  const [companyList, setCompanies] = useState([])

  useEffect(
    () => {
      if (!companies && !active) {
        fetchInactiveCompanies()
      } else {
        setCompanies(companies)
      }
    },
    [active]
  )

  const fetchInactiveCompanies = async () => {
    const results = await axios.get(`/api/companies/inactive`)

    setCompanies(results.data)
  }

  const archiveCompany = async companyId => {
    await axios
      .put(`/api/companies/${companyId}/inactive`)
      .then(() => fetchCompanies())
      .catch(err => console.error(err))
  }

  return (
    <div className="company-list">
      <h3>{!active ? 'Inactive' : ''} Company List</h3>
      <table>
        <thead>
          <tr>
            <td>Company Name</td>
            <td>Main Contact Name</td>
            <td>Website</td>
            <td>Activity</td>
            {active && <td>Archive</td>}
          </tr>
        </thead>
        <tbody>
          {companyList &&
            companyList.map((company, idx) => (
              <tr key={idx}>
                <td>{company.name}</td>
                <td>{company.recruiterName || 'none'}</td>
                <td>
                  <a href={company.website}>{company.website}</a>
                </td>
                <td>
                  <Link className="activity-link" to={`activity/${company.id}`}>
                    View Activity
                  </Link>
                </td>
                {active && (
                  <td>
                    <button onClick={() => archiveCompany(company.id)}>
                      Archive Company
                    </button>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
      {active && (
        <Link to="/company/add" className="add-new">
          Add A Company
        </Link>
      )}
    </div>
  )
}

export default Companies
