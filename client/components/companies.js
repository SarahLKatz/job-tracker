import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {css} from '@emotion/core'
import axios from 'axios'

const Companies = ({companies, active}) => {
  const [companyList, setCompanies] = useState([])
  let fetchMe = false

  useEffect(() => {
    if (!companies && !active) {
      fetchInactiveCompanies()
    } else {
      setCompanies(companies)
    }
  })

  const fetchInactiveCompanies = async () => {
    const results = await axios.get(`/api/companies/inactive`)

    setCompanies(results.data)
  }

  // Add a function to archive company
  const archiveCompany = async companyId => {
    await axios
      .put(`/api/companies/${companyId}/inactive`)
      .then(() => fetchCompanies())
      .catch(err => console.error(err))
  }

  return (
    <div className="company-list">
      <h3>Company List</h3>
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
                  <Link to={`activity/${company.id}`}>View Activity</Link>
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
