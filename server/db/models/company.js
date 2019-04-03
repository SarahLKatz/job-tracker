const Sequelize = require('sequelize')
const db = require('../db')

const Company = db.define('company', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  industry: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  website: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  recruiterName: {
    type: Sequelize.STRING
  },
  recruiterEmail: {
    type: Sequelize.STRING
  },
  recruiterPhone: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.ENUM,
    values: ['active', 'inactive']
  }
})

module.exports = Company
