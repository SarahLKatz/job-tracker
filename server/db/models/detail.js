const Sequelize = require('sequelize')
const db = require('../db')

const Detail = db.define('detail', {
  action: {
    type: Sequelize.ENUM,
    values: [
      'online application',
      'in-person first meet',
      'LinkedIn connect',
      'phone screen',
      'technical phone screen',
      'coding challenge',
      'onsite',
      'offer',
      'rejection',
      'other'
    ],
    allowNull: false
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  notes: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  associatedFile: {
    type: Sequelize.STRING
  }
})

module.exports = Detail
