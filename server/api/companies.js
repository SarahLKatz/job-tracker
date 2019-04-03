const router = require('express').Router()
const {Company, Detail} = require('../db/models')
module.exports = router

router.get('/inactive', async (req, res, next) => {
  try {
    const companies = await Company.findAll({
      where: {
        status: 'inactive'
      }
    })
    res.json(companies)
  } catch (err) {
    next(err)
  }
})

router.get('/:id/', async (req, res, next) => {
  try {
    const companyInfo = await Company.findOne({
      where: {
        id: req.params.id
      }
    })
    res.json(companyInfo)
  } catch (err) {
    next(err)
  }
})

router.get('/:id/details', async (req, res, next) => {
  try {
    const details = await Detail.findAll({
      where: {
        companyId: req.params.id
      },
      include: [
        {
          model: Company
        }
      ]
    })
    res.json(details)
  } catch (err) {
    next(err)
  }
})

router.post('/:id/details', async (req, res, next) => {
  try {
    let detail = await Detail.create({...req.body, companyId: req.params.id})
    res.status(201).send(detail)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id/details/:detailId', async (req, res, next) => {
  try {
    await Detail.destroy({
      where: {companyId: req.params.id, id: req.params.detailId}
    })
    res.status(204).send()
  } catch (err) {
    next(err)
  }
})

router.put('/:id/inactive', async (req, res, next) => {
  try {
    let inactiveCompany = await Company.update(
      {status: 'inactive'},
      {
        where: {id: req.params.id},
        returning: true
      }
    )
    res.send(inactiveCompany[1])
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    let updatedCompanyInfo = await Company.update(req.body, {
      where: {id: req.params.id},
      returning: true
    })
    res.send(updatedCompanyInfo[1])
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const companies = await Company.findAll({
      where: {
        status: 'active'
      }
    })
    res.json(companies)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    let company = await Company.create({...req.body, status: 'active'})
    res.status(201).send(company)
  } catch (err) {
    next(err)
  }
})
