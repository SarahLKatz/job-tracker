import React, {useState, useEffect} from 'react'

import {Navbar} from './components'
import Routes from './routes'

import axios from 'axios'

const App = () => {
  const [companyList, setCompanies] = useState([])
  let fetchMe = false

  useEffect(() => {
    fetchCompanies()
  }, fetchMe)

  const fetchCompanies = async () => {
    const result = await axios.get('/api/companies')

    setCompanies(result.data)
  }

  return (
    <div>
      <Navbar companies={companyList} />
      <Routes companies={companyList} />
    </div>
  )
}

export default App
